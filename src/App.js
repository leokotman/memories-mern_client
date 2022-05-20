//styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts.js';

//components
import Posts from './components/Posts/Posts.js';
import CreatePost from './components/CreatePost/CreatePost.js';

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import headerImg from "./images/photos.jpg";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch])

  return (
    <Container fluid className="App">
      <Container>
        <header>
          <h1>Memories</h1>
          <img src={headerImg} alt="memories header" width="100"  />
        </header>
      </Container>
      <Container>
        <Row>
          <Col sm={12} xs={12} md={8} lg={8} xl={8} >
            <Posts />
          </Col>
          <Col>
            <CreatePost />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
