/**
 *   控制层
 *   负责具体业务模块流程的控制, 调用Service层的接口来控制业务逻辑
 *   负责请求转发, 接受页⾯过来的参数传给Service处理, 接到返回值, 再传给页⾯
 */
//   当前模板功能：返回所有可能的前端模板
//   Todo - 按模板来划分（若页面少也可以直接一个文件）

class IndexController {
    async getIndexPage (ctx, next) {
        // todo - 持久化数据的处理
        await ctx.render('index', {
            title: '测试页面'
        })
    }

    async getTravelPage (ctx) {
        await ctx.render('travel/index', {
            title: '旅行日记'
        })
    }

    async getNotPage (ctx) {
        await ctx.render('404', {
            title: '404'
        })
    }
}

export default new IndexController()
