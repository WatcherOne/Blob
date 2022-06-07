// 用户业务模块

import UserDao from "../dao/userDao.js"

class UserService {
    async getUserList (ctx) {
        const { query } = ctx
        return UserDao.getUserList(query)
    }
}

export default new UserService()
