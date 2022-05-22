import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Post from "./Post/Post.js";
import "./Posts.css";

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="posts">
      {!posts.length ? (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      ) :
      (
      posts.map((post) => (
        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
      ))
      )}
    </section>
  );
};

export default Posts;
