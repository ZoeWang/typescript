/**
 * Created by wangxiufang on 2017/1/17.
 */
class Person{
    static name:string; // static 类型要通过类名调用
    tell(){
        alert("姓名:"+Person.name)
    }
}

let p = new Person();
Person.name = "zoe";
p.tell();