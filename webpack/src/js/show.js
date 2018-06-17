// var str = require('./str');
var fnstr = require('./str');
// require('!style-loader!css-loader!./style.css');
require('../css/style.css');
var $ = require("jquery");
document.write(fnstr('<div>天气非常好！</div>'));
$("div").html('这aaaa是一个Jquery语法改变内容').css({"background-color":'#444'});