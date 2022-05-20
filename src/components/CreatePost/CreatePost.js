import { useState } from "react";
import {useDispatch} from 'react-redux'
import {createPost} from "../../actions/posts";

import FileBase from "react-file-base64";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreatePost.css";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    likeCount: 0,
    createdAt: ""
  });

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createPost(postData));
  }

  return (
    <section className="createPost">
      <Card>
        <h2>Create a memory</h2>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCreator">
            <Form.Label visuallyHidden>Creator</Form.Label>
            <Form.Control
              type="text"
              name="creator"
              placeholder="Creator"
              required
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label visuallyHidden>Post Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Post Title"
              required
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label visuallyHidden>Post Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Post Message"
              rows="4"
              required
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTags">
            <Form.Label visuallyHidden>Post Tags</Form.Label>
            <Form.Control
              as="textarea"
              name="tags"
              placeholder="Tags (comma separated)"
              rows="2"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
          </Form.Group>
            <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          
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
