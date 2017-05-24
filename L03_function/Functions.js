/**
 * Created by wangxiufang on 2017/1/17.
 */
//function add(){
//    return 1+2;
//}
//
//var myAdd = function(x,y){
//    return x+y;
//}
function add(x, y) {
    return "hello typescript";
}
var myAdd = function (x, y) {
    return "hello ts";
};
//明确指出参数意义
var myAddts = function (n, a) {
    return a;
};
//参数后面加? 表示可选
//function buildName(firstName?:string,lastName?:string){
//
//    if(lastName) {
//        return firstName+" "+lastName;
//    }else{
//        return firstName;
//    }
//
//}
//
//var res1 = buildName("zoe","wxf");
//var res2 = buildName("wx");
////var res3 = buildName("xdf","aa","bb") error
//var res4 = buildName();
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "zoe"; }
    return firstName + " and " + lastName;
}
var result1 = buildName1("zoe");
var result2 = buildName1("zoe", "me");
//document.getElementById("pid").innerHTML = result2;
//var resu3 = buildName1("zoe","me","aa"); error
/**
 * 可变参数,Rest Parameter
 */
function peopleName(firstName) {
    var restOfname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfname[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfname.join("-");
}
let pn = peopleName("zoe", "wxf", "cx", 'wx', '?');
document.getElementById("pid").innerHTML = pn;
/**
 * Lambads 和 this 关键字使用
 */
let people = {
    name: ['zoe', 'me', 'wxf', 'cx'],
    getName: function () {
        var _this = this;
        return function () {
            let i = Math.floor(Math.random() * 4);
            console.log(1, _this);
            return {
                n: _this.name[i]
            };
        };
    }
};
let Myname = people.getName();
function attr(nameorage) {
    if (nameorage && typeof nameorage === "string") {
        alert("姓名: " + nameorage);
    }
    else {
        alert("年龄: " + nameorage);
    }
}
attr("zoewxf");
attr(288);
//# sourceMappingURL=Functions.js.map