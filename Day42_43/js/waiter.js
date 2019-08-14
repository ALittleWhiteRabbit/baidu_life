/*
服务员类，继承自职员
完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
*/

/**
 * 服务员
 * @param {Number} id 编号
 * @param {String} name 姓名
 * @param {Number} salary 工资
 */
/*es5
function Waiter(id,name,salary) {
    Staff.call(this,id,name,salary);
}

//组合式继承
Waiter.prototype = new Staff ();
Waiter.prototype.work = function (args) {
    if(typeof(args) == Array) {
        var customer = new Customer();
        customer.order(arg);
    }else {
        console.log("上了一份"+args);
    }
}
*/

//es6
class waiter extends Staff{
    constructor(name,salary){
        super(name,salary);
    }

    work(args){
        if(typeof(args) == Array) {
            var customer = new Customer();
            customer.order(arg);
        }else {
            console.log("上了一份"+args);
        }
    }
}

