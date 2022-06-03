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
    <div className="text-center w-3/6 m-auto mt-5">
      <h1 className="text-2xl mb-2 font-bold">Create a Post...</h1>
      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Your Post Title.."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
        <button
          type="submit"
          className=" mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
          onClick={createPostHandler}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default postCreate;
