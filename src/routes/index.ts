import type { Application, Router } from 'express'
import postRouter from './post.router.js'

const _routes: Array<[string, Router]> = [['/posts', postRouter]]

const routes = (app: Application) => {
    _routes.forEach(([path, router]) => {
        app.use(path, router)
    })
}

export default routes
