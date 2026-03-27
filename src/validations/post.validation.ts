import Joi from 'joi'

export const createPostValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
})

export const updatePostValidation = Joi.object({
    title: Joi.string().allow('', null),
    content: Joi.string().allow('', null),
    category: Joi.string().allow('', null),
    tags: Joi.array().items(Joi.string()).allow('', null),
})
