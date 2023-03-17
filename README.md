-Tag is for building the copyright watermark for our website. (Loginpage) its used in the page using <Copyright /> tag in jsx.
-First box is for the entire signup screen and second box is for the form.





Notes for the real-time crypto-graph:



1. ws variable is used as a useRef hook to create a persistant websocket object

2. url - a base URL for the Api

3. first- another useRef hook to prevent an initial render

4. websocket protocol can be found at: https://docs.cloud.coinbase.com/advanced-trade-api/docs/ws-overview

5. API key:

6. The empty array passed as the 2nd argument to useEffect is crucial. This causes the effect hook to only run on the initial render. This is known as the dependency array.  useEffect(()=>{},[]) 

7. The error message you are seeing is indicating that the sort() method expects a value to be returned at the end of the comparison function that you are passing to it. In your code, the sort() method is not returning a value in all cases, which is causing the error message.

To fix this error, you can modify your filtered array sorting code to ensure that a value is always returned. One way to do this is to add an else statement that returns 1 if the comparison condition is not met:
 
 let filtered = pairs.filter((pair) => {
  if (pair.quote_currency === "INR") {
    return pair;
  } else {
    return 1;
  }
}).sort((a, b) => {
  if (a.base_currency < b.base_currency) {
    return -1;
  } else {
    return 1;
  }
});

In this updated code, the else statement returns 1 if the currency is not INR, ensuring that a value is always returned for the filter() method. Similarly, the else statement in the sort() method ensures that a value is always returned for the comparison function.

8. the Dashboard.js conatins the chart that will display data. Its  called in market page as <Dashboard/>

9. use backticks for defining url template string. second useEffect.