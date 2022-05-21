import PostCreate from "../components/PostCreate";
import PostLists from "../components/PostLists";
export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-5">Welcome to my Blog App...</h1>
      <hr></hr>
      <PostCreate />
      <hr></hr>
      <h1 className="text-2xl">List of My Posts...</h1>
      <PostLists />
    </div>
  );
}
