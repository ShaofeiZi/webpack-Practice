# Step1
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
# Step2
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
# Step3
## 生成Source Maps

devtool选项  |	配置结果
---------------------------------|-----
source-map |	在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；
cheap-module-source-map	|在一个单独的文件中生成一个不带列映射的map，不带列映射提高项目构建速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
eval-source-map	|使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项；
cheap-module-eval-source-map|	这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；

*在学习阶段以及在小到中性的项目上，eval-source-map是一个很好的选项，不过记得只在开发阶段使用它，继续上面的例子，进行如下配置*
```
devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
```
## 使用webpack构建本地服务器
### 先安装
```
npm install --save-dev webpack-dev-server
```
devserver配置选项 |	功能描述
----------|---
contentBase	|默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
port	|设置默认监听端口，如果省略，默认为”8080“
inline	|设置为true，当源文件改变时会自动刷新页面
colors|	设置为true，使终端输出的文件为彩色的
historyApiFallback	|在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html

### 在配置文件中加入配置
```
	
	devServer: {
		contentBase: "./public", //本地服务器所加载的页面所在的目录
		colors: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	}
```