// todo message

class UserDao {
    async getUserInfo (ctx) {
        let _sql = "SELECT * from users where username=? and password=?";
        return query(_sql, value)
    }
}

export default UserDao()
