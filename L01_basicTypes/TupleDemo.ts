/**
 * Created by wangxiufang on 2017/1/16.
 */
/**
 * 元组
 *
 * 允许你表达一个数组类型的固定数量的元素是已知的,但不一定是相同的。例如,您可能想要一个值表示为一个字符串和一个数字:
 */

// Declare a tuple type 声明一个元组类型
var x: [string, number];
x = ['zoe', 28];

//x = [28, 'zoe']; error

x[0].substr(1);

//x[1].substr(1); error 'number' does not have 'substr'

/**
 * 当访问一个元素之外的一组已知的指标,使用联合类型:
 * @type {string}
 */
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[1].toString()); // OK, 'string' and 'number' both have 'toString'

//x[6] = true; // Error, 'boolean' isn't 'string | number'

function tell() {
    console.log(x);
}
tell();