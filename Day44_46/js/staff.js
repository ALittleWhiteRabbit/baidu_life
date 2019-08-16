/*职员类
属性：ID，姓名，工资
方法：完成一次工作
*/
    
/**
 * 职员
 * @param {String} name 姓名
 * @param {Number} salary 工资
 */
function Staff(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    //完成一次工作
    this.work = function() {
        console.log("I have done a work");
    }
}


