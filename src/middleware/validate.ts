import type { Request, Response, NextFunction } from 'express'
import {
    createPostValidation,
    updatePostValidation,
} from '../validations/post.validation.js'

export const validateCreatePost = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const { error } = createPostValidation.validate(req.body)

    if (error) {
        res.status(400).json({ message: error?.details[0]?.message })
        return
    }

    next()
}

export const validateUpdatePost = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const { error } = updatePostValidation.validate(req.body)

    if (error) {
        res.status(400).json({ message: error?.details[0]?.message })
        return
    }

    next()
}
