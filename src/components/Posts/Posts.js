import Post from "./Post/Post.js";
import "./Posts.css";

const Posts = () => {
  return (
    <section className="posts">
      Posts
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default Posts;
