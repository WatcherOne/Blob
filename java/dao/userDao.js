// 用户数据层

import sql from '../../utils/mysql.js'
import AjaxResult from '../model/ajaxResult.js'

class UserDao {
    async getUserList (query) {
        const result = await sql.selectList('user', query)
        return new AjaxResult(result)
    }
}

export default new UserDao()
