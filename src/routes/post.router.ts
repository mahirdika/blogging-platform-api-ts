import { Router } from 'express'
import { validateCreatePost, validateUpdatePost } from '../middleware/validate.js'
import PostService from '../services/post.service.js'
import PostController from '../controllers/post.controller.js'

const postRouter: Router = Router()
const postService = new PostService()
const postController = new PostController(postService)

postRouter.post('/', validateCreatePost, postController.addPost)
postRouter.get('/', postController.getListOfPost)
postRouter.get('/:id', postController.getAPost)
postRouter.put('/:id', validateUpdatePost, postController.updatePost)
postRouter.delete('/:id', postController.deletePost)

export default postRouter
