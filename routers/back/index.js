/******************************************************************************
 * author: zhubo
 * e-mail: 286154864@qq.com
 * github: https://github.com/WatcherOne
 * create: 2022-06-02
 * function: 所有接口类API
 ******************************************************************************/

import Router from 'koa-router'
import user from './user.js'

const router = Router({
    prefix: '/api'
})

router.use(user.routes(), user.allowedMethods())

export default router
