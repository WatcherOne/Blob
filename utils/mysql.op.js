// Todo - 参数的模拟 与 准确搜索 与 排序

const search = (conn, sql, values) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, values, (error, results) => {
            error ? reject(error) : resolve(results)
        })
    })
}

const selectList = (conn, tableName, query = {}) => {
    const values = Object.values(query)
    const sqlStart = `select * from ${tableName}${values.length ? ' where ' : ''}`
    const sqlEnd = Object.keys(query).map(key => `${key}=?`).join(' and ')
    return search(conn, `${sqlStart}${sqlEnd}`, values)
}

export default {
    search,
    selectList
}
