import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostLists = () => {
  const [posts, setPosts] = useState({});
  console.log(posts);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div className="" key={post.id}>
        Title: {post.title}
        <br></br>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-4">{renderPosts}</div>;
};

export default PostLists;
