/**
 * Created by wangxiufang on 2017/1/18.
 */

//    myFunc 是个函数,返回值类型是string类型
//var myFunc:(a:number)=> string = function(a:number):string{
//    return "Hello"+a;
//}

//    Lam 表达式自带类型检查,可理解为匿名函数
var myFunc = function(a:number):string{
    return "Hello"+a;
}
alert(myFunc(2));
