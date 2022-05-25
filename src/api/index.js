import axios from "axios";

const url = "https://memories-mern-posts.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) =>
	axios({
		method: "post",
		url: url,
		data: newPost,
	});
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
