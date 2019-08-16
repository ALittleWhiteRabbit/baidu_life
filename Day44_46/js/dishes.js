/*
菜品类
属性：名字、烹饪成本、价格
*/

function Dishes(name,cost,price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}


var menu = [new Dishes('酸辣土豆丝',5,15),
new Dishes('青椒肉丝',15,23),
new Dishes('肉沫茄子',12,22),
new Dishes('地三鲜',8,18),
new Dishes('番茄蛋汤',4,13),
new Dishes('红烧小黄鱼',18,30),
new Dishes('招牌麻辣烤鸭',20,35),
new Dishes('腐皮炒肉',8,17),
new Dishes('韭菜炒蛋',9,19),
new Dishes('鱼香肉丝',15,28)];