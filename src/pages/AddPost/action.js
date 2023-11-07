import { CREATE_POST } from "./constants";

export const createPost = (post) => ({
    type: CREATE_POST,
    post
})