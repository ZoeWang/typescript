/**
 * Created by wangxiufang on 2017/1/16.
 */
var fullName: string = `Bob Bobbington`;
var age: number = 37;
var sentence: string = `Hello, my name is `+  fullName + ` .I'll be `+ (age + 1) + ` years old next month.`;

function tell() {
    alert(sentence);
}

tell();