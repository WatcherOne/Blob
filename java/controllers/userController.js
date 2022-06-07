// 用户控制层

import CommonService from "../service/commonService.js"

class UserController {
    async getUserList (ctx) {
        ctx.body = await CommonService.getTableList(ctx, 'user')
    }
}

export default new UserController()
