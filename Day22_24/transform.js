var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

function obj_Arr(obj) {
    var arr=[],item;
    for(key in scoreObject) {
        if (obj.hasOwnProperty(key)){
            item = [key];
            const element = obj[key];

            for(val in element) {
                if(element.hasOwnProperty(val)){
                    const value = element[val];
                    item.push(value);
                }
            }
            arr.push(item);
        }
    }

    return arr;
}

console.log(obj_Arr(scoreObject));

function objectConvertToArray(obj) {
    var arr = [];
    for(var prop in obj) {
        var subarr = []; 
        subarr.push(prop)
        for(var x in obj[prop]) {
            subarr.push(obj[prop][x]);
        }
        arr.push(subarr);
    }  
    return arr;        
}
console.log(objectConvertToArray(scoreObject));

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

function getMap(arr) {
    var mp = new Map();
    var len = arr.length,it;
    
    for(var i=0; i<len;i++) {
        it = arr[i];

        if(mp.has(it[2])) {
            mp.set(it[2],[...mp.get(it[2]),{id:it[0], name:it[1]}]);
        } else {
            mp.set(it[2],[{id:it[0], name:it[1]}]);
        }
    }
    return mp;
}
function arr_Obj(arr) {
    //console.log(arr);
  
    let obj = {},it;
    let len = arr.length;
    for(let i = 0; i < len;  i++) {
        it = arr[i];
        obj[it.id] = {
            name: it.name,
        }
        if(mp.has(it.id)) {
          obj[it.id].subMenu = arr_Obj(mp.get(it.id), mp);
        }
    }
    return obj;
}

let mp = getMap(menuArr);

console.log(arr_Obj(mp.get(-1), mp));

function arrayConvertToObject(arr) {
    var obj = {}; //顶一个空对象
    var arrlen = arr.length;
    //先把数数组的每一项转化为对象
    for(var i = 0; i < arrlen; i++) {
        var item = {
            'name': arr[i][1]
        }
        obj[arr[i][0]] = item;
    }
    //单独创建循环来创建自submenu子对象
    for(var i = arrlen -1 ; i >= 0; i--) {
        if(obj.hasOwnProperty(arr[i][2])) {
            obj[arr[i][2]]['subMenu'] = {};    
        }
    }
    //把对象属于子对象的添加到对应的submenu中去
    for(var i = arrlen -1 ; i >= 0; i--) {
        if(obj.hasOwnProperty(arr[i][2])) {
            obj[arr[i][2]]['subMenu'][arr[i][0]] =  obj[arr[i][0]]; 
            delete  obj[arr[i][0]];    
        }
    }
    return obj;        
}
console.log(arrayConvertToObject(menuArr));