import mongoose from 'mongoose'
import { type InferSchemaType } from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        category: {
            type: String,
        },
        tags: {
            type: [String],
        },
    },
    { timestamps: true },
)

export type postType = InferSchemaType<typeof postSchema>

export const postModel = mongoose.model('post', postSchema)