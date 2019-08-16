/*
厨师类，继承自职员
完成一次工作：烹饪出菜品
*/

var SingletonCook = (function(){

	/**
     * 厨师
     * @param {Number} id 编号
     * @param {String} name 姓名
     * @param {Number} salary 工资
     */

    function Cook(id,name,salary) {
        Staff.call(this,id,name,salary);

        //重写方法
        this.work = function(arg) {
            console.log("厨师做了一份"+arg.name);
            return arg.name;
        }
    }

    Cook.prototype = Object.create(Staff.prototype);
    Cook.prototype.constructor = Cook;
    var instance;
    var _static = {
        name:'SingletonCook',
        getInstance: function(id,name,salary) {
            if(instance === undefined) {
                instance = new Cook(id,name,salary);
            }
            return instance;
        }
    };
    return _static;
})();

