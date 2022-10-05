import axios from "axios";

//? endpoints:
//* "/posts"
//* "/users"

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
