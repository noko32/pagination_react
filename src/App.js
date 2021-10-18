import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts'
import Paginations from './components/Paginations'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);

    }

    fetchPosts();
  }, []);

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mt-5">
      <h1 className="text-light mb-3">My blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Paginations postsPerPage={postsPerPage} totalPosts={posts.length} />
    </div>
  );
};

export default App;
