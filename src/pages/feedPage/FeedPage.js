import React, {useState,useEffect} from 'react';
import axios from "axios";






function FeedPage(){

   const[posts,setPosts]= useState([]);
   const [newPostText, setNewPostText]= useState('');
   
   
   useEffect(() => {
    // Make API requests to get posts
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      });
  }, []);


   const handleNewPostChange = event => {
    setNewPostText(event.target.value);
  };
   const handleNewPostSubmit = event => {
    event.preventDefault();
    // Make API request to create new post
axios.post('/api/posts', { text: newPostText })
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPostText('');
      });
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <header className="text-center">
               <h1 className="text-3xl font-bold text-purple-500">Feed</h1>
      </header>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">New Post</h2>
        <form onSubmit={handleNewPostSubmit} className="mt-4">
          <textarea value={newPostText} onChange={handleNewPostChange}
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-prple-500"
          />
          <button type="submit"
          className="mt-4 px-4 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-200">Post</button>
        </form>


        <section className="mt-8">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <ul className="mt-4">
          {posts.map=(post =>(
            <li key={post.id} className="py-2 border-b border-gray-400">{post.text}</li>
          ))}
          </ul>
        </section>
      </section>
    </div>
  )
}

export default FeedPage;