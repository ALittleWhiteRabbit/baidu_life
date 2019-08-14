/*
菜品类
属性：名字、烹饪成本、价格
*/

/*es5
function Dishes(name,cost,price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}
*/

//es6
class Dishes{
    constructor(name,cost,price) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}