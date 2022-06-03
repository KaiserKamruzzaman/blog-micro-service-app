import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostLists = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="mt-3 p-2 text-center  mb-2 max-w-sm rounded overflow-hidden shadow-lgmax-w-sm rounded overflow-hidden shadow-lg"
        key={post.id}
      >
        <span className="font-bold ">Post Title</span>: {post.title}
        <br></br>
        <hr></hr>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-4">{renderPosts}</div>;
};

export default PostLists;
