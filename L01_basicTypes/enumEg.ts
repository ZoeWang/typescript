/**
 * Created by wangxiufang on 2017/1/16.
 */

/**
 * 枚举
 */
//获取下标
enum Color {Red, Green, Blue};
// 可以直接赋值索引
enum Color {Red = 1, Green, Blue};
// 可以直接设置索引
enum Color {Red = 1, Green = 2, Blue = 4};

var c: Color = Color.Green;

// 获取内容 可以直接设置索引
enum Color  {red = 1, green, blue};
var className:string = Color[1];

function tell() {
    alert(className);
}

tell()