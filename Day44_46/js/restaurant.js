/*
餐厅类
属性：金钱，座位数量、职员列表
方法：招聘职员，解雇职员
*/

function Restaurant(object){
    this.cash = object.cash;
    this.seats = object.seats;
    this.staff = object.staff;

    //招聘职员
    this.hire = function(newStaff) {
        this.staff.push(newStaff);
    }

    //解雇职员
    this.fire = function(oldStaff) {
        var index = this.staff.indexOf(oldStaff);
        this.staff.splice(index,1);
    }
}
