/**
 * Created by wangxiufang on 2017/1/17.
 */
//声明函数
function tell():string{

    return "hello";
}


function say():number{

    return 100;
}

function read():void{
//    void 不需要返回值,其他函数需要返回值
}

//声明变量类型为void 没有用,只能分配 undefined 或是 null 值
var unusable: void = undefined;