import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PostLists = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, [posts]);
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div className="" key={post.id}>
        Title: {post.title}
        <br></br>
        <label>Comment:</label>
        <form>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </form>
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-4">{renderPosts}</div>;
};

export default PostLists;
