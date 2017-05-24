/**
 * Created by wangxiufang on 2017/1/17.
 */

class Hello{
    private _age:number;
    tell(){
        return this._age;
    }

    get age():number{
        return this._age;
    }

    set age(newage:number){
        //this._age = newage;
        if(newage>200 || newage<0){
            alert("请正确填写年龄");
        }else{
            this._age = newage;
        }
    }
}

let h = new Hello();
h.age = 1000;
alert(h.tell());


let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}