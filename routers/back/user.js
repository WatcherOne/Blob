/**
 *  用户模块
 */

import Router from 'koa-router'
import userController from '../../controllers/userController.js'

const router = Router({
    prefix: '/user'
})

router.get('/getUserInfo', userController.getUserInfo)

export default router
