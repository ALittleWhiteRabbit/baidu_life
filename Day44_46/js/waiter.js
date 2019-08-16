/*
服务员类，继承自职员
完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
*/

var SingletonWaiter = (function(){

    /**
    * 服务员
    * @param {Number} id 编号
    * @param {String} name 姓名
    * @param {Number} salary 工资
    */
   
    function Waiter(id,name,salary) {
        Staff.call(this, id, name, salary);

        this.work = function (arg) {
            if (arg instanceof Array) {
                var dish = arg[0].order(menu);
                console.log("顾客点了一份" + dish.name);
                return dish;
            } else {
                console.log("上了一份" + arg.name)
            }
        }
    }
    //原型继承
    Waiter.prototype = Object.create(Staff.prototype);
    //原型构造函数指向自己
    Waiter.prototype.constructor = Waiter;
    //缓存单例的变量
    var instance;
    //静态变量和方法
    var _static = {
        name: 'SingletonWaiter',
        getInstance: function (id,name, salary) {
            if (instance === undefined) {
                //如果没有声明，就声明新的实例
                instance = new Waiter(id,name,salary);
            }
            return instance;
        }
    };
    return _static;
})();



