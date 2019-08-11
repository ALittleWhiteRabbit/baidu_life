/*parse用于从一个字符串中解析出json对象
var str = '{"name":"huangxiaojian","age":"23"}'
JSON.parse(str)

Object
age: "23"
name: "huangxiaojian"
__proto__: Object

stringify()用于从一个对象解析出字符串
var a = {a:1,b:2}
JSON.stringify(a)   //"{"a":1,"b":2}"
*/

//如果localStorage存在 则写入localStorage中去
function saveStorage(ele) {

    var data = getData(),
        temp = localStorage.getItem('newdata'), 
        len = 0, 
        o = {}, 
        str = {},
        td = ele,  
        tr = ele.parentNode,
        curRegion = tr.getAttribute('region'), 
        curProduct = tr.getAttribute('product'), 
        index = td.getAttribute('index'),  
        newdata = Number(ele.innerHTML);   

    temp = localStorage.getItem('newdata');
    o = JSON.parse(temp);
    len = o.length;
    
    //修改当前改变值
    for (var i = 0; i < len; i++) {
      if (o[i].region == curRegion && o[i].product == curProduct) {
        o[i].sale[index] = newdata;
      }
    }
    str = JSON.stringify(o);
    localStorage.setItem('newdata', str);
    return data;
  }

//需要先判断LocalStorage中是否有数据，有的话从LocalStorage中读取，没有的话再使用JS文件中的数据。
function loadStorage() {
    var data = [];
    var items = localStorage.getItem('newdata');
    if(null == items) {
        data = getAllData();
        str = JSON.stringify(data);
        localStorage.setItem('newdata', str);
    }else {
        data = JSON.parse(items);
    }
    return data;
}