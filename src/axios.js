import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
console.log("instance ", instance);
export default instance;