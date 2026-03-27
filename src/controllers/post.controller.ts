import type { Request, Response } from 'express'
import PostService from '../services/post.service.js'
import type { postType } from '../models/post.model.js'
import type { QueryFilter } from 'mongoose'

class PostController {
    constructor(private postService: PostService) {}

    addPost = async (req: Request, res: Response): Promise<Response> => {
        try {
            const payload = req.body
            await this.postService.addPostToDB(payload)
            return res
                .status(201)
                .json({ message: 'Berhasil menambahkan post' })
        } catch (error) {
            console.log(error)
            return res
                .status(422)
                .send({ status: false, statuscode: 422, message: error })
        }
    }
    getListOfPost = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { term } = req.query
            const termStr = term as string

            const filter: QueryFilter<postType> = termStr
                ? {
                      $or: [
                          { title: { $regex: termStr, $options: 'i' } },
                          { content: { $regex: termStr, $options: 'i' } },
                          { category: { $regex: termStr, $options: 'i' } },
                      ],
                  }
                : {}

            const listOfPost =
                await this.postService.getListOfPostFromDB(filter)
            return res.status(200).json({ data: listOfPost })
        } catch (error) {
            return res
                .status(422)
                .send({ status: false, statuscode: 422, message: error })
        }
    }

    getAPost = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params
            const _id = id as string
            const post = await this.postService.getAPostFromDB(_id)
            return res.status(200).json({ data: post })
        } catch (error) {
            return res
                .status(422)
                .send({ status: false, statuscode: 422, message: error })
        }
    }

    updatePost = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params
            const _id = id as string
            const payload = req.body
            await this.postService.updatePostFromDB(_id, payload)
            return res.status(201).json({ message: 'Berhasil update post' })
        } catch (error) {
            return res
                .status(422)
                .send({ status: false, statuscode: 422, message: error })
        }
    }

    deletePost = async (req: Request, res: Response): Promise<Response> =>{
        try {
            const { id } = req.params
            const _id = id as string
            await this.postService.deletePostFromDB(_id)
            return res.status(201).json({ message: 'Berhasil hapus post' })
        } catch (error) {
            return res
                .status(422)
                .send({ status: false, statuscode: 422, message: error })
        }
    }
}

export default PostController
