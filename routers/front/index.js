/******************************************************************************
 * author: zhubo
 * e-mail: 286154864@qq.com
 * github: https://github.com/WatcherOne
 * create: 2022-06-02
 * function: 所有页面渲染配置
 ******************************************************************************/

import Router from 'koa-router'
import IndexController from '../../controllers/indexController.js'

const router = Router()

router.get('/', IndexController.getIndexPage)
router.get('/index', IndexController.getIndexPage)
router.get('/404', IndexController.getNotPage)

export default router