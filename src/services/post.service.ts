import type { QueryFilter } from 'mongoose'
import { postModel } from '../models/post.model.js'
import { type postType } from '../models/post.model.js'

class PostService {
    async addPostToDB(payload: postType) {
        const post = await postModel.create(payload)
        return post
    }
    async getListOfPostFromDB(filter: QueryFilter<postType>) {
        const listOfPost = await postModel.find(filter)
        return listOfPost
    }
    async getAPostFromDB(_id: string) {
        const post = await postModel.findById(_id)
        return post
    }

    async updatePostFromDB(_id:string, payload:postType) {
        const post = await postModel.findByIdAndUpdate(_id, payload)
        return post
    }

    async deletePostFromDB(_id: string) {
        const post = await postModel.findByIdAndDelete(_id)
        return post
    }
}

export default PostService
