/**
 * Created by wangxiufang on 2017/1/19.
 */
//interface StringValidator{
//    isAcceptable(s:string):boolean;
//}
//
//var lettersRegexp = /^[A-Za-z]+$]/;
//var numberRegexp = /^[0-9]+$]/;
//
//class LettersOnluValidator implements StringValidator{
//
//    isAcceptable(s:string):boolean {
//        return lettersRegexp.test(s);
//    }
//
//}
//
//class ZipCodeValidator implements StringValidator{
//    isAcceptable(s:string):boolean{
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$]/;
    var numberRegexp = /^[0-9]+$]/;
    //创建类需要关键字 export
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=TSModules.js.map