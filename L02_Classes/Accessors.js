/**
 * Created by wangxiufang on 2017/1/17.
 */
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this._age;
    };
    Object.defineProperty(Hello.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newage) {
            //this._age = newage;
            if (newage > 200 || newage < 0) {
                alert("请正确填写年龄");
            }
            else {
                this._age = newage;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
})();
let h = new Hello();
h.age = 1000;
alert(h.tell());
let passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
})();
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
//# sourceMappingURL=Accessors.js.map