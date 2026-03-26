import type { Application, Router } from 'express'
import postsRouter from './post.router.js'

const _routes: Array<[string, Router]> = [['/posts', postsRouter]]

const routes = (app: Application) => {
    _routes.forEach(([path, router]) => {
        app.use(path, router)
    })
}

export default routes
