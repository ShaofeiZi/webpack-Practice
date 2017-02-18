import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';
import './main.css'; //使用require导入css文件
render(<Greeter/>, document.getElementById('root'));
var isProduction = { 'value': process.env.environment };
console.log(isProduction);