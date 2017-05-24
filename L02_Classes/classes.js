/**
 * Created by wangxiufang on 2017/1/17.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 基本类
 */
//class Person{
//    name:string;
//    age:number;
//    constructor(name:string, age:number){
//        this.name = name;
//        this.age  = age;
//    }
//
//    print() {
//        return this.name + ":"+this.age;
//    }
//}
//var p = new Person('zoe',28);
//alert(p.print());
/**
 * 类的继承 Inheritance
 */
var Person1 = (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.tell = function () {
        return this.name + ":" + this.age;
    };
    return Person1;
})();
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(school) {
        this.school = school;
        _super.call(this, "zoe", 28);
    }
    Student.prototype.tell = function () {
        return this.name + ":" + this.age + ":" + this.school;
    };
    return Student;
})(Person1);
var s = new Student("极客学院");
//s.name = "zoe";
//s.age = "40";
//s.school = "极客学院";
alert(s.tell());
var p = new Person1("wxf", 27);
alert(p.tell());
//# sourceMappingURL=classes.js.map