/**
 * Created by wangxiufang on 2017/1/18.
 * 接口
 */
//
//function printeLabel(labelObj:{label:string}){
//    console.log(labelObj.label);
//}
//
//var myObj = {label:"Hi"};
//printeLabel(myObj);

//最简单的接口
interface LabelValue{
    label:string;
}

function printLabel(labelObj:LabelValue) {
    console.log(labelObj.label);
}

var myObj = {label:"Hello"};
//printLabel(myObj);

//接口属性
// 参数后代? 指可选参数

interface USB{
    name?:string;
    age?:number;
}

function printUSB(pu:USB){
    console.log(pu.name);
    //console.log(pu.age);
}

var my = {name:"zoe"};
//printUSB(my);


// 函数类型 针对于接口描述一个函数类型
interface SearchFunc{
    (source:string, subString:string):boolean;
}

var mySearch:SearchFunc;
mySearch = function(src:string,sub:string){
    var result = src.search(sub);
    if(result != -1) {
        return true;
    }else {
        return false;
    }
}

//数组类型
interface StringArray{
    [index:number]:string;
}
// 数组只能传递 string 类型的值
var myArray:StringArray;
myArray=['zoe',"me"];
//alert(myArray[1])


// Class 类型
interface ClockInterface{
    currentTime:Date;
    setTime(d:Date);
}
// implements 实现了
class Clock implements ClockInterface{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime = d;
    }
    constructor(h:number,m:number){

    }
}

// 接口继承
interface  Shape{
    color:string;
}

interface PenStroke{
    penWidth:number;
}

interface Square extends Shape,PenStroke{
    sideLength:number;
}
//调用继承接口
var s = <Square>{};
s.color = "red";
s.penWidth = 10;
s.sideLength = 10;

//混合类型
interface Counter{
    interval:number;
    reset():void;
    (start:number):string;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;



