import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

import FileBase from "react-file-base64";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreatePost.css";

const CreatePost = ({ currentId, setCurrentId }) => {
	const emptyForm = {
		creator: "",
		title: "",
		message: "",
		tags: [],
		selectedFile: "",
		likeCount: 0,
		createdAt: new Date(),
	};
	const [postData, setPostData] = useState(emptyForm);
	const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null );

	const dispatch = useDispatch();

	// Form submit with checks on empty fields
	function handleSubmit(event) {
		event.preventDefault();
		
		//check all necessary fields filled
		if (
			!postData.creator ||
			!postData.title ||
			!postData.message ||
			!postData.tags ||
			!postData.selectedFile
		) {
			alert("You haven't filled all the fields");
			console.log(postData);
			return;
		} else if(currentId) {
			dispatch(updatePost(currentId, postData));
			setPostData(emptyForm);
			setCurrentId(null);
		} else {
			dispatch(createPost(postData));
			setPostData(emptyForm);
		}
	};

	// auto-insert data from post to update
	useEffect(() => {
		if(post) setPostData(post);
	}, [post])

	return (
		<section className="createPost">
			<Card className={currentId ? "editPost" : ""}>
				<h2>{currentId ? 'Edit' : 'Create'}  a memory</h2>
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
								setPostData({
									...postData,
									creator: e.target.value,
								})
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
								setPostData({
									...postData,
									title: e.target.value,
								})
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
								setPostData({
									...postData,
									message: e.target.value,
								})
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
								setPostData({
									...postData,
									tags: e.target.value.split(","),
								})
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
