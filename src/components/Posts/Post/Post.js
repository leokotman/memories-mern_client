import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import moment from "moment";

import "./Post.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//post images
import likeImgColour from "../../../images/like_colour.svg";
import likeImgEmpty from "../../../images/like_empty.svg";
import trashEmpty from "../../../images/trash-can_empty.svg";
import trashColour from "../../../images/trash-can_colour.svg";
import dots from "../../../images/3dots.svg";

const Post = ({ post, setCurrentId }) => {
	const [likeSrc, setLikeSrc] = useState(likeImgEmpty);
	const [deleteSrc, setDeleteSrc] = useState(trashEmpty);
	const dispatch = useDispatch();

	const removePost = (id) => {
		if (window.confirm("Do you really want to delete this post?")) {
			console.log("This post was deleted", post);
			dispatch(deletePost(id));
		} else {
			console.log("The post wasn't deleted", post);
		}
	};

	const like = (id) => {
		dispatch(likePost(id));
	};

	return (
		<Card className="post">
			<Card.Img src={post.selectedFile} width="100px" />
			<Card.ImgOverlay>
				<div>
					<Card.Title as="h4">{post.creator}</Card.Title>
					<Card.Text>{moment(post.createdAt).fromNow()}</Card.Text>
				</div>
				<img src={dots} width="20" className="actionImg" alt="action" onClick={() => setCurrentId(post._id)} />
			</Card.ImgOverlay>
			<Card.Body>
				<Card.Subtitle className="text-muted">{post.tags.map((tag) => `#${tag} `)}</Card.Subtitle>
				<Card.Title>{post.title}</Card.Title>
				<Card.Text>{post.message}</Card.Text>
				<Card.Footer>
					<Button variant="light" onMouseEnter={() => setLikeSrc(likeImgColour)} onMouseLeave={() => setLikeSrc(likeImgEmpty)} onClick={() => like(post._id)}>
						<img src={likeSrc} width="20" alt="like" />
						&nbsp; LIKE &nbsp;
						<span> {post.likeCount}</span>
					</Button>
					<Button variant="light" onMouseEnter={() => setDeleteSrc(trashColour)} onMouseLeave={() => setDeleteSrc(trashEmpty)} onClick={() => removePost(post._id)}>
						<img src={deleteSrc} width="20" alt="delete" />
						DELETE
					</Button>
				</Card.Footer>
			</Card.Body>
		</Card>
	);
};

export default Post;
