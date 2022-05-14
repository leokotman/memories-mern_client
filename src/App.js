import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

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
          <Col sm={12} xs={12} md={8} lg={8} xl={10} >
            <Posts />
          </Col>
          <Col>
            <Form />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
