/**
 *  返回所有可能的前端模板
 */

export default {
    getIndexPage: async (ctx) => {
        // todo - 持久化数据的处理
        await ctx.render('index', {
            title: '测试页面'
        })
    },
    getNotPage: async (ctx) => {
        await ctx.render('404')
    }
}
