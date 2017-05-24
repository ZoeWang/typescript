/**
 * Created by wangxiufang on 2017/1/19.
 */
var Time;
(function (Time) {
    var Test = (function () {
        function Test(e) {
            this.element = e;
            this.element.innerHTML = "现在的时间是:";
            this.span = document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toTimeString();
        }
        Test.prototype.start = function () {
            var _this = this;
            this.timer = setInterval(function () { return _this.span.innerHTML = new Date().toTimeString(); }, 500);
        };
        Test.prototype.stop = function () {
            clearInterval(this.timer);
        };
        return Test;
    })();
    Time.Test = Test;
})(Time || (Time = {}));
//# sourceMappingURL=Timer.js.map