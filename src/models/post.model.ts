import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema(
    {
        id: {
            type: String,
            unique: true,
        },
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
            type: Array<string>,
        },
    },
    { timestamps: true },
)

const postModel = mongoose.model('post', postSchema)

export default postModel
