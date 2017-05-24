/**
 * Created by wangxiufang on 2017/1/17.
 */
var notSure:any = 10;
notSure = "Hello";
//notSure = false;

var list:any[] = [1, "Hi", false];
function tell() {
    //alert(notSure);
    alert(list[2]);
}
tell();

/**
 * any 和 object 区别
 */
var notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler (编译器) doesn't check)

var prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.