/**
 * Created by wangxiufang on 2017/1/17.
 */
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }

    greet(){
        return "Hello: "+this.greeting;
    }
}

//声明当前的数据类型是当前类的类型,叠用类型
var green:Greeter;
green = new Greeter("zoe");
alert(green.greet());