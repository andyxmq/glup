#webpack实践
git: https://github.com/webpack/webpack.git  

定义：模块打包器，任何静态资源都可以被视为一个模块；可以整合第三方类库，并把第三方的类库视作他模块引用
version: 3.8.1
不一样的地方： 
1.code splitting
2.loaders
3.plugin System
4.支持所有的主流打包标准(CommonJS、AMD、UMD、Globals)
5.可以通过不同的的webpack loader，支持打包css、scss、json、markdown等格式文件
6.有完善的缓存破坏/散列
7.内置热重载功能
8.有一系列的优化方案和插件机制来满足各种需求


#bundle.js 所有的打包目标文件

webpack show.js bundle.js

#打包多个文件
创建一个任意的项目文件夹，并增加相关的js和html,通过webpack工具将单个和多个js文件打包

1.定义js module文件，module.exports当初模块
2.样式的打包
通过安装loader加载器，可以将静态的样式一同打包到bundle.js文件中，npm install css-loader style-loader
css-loader: 遍历样式文件代码，解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们；
style-loader:将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。
require('!style-loader!css-loader!./style.css');

3.配置文件
 在手动编译时，可以将一些经常性的操作，添加到配置文件，减少编译过程中，手写代码的数量，构造自动工具 webpack.config.js

 __dirname: 当前路径

 4.安装第三方类库
 在项目中先安装jQuery第三方库，并在使用时，通过require函数引入安装的库文件，但可以使用
 npm install jquery --save-dev

 5.服务端环境安装
 通过安装webpack-dev-server模块，可以将项目打包到服务端，并可以指定端口，同时 还可以配置启动命令
 npm install webpack-dev-server
