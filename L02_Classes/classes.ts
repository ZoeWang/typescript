/**
 * Created by wangxiufang on 2017/1/17.
 */

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

class Person1{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    tell() {
        return this.name+":"+this.age;
    }
}

class Student extends Person1{
    school:string;
    constructor(school:string){
        this.school = school;
        super("zoe",28);
    }

    tell(){
        return this.name +":"+this.age+":"+this.school;
    }
}

var s = new Student("极客学院");
//s.name = "zoe";
//s.age = "40";
//s.school = "极客学院";
alert(s.tell());

var p = new Person1("wxf",27);
alert(p.tell());

