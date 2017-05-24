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

module Validation{
    //创建接口要用关键字 export
    export interface StringValidator{
        isAcceptable(s:string):boolean;
    }

    var lettersRegexp = /^[A-Za-z]+$]/;
    var numberRegexp = /^[0-9]+$]/;

    //创建类需要关键字 export
    export class LettersOnlyValidator implements StringValidator{
        isAcceptable(s:string){
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator{
        isAcceptable(s:string):boolean{
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}