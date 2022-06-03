import PostCreate from "../components/PostCreate";
import PostLists from "../components/PostLists";
export default function Home() {
  return (
    <div className="container mx-auto">
      <PostCreate />
      <hr></hr>
      <h1 className="text-2xl font-bold">List of My Posts...</h1>
      <hr></hr>
      <PostLists />
    </div>
  );
}
