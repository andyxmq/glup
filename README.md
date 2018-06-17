# glup
前端自动化构建工具实践（glup、browserify）
#前端内容的自动化构建

##理论与背景
    构建：Build 组合来制造某物

    java: ant->maven(加入依赖管理工具)->gradle(groovy来构建)

    js: glup(基于流的构建)

    glup: 基于流的自动化构建工具

##js的构建
    作用：写一个js文件，动态扩展js的应用；
1.browserify: 一个管理前端依赖的工具，可以实现js的模板化加载； node 运行js的环境
  browserify: npm install -g browserify
  例子： browserify .\js\todos-controller.js .\js\add-todo-controller.js .\js\todo-controller.js.\js\index.js -o js/main.js

  shell脚本：build.sh browserify js/index.js -o js/main.js

2.使用的是node.js的CommonJs模块规范：使用module.exports来定义JS模块，使用require语句来加载JS模块

3.glup的基本用法，本质上说 glup是一个任务管理器

    安装：npm install glup
    配置文件： glupfile.js 文件
4.使用Browserify 实现JS的模块化加载
    使用shelljs 执行 shell脚本
    browerify browserify().add('js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));

    mkdir assets 源文件
    mv ..\js\todo-controller.js 移动到assets

5.Browserify构建第三方类库
  为什么要使用Browserify构建第三方类库？
  1).建设网络请求
  2).增加一些操作（uglify）
  3).
  
  利用browserify-shim来加载第三方类库
  a.npm i -g bower //管理第三方类库 优势是随时升级第三方类库（bower update）
  b.bower install angular
  c.browserify-shim 解决没有module.export 定义的模块 angular.module is not a function
        安装：npm install -D browserify-shim

  d.uglify npm install gulp-uglify
    安装适配器: vinyl-source-stream
    vinyl-buffer: 将字符串转化为buffer
   
   f: gulp-if
   g:使用ES6 优化
##CSS的构建
#https://cssminifier.com/
1.gulp-clean-css的介绍和使用  
a. 用来minify css的工具
b. gulp-concat 合并文件
c. sass 来嵌套自动编写css
d. gulp-sass 来自动编译sass 
f. 安装 bootstrap-sass
2.SASS帮忙
