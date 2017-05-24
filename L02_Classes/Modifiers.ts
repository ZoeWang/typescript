/**
 * Created by wangxiufang on 2017/1/17.
 *
 * 访问修饰符
 * Public,
 * private,
 * protected
 *
 * 默认是public
 */

//class People {
//    public name:string;
//    age:number;
//    // name 是 私有的,继承的类不能调用
//    constructor(private name:string,age:number){
//        this.name = name;
//        this.age = age;
//    }
//
//
//    print(){
//        return this.name + ":" + this.age;
//    }
//}

//class Teacher extends People{
//    school:string;
//    constructor(school:string){
//        this.school = school;
//        super("zoe",18);
//
//    }
//    print(){
//        return this.name+":"+this.age+":"+this.school;
//    }
//}
//
//var t = new Teacher("科技大");
////t.name = "wxf";
////t.age = 28;
////t.school = "科技大";
//alert(t.print());


//class Animal {
//    private name: string;
//    constructor(theName: string) { this.name = theName; }
//}
//
//new Animal("Cat").name; // Error: 'name' is private;

//protected

//class Person {
//    protected name: string;
//    constructor(name: string) { this.name = name; }
//}
//
//class Employee extends Person {
//    private department: string;
//
//    constructor(name: string, department: string) {
//        super(name);
//        this.department = department;
//    }
//
//    public getElevatorPitch() {
//        return `Hello, my name is `+this.name+`and I work in` +this.department+`.;`
//    }
//}
//
//var howard = new Employee("Howard", "Sales");
//console.log(howard.getElevatorPitch());
//console.log(howard.name); // error name 是受保护的,不能外调


//class Person {
//    protected name: string;
//    protected constructor(theName: string) { this.name = theName; }
//}
//
//// Employee can extend Person
//class Employee extends Person {
//    private department: string;
//
//    constructor(name: string, department: string) {
//        super(name);
//        this.department = department;
//    }
//
//    public getElevatorPitch() {
//        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//    }
//}
//
//var howard = new Employee("Howard", "Sales");
//var john = new Person("John"); // Error: The 'Person' constructor is protected

/**
 * Readonly modifier
 * 你可以通过使用只读的关键字属性只读的。只读的属性必须在他们的声明或在构造函数中初始化。
 * 低版本不支持
 */
//
//class Octopus {
//    readonly name: string;
//    readonly numberOfLegs: number = 8;
//    constructor (theName: string) {
//        this.name = theName;
//    }
//}
//let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // error! name is readonly.
//
//class Octopus {
//    readonly numberOfLegs: number = 8;
//    constructor(readonly name: string) {
//    }
//}