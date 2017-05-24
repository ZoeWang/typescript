/**
 * Created by wangxiufang on 2017/1/19.
 */

var div = document.createElement("div");
document.body.appendChild(div);
var obj = new Time.Test(div);
var bstart = document.createElement("button");
bstart.innerHTML = "start";

bstart.onclick = function(){
    obj.start();
}

document.body.appendChild(bstart);

var bstop = document.createElement("button");
bstop.innerHTML = "stop";
bstop.onclick = function(){
    obj.stop();
}

document.body.appendChild(bstop);
