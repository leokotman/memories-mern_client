import {useState} from 'react';

import "./Post.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import exampleImg from "../../../images/photos.jpg";
import likeImgColour from "../../../images/like_colour.svg";
import likeImgEmpty from "../../../images/like_empty.svg";
import trashEmpty from "../../../images/trash-can_empty.svg";
import trashColour from "../../../images/trash-can_colour.svg";
import dots from "../../../images/3dots.svg";

const Post = () => {
  const [likeSrc, setLikeSrc] = useState(likeImgEmpty);
  const [deleteSrc, setDeleteSrc] = useState(trashEmpty);

  return (
    <Card className="post">
      <Card.Img src={exampleImg} width="100px" />
      <Card.ImgOverlay>
        <div>
          <Card.Title as="h4">Creator</Card.Title>
          <Card.Text>Date created</Card.Text>
        </div>
        <img src={dots} width="20" className="actionImg"/>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Subtitle className="text-muted">Tags</Card.Subtitle>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
          Post message long text, long text,long text,long text,
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="light" onMouseEnter={() => setLikeSrc(likeImgColour)} onMouseLeave={() => setLikeSrc(likeImgEmpty)} >
          <img src={likeSrc} width="20" />
          LIKE
          <span> №</span>
        </Button>
        <Button variant="light" onMouseEnter={() => setDeleteSrc(trashColour)} onMouseLeave={() => setDeleteSrc(trashEmpty)}>
          <img src={deleteSrc} width="20"/>
          DELETE
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Post;
