/*
顾客类
方法：点菜，吃
*/

function Customer() {

    //点菜
    this.order = function (menu) {
        var order = Math.round(Math.random()*menu.length);
        return menu[order];
    }
    
    //吃
    this.eat = function() {
        console.log("顾客已经吃完了");
    }
}
