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
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: "Hello" };
function printUSB(pu) {
    console.log(pu.name);
    //console.log(pu.age);
}
var my = { name: "zoe" };
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result != -1) {
        return true;
    }
    else {
        return false;
    }
};
// 数组只能传递 string 类型的值
var myArray;
myArray = ['zoe', "me"];
// implements 实现了
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
//调用继承接口
var s = {};
s.color = "red";
s.penWidth = 10;
s.sideLength = 10;
function getCounter() {
    let counter = function (start) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//# sourceMappingURL=Interfaces.js.map