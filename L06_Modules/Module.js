/**
 * Created by wangxiufang on 2017/1/19.
 */

/**
 * Module 模式:
 * 1.模块化、可重用
 * 2.封装变量和函数
 */

// Javascript 中,function 是函数声明,加上() 被认为是函数表达式
(function(){
//    内部代码
}());

var a; //全局
function hello(){
    var b; //局部的
    c ; // 全局的
}

//全局变量通过匿名函数的参数导入到 函数中
(function($,w){

}(jQuery,window));

var jsModule = function(vip){
//    声明私有成员
    var Yvip = document.getElementById(vip)
    YQ = "123456";

    return{
        //    公开的成员
        add: function(t){
            if(t>=12){
                var Yv = t;
                Yvip.innerHTML = "年费:" + Yv+"--QQ 群" + YQ;
            }else{
                var Mv = t;
                Yvip.innerHTML = "月费:" + Mv;
            }
        }
    }
}

var jm = new jsModule("vip");
jm.add(12);