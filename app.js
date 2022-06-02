/******************************************************************************
 * author: zhubo
 * e-mail: 286154864@qq.com
 * github: https://github.com/WatcherOne
 * create: 2022-06-02
 ******************************************************************************/

// 默认不能使用 ES6 Module 写法的！
// 在package.json中配置 "type": "module", type默认为 "commonjs"
// 但用了 ES Module 文件必须写全
import Koa from 'koa'
import path from 'path'
import router from './routers/index.js'
// todo koaLogger 日志中间件
import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
// 直接用这个 父级视图引用不启作用, 换成 'koa-ejs'
// import koaViews from 'koa-views'
import koaRender from 'koa-ejs'
import ErrorMiddleWare from './middlewares/errorPage.js'
import { SYSTEM } from './config.js'
// ES Module 不能直接使用 __dirname
const __dirname = path.resolve()

const app = new Koa()

app.use(bodyParser())
app.use(koaStatic(path.join(__dirname, './public')))
// app.use(koaViews(path.join(__dirname, './views'), { extension: 'ejs' }))
koaRender(app, {
    root: path.join(__dirname, './views'),
    layout: 'layout/index',
    viewExt: 'ejs'
})

app.use(router.routes(), router.allowedMethods())

// 中间件的使用
app.use(ErrorMiddleWare)

app.on('error', (err, ctx) => {
    console.log(`服务错误信息：${err}-${ctx}`)
})

const { hostname, port } = SYSTEM

app.listen(port, hostname, () => {
    console.log(`当前博客运行在：http://${hostname}:${port}`)
})
