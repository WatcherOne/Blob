// 用户路由模块

import Router from 'koa-router'
import { checkIsLogin } from '../../middlewares/common.js'
import UserController from '../../java/controllers/userController.js'

const router = Router({
    prefix: '/user'
})

router.get('/getUserList', checkIsLogin, UserController.getUserList)

export default router
