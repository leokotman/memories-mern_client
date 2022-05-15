import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <section className="createPost">
      <Card>
      <h2>Create a memory</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formCreator">
          <Form.Label visuallyHidden>Creator</Form.Label>
          <Form.Control type="text" placeholder="Creator" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label visuallyHidden>Post Title</Form.Label>
          <Form.Control type="text" placeholder="Post Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label visuallyHidden>Post Message</Form.Label>
          <Form.Control as="textarea" placeholder="Post Message" rows="4" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTags">
          <Form.Label visuallyHidden>Post Tags</Form.Label>
          <Form.Control as="textarea" placeholder="Tags (comma separated)" rows="2" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="danger" type="reset">
          Clear
        </Button>
      </Form>
    </Card>
    </section>
    
  );
};

export default CreatePost;
