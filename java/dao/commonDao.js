/**
 *    数据访问层
 *    比较底层, 比较基础的操作, 具体到对某个表的增删改查
 *    其中封装了增删改查基本操作, 建议Dao层只做原子操作, 不过在这肯定是sql语句
 */

import sql from '../../utils/mysql.js'
import AjaxResult from '../model/ajaxResult.js'

class CommonDao {
    async getTableList (tableName, query) {
        const result = await sql.selectList(tableName, query)
        return new AjaxResult(result)
    }
}

export default new CommonDao()
