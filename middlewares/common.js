// 常用功能的中间件

import AjaxResult from '../java/model/ajaxResult.js'

export const checkIsLogin = async (ctx, next) => {
    if (ctx.query.id) {
        ctx.body = new AjaxResult().set401()
    } else {
        return next()
    }
}
