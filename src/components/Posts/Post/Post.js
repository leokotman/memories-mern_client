import {useState} from "react";
import moment from "moment";

import "./Post.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import exampleImg from "../../../images/photos.jpg";
import likeImgColour from "../../../images/like_colour.svg";
import likeImgEmpty from "../../../images/like_empty.svg";
import trashEmpty from "../../../images/trash-can_empty.svg";
import trashColour from "../../../images/trash-can_colour.svg";
import dots from "../../../images/3dots.svg";

const Post = ({post}) => {
    const [likeSrc, setLikeSrc] = useState(likeImgEmpty);
    const [deleteSrc, setDeleteSrc] = useState(trashEmpty);

    return (
        <Card className="post">
            <Card.Img src={post.selectedFile} width="100px" />
            <Card.ImgOverlay>
                <div>
                    <Card.Title as="h4">{post.creator}</Card.Title>
                    <Card.Text>{moment(post.createdAt).fromNow()}</Card.Text>
                </div>
                <img src={dots} width="20" className="actionImg" alt="action" />
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Subtitle className="text-muted">
                    {post.tags.map((tag) => `#${tag} `)}
                </Card.Subtitle>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.message}</Card.Text>
                <Card.Footer>
                    <Button
                        variant="light"
                        onMouseEnter={() => setLikeSrc(likeImgColour)}
                        onMouseLeave={() => setLikeSrc(likeImgEmpty)}
                    >
                        <img src={likeSrc} width="20" alt="like" />
                        LIKE
                        <span> {post.likeCount}</span>
                    </Button>
                    <Button
                        variant="light"
                        onMouseEnter={() => setDeleteSrc(trashColour)}
                        onMouseLeave={() => setDeleteSrc(trashEmpty)}
                    >
                        <img src={deleteSrc} width="20" alt="delete" />
                        DELETE
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default Post;
