/*
厨师类，继承自职员
完成一次工作：烹饪出菜品
*/

/*es5
function Cook(id,name,salary) {
    Staff.call(this,id.name,salary);
}

Cook.prototype = new Staff();
Cook.prototype.work = new function() {
    console.log("烹饪出菜品");
}
*/

//es6
class Cook extends Staff{
    constructor(name,salary) {
        super(name,salary);
    }

    work(){
        console.log("烹饪出菜品");
    }
}