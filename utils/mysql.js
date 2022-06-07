import mysql from 'mysql' // 由第三方提供, 需要单独下载
import { DATABASE } from '../config.js'
import SQL from './mysql.op.js'

const mysqlConfig = {
    host: DATABASE.host,
    user: DATABASE.user,
    password: DATABASE.password,
    database: DATABASE.database
}

let CONN = null

function connection () {
    if (CONN) return CONN
    // todo: createPool() 创建连接池
    CONN = mysql.createConnection(mysqlConfig)
    CONN.connect()
    return CONN
}

const query = function () {
    const conn = connection()
    return SQL.query(conn, ...arguments)
}

const selectList = function () {
    const conn = connection()
    return SQL.selectList(conn, ...arguments)
}

export default {
    query,
    selectList
}
