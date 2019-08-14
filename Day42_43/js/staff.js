/*职员类
属性：ID，姓名，工资
方法：完成一次工作
*/
    
/**
 * 职员
 * @param {Number} id 编号
 * @param {String} name 姓名
 * @param {Number} salary 工资
 */
/*es5
var id=0;
function Staff(name,salary) {
    this.id = ++id;
    this.name =name;
    this.salary = salary;

    //完成一次工作
    this.work = function() {
        console.log("I have done a work");
    }
}
*/

var id=0;
class Staff {
    constructor(name,salary) {
        this.id = ++id;
        this.name =name;
        this.salary = salary;
    }

    //完成一次工作
    work(){
        console.log("I have done a work");
    }
}