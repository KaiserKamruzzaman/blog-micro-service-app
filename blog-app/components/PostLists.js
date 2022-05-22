import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostLists = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div className="" key={post.id}>
        Title: {post.title}
        <br></br>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-4">{renderPosts}</div>;
};

export default PostLists;
