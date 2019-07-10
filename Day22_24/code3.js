var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    
    function findId(tree,name) {
        if(typeof tree =='undefined') {
            return null;
        }
        if(tree.name == name) {
            return tree.id;
        }
        return findId(tree.left,name)||findId(tree.right,name);
    }

    return findId(tree,name);
    
}
console.log(findIdByName('Kai'));

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    function findName(tree,id) {
        if(typeof tree == 'undefined') {
            return null;
        }
        if(tree.id == id) {
            return tree.name;
        }
        return findName(tree.left,id)||findName(tree.right,id);
    }

    return findName(tree,id);
}
console.log(findNameById(7));

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(tree) {
    if(typeof tree === 'undefined') {
      return null;
    }
    console.log(tree.name);
    getListWithDLR(tree.left)
    getListWithDLR(tree.right)
  }
console.log('先序遍历');
getListWithDLR(tree);

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(tree) {
    if(typeof tree === 'undefined') {
        return null;
      }
    getListWithLDR(tree.left);
    console.log(tree.name);
    getListWithLDR(tree.right);
}
console.log("中序遍历");
getListWithLDR(tree);

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(tree) {
    if(typeof tree === 'undefined') {
        return null;
      }
    getListWithLRD(tree.left);
    getListWithLRD(tree.right);
    console.log(tree.name);
}
console.log("后序遍历");
getListWithLRD(tree);