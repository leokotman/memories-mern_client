import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Post from "./Post/Post.js";
import "./Posts.css";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <section className="posts">
      {!posts.length ? (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      ) :
      (
      posts.map((post) => (
        <Post key={post._id} post={post} />
      ))
      )}
    </section>
  );
};

export default Posts;
