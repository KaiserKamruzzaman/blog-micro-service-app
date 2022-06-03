import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const createCommentHandler = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div className="">
      {" "}
      <form>
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Enter Your Comment.."
          className="mt-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />{" "}
        <br></br>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded mb-1 ml-16 mt-2 block"
          onClick={createCommentHandler}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
