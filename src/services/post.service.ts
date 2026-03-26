import postModel from "../models/post.model.js";

class PostService {
    async getAPostFromDB(id: string) {
        const post = await postModel.findById(id)
        return post
    }
}

export default PostService