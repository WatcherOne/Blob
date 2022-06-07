/**
 *   业务逻辑层
 *   是业务逻辑的具体实现：向上层controller提供接口, 使用dao层提供的接口
 *   主要负责业务逻辑应用设计 
 *   封装service层的业务逻辑有利于通用的业务逻辑的独立性和复用性
 */

import CommonDao from "../dao/commonDao.js"

class CommonService {
    async getTableList (ctx, tableName) {
        const { query } = ctx
        return CommonDao.getTableList(tableName, query)
    }
}

export default new CommonService()
