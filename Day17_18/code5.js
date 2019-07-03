var d = new Date();
var h = d.getHours();
console.log(h);
var demo =document.getElementById("demo");
if(h>=8 && h<=12) {
    demo.innerHTML="早上好呀！！！";
} else if (h>12 && h<=20 ) {
    demo.innerHTML="下午好呀！！！";
} else if (h>=20 && h<=24 ){
    demo.innerHTML="晚上好呀！！！";
} else {
    demo.innerHTML = "不要熬夜哟！！！";
}