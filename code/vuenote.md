## css作用域
    1.scoped 只在当前的组件有用
## eslint
    规范化代码风格命令：npm run lint
## vue.config.js配置
    1.反向代理
    ```
    module.exports = {
        devServer: {
            proxy: {
                '/ajax': {
                    target: 'http://m.maoyan.com',
                    changeOrigin: true
                }
            }
        }
    }
    ```
    2.alias别名配置
        @ is an alias to /src
        import child from '@/components/Child' （此处的@符号指向src）
    3.vue.config.js 中配置 publicPath './'
        在类似Cordova hybrid应用的文件系统中（配合hash模式） 混合开发
    4.关闭eslint
        vue.config.js lintOnSave:false
        .eslintrc 删除 '@vue/standard'
    5.Json-server实现mock数据
    6.MPA（多页面）应用的配置（看脚手架文档）

## json-server
    1.public 下创建json文件夹里边放json假数据
    2.用axiosget
        `
         axios.get('/json/test.json') 
         axios.get('/json/test2.json')
        `
    3.mock.js模拟接口

## eslint报错Do not use 'new' for side effects (no-new) at
    解决办法
    1.在new Vue的上方添加一行注视，让eslint不检查"no-new"
        ```
         /* eslint-disable no-new */
            new Swiper('.a', {
                loop: true,
                pagination: '.swiper-pagination'
            })
        ```
    2.定义一个变量xxx(可为任意值)接收新创建的Vue
        ```
        let sw = new Swiper
        ```
### vue-router
  * 开始
  * 动态路由匹配
  * 嵌套路由
  * 编程式导航（js跳转）vs 声明式导航<router-link>
  * 命名路由
  * 命名视图
  * 重定向和别名
    ```
    {
        path:'*'
        redirect:'/home/
    }
    ```
  * html5 History模式
    + Vue支持两种模式
        + a. hash #/home
        + b. history /home
## 路由原理
    (1) hash路由 ==> location.hash切换
                       window.onhashchange 监听路径的切换
    (2) history路由 ==> history.pushState 切换
                        window.onpopstate 监听路径切换