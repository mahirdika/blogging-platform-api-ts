import { Router } from 'express'

const postsRouter: Router = Router()

postsRouter.get('/', () => {
    console.log('anjay')
})

export default postsRouter
