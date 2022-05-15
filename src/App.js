import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from './components/Posts/Posts.js';
import CreatePost from './components/CreatePost/CreatePost.js';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import headerImg from "./images/photos.jpg";

function App() {
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
