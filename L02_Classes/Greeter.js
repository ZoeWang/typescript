/**
 * Created by wangxiufang on 2017/1/17.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello: " + this.greeting;
    };
    return Greeter;
})();
//声明当前的数据类型是当前类的类型,叠用类型
var green;
green = new Greeter("zoe");
alert(green.greet());
//# sourceMappingURL=Greeter.js.map