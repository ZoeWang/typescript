/**
 * Created by wangxiufang on 2017/1/17.
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        alert("姓名:" + Person.name);
    };
    return Person;
})();
let p = new Person();
Person.name = "zoe";
p.tell();
//# sourceMappingURL=Static.js.map