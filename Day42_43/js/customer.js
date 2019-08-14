/*
顾客类
方法：点菜，吃
*/

/*es5
function Customer() {

    //点菜
    this.order = function (dishes) {
        for(var i=0;i<dishes.length;i++){
            console.log("点了一份"+dishes[i]);
        }
    }
    
    //吃
    this.eat = function(dishes) {
        for(var i=0;i<dishes.length;i++){
            console.log("吃了一份"+dishes[i]);
        }
    }
}
*/

//es6
class Customer {
    constructor(){

    }

    order(dishes) {
        for(let i=0;i<dishes.length;i++){
            console.log("点了一份"+dishes[i]);
        }
    }

    eat(dishes) {
        for(let i=0;i<dishes.length;i++){
            console.log("吃了一份"+dishes[i]);
        }
    }
}