import React,{useState,useEffect,useRef} from 'react'
import Dashboard from '../components/Dashboard';



function MarketPage() {
  
    const [currencies, setcurrencies] = useState([]);
    const [pair, setpair] = useState("");
    const [price, setprice] = useState("0.00");
    const [pastData, setpastData] = useState({});
    const ws=useRef(null);

    let first=useRef(false);
    const url="https://api.pro.coinbase.com";
     

    //For initial render
    useEffect(()=>{
      //websocket api connection
      ws.current= new WebSocket('wss://ws-feed.pro.coinbase.com');
       let pairs=[];
       //async-await function
        const apiCall=async()=>{
        await fetch(url +"/products")
        .then((res)=> res.json()).then((data)=>(pairs=data))
        //filter currencies here, set to INR
        let filtered=pairs.filter((pair)=>{
                 if(pair.quote_currency === "INR"  ){
                  return pair;
                 }else{
                   return 1;
                   }
                 }).sort((a,b)=>{
                  if(a.base_currency < b.base_currency){
                    return -1;
                  }else{
                    return 1;
                  }
                 });
        setcurrencies(filtered);

        first.current=true;


      };
       
      apiCall()
     
    },[])

   
    //UseEffect for getting the data from the api
    useEffect(()=>{
      if(!first.current){
        return;
      }



      let msg={
        type: "subscriber",
        product_ids:[pair],
        channels: ["ticker"]
      };
      let jsonMsg= JSON.stringify(msg);
      ws.current.send(jsonMsg);
      
      let historicalDataURL= `${url}/products/${pair}/candles?granularity=86400`;
      const fetchHistoricalData= async()=>{
        let dataArr=[];
        await fetch(historicalDataURL).then((res)=>res.json())
                                      .then((data)=>(dataArr=data));

                                      
        //insert format data here
      }
        fetchHistoricalData();



        ws.current.onmessage=(e)=>{
          let data= JSON.parse(e.data);
          if(data.type !== "ticker"){
            return;
          }
          if(data.product_id === pair){
            setprice(data.price);
          }
        

      };},[pair])
      const handleSelect = (e) => {
        let unsubMsg = {
          type: "unsubscribe",
          product_ids: [pair],
          channels: ["ticker"]
        };
        let unsub = JSON.stringify(unsubMsg);
    
        ws.current.send(unsub);
    
        setpair(e.target.value);
      };
    
  return (
           
    <div className="container">
        {
           <select name="currency" value={pair} onChange={handleSelect} >
            {currencies.map((cur,idx)=>{
              return(
                   <option key={idx} value={cur.id}>
                    {cur.display_name}
                   </option>
              ); 
            })}
           </select>
        }
        <Dashboard price={price} data={pastData}/>
    </div>
    );
}

export default MarketPage;

