import axios from "axios";

const url = "https://localhost:3000/posts";

export const fetchPosts = () => axios.get(url);
