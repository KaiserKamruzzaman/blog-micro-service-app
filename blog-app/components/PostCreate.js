import { useState } from "react";
import axios from "axios";

const postCreate = () => {
  const [title, setTitle] = useState("");

  const createPostHandler = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", { title });
    setTitle("");
  };

  return (
    <div>
      <h1 className="text-2xl">Create Post...</h1>
      <form>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
          onClick={createPostHandler}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default postCreate;
