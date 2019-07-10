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