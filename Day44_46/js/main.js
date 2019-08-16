var startbtn = document.getElementById("start");
startbtn.onclick = function() {
    start();
}

function start() {
    // 实例化各个类
    var cook1 = SingletonCook.getInstance(1, "Frank", 5000);
    var waiter1 = SingletonWaiter.getInstance(1, "Jon", 3000);
    var rest1 = new Restaurant(1000, 1, [cook1, waiter1]);
    // 顾客队列
    var cquene = [];
    // 队列添加新的顾客
    var customer1 = new Customer();
    cquene.push(customer1);
    console.log("顾客已经坐下");
    // 服务员点菜
    var dishes = waiter1.work(cquene);
    // 厨师做菜
    cook1.work(dishes);
    // 服务员上菜
    waiter1.work(dishes);
    // 顾客用餐
    cquene[0].eat();
    // 顾客离开
    cquene.unshift();
    console.log("顾客已经离开");
}