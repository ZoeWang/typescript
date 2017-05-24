/**
 * Created by wangxiufang on 2017/1/18.
 * <T> 泛型是尖括号 中间一个大写字母
 * 定义为泛型,使用时 传入确定的类型
 */
//function Hello<T>(arg:T):T{
//    return arg;
//}
//
//var output = Hello<string>("Hello me");
//alert(output);

//function Hello<K>(num:K):K{
//    alert(num.length);
//    return num;
//}

// 泛型根据传入的类型的决定的属性
//function Hello<T>(str:T[]):T[]{
//    //alert(str.length);
//    return str;
//}
//
//var list:Array<string> = Hello<string>(["1","2","3"]);
//for(var i=0; i<list.length;i++){
//    alert(list[i]);
//}

//泛型类型

//function Hello<T>(arg:T):T{
//    return arg;
//}
//// 定义myHello对象  【<K>(arg:K)】 将它指定为方法 K 返回值,把 Hello这个函数赋值给它
//var myHello:<K>(arg:K)=>K = Hello;
//alert(myHello("Hello"));
//
//var myHello:{<T>(arg:T):T} = Hello;
//alert(myHello("HI"));



//interface Hello{
//    <T>(arg:T):T;
//}
//
//function myHello<T>(arg:T):T{
//    return arg;
//}
////创建对象MH 调用接口Hello ,把 myHello赋值给它
//var MH:Hello = myHello;
//alert(MH<string>("hi"));



//interface Hello<T>{
//    (arg:T):T;
//}
//
//function myHello<T>(arg:T):T{
//    return arg;
//}
//
//var mh:Hello<number> = myHello;
//// 泛型指定 number 类型只能传入 number类型
//alert(mh(100));


// 泛型类
class HelloNumber<T>{
    Ten:T;
    add:(x:T,y:T) => T;
}

var myHelloNumber = new HelloNumber<string>();
myHelloNumber.Ten = "Hello";
myHelloNumber.add = function (x,y) {
    return x+y;
}
alert(myHelloNumber.Ten);
alert(myHelloNumber.add("Hi",myHelloNumber.Ten))
