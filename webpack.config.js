module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry: __dirname + "/app/main.js", // 唯一入口文件
	output: {
		path: __dirname + "/public",// 打包后的文件存放的地方
		filename: "bundle.js"// 打包后输出文件的文件名
	}
}