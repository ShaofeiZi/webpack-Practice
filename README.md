## 初始化项目
```
npm init
```
## 安装webpack
 ### 全局安装
```
npm install -g webpack
```
### 安装到你的项目目录
```
npm install --save-dev webpack
```
## 建立app文件夹和public文件夹创建三个文件，index.html 文件放在public文件夹中，两个js文件（Greeter.js和main.js）放在app文件夹中
### index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```
### main.js 
```
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
```
### Greeter.js
```
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};
```
## 使用webpack
```
webpack {entry file/入口文件} {destination for bundled file/存放bundle.js的地方}
```
### 非全局安装
```
node_modules/.bin/webpack app/main.js public/bundle.js
```
### 全局安装
 **进入项目目录**
```
webpack app/main.js  public/bundle.js
```
## 使用配置文件
 ### 在当前练习文件夹的根目录下新建一个名为webpack.config.js的文件
 ```
 module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
```
**注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。**
### 在根目录（有webpack.config.js的）下运行
```
webpack
```
## 修改package.json对npm进行设置引导webpack
```
"scripts": {
    "start":"webpack" 
  }
```
**注：package.json中的脚本部分已经默认在命令前添加了node_modules/.bin路径，所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。**
### npm的start是一个特殊的脚本名称，它的特殊性表现在，在命令行中使用npm start就可以执行相关命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build

```
  "scripts": {
    "webpack":"webpack" 
  },
```
### 这样就需要在终端运行 
```
npm run webpack
```