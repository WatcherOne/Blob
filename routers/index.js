/******************************************************************************
 * author: zhubo
 * e-mail: 286154864@qq.com
 * github: https://github.com/WatcherOne
 * create: 2022-06-02
 * function: 整合所有子路由
 ******************************************************************************/

import Router from 'koa-router'
import Front from './front/index.js'
import Back from './back/index.js'

const router = Router()

router.use(Front.routes(), Front.allowedMethods())
router.use(Back.routes(), Back.allowedMethods())

export default router
