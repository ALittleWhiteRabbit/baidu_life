**目的**

学习更多的JavaScript知识，比如如何在JavaScript使用面向对象编程，如何在设计中应用设计模式

**任务**

一、需求

我们现在要开一个餐厅啦，餐厅里面有服务员，有厨师，有顾客。学习面向对象，为餐厅和几个角色创建自己的类吧。

餐厅可以招聘或者解雇职员，职员越多，就越能够满足更多的顾客需求，从而赚取更多的钱

餐厅里的容量是有限的，当顾客坐满了，其他顾客需要排队

服务员的工作有两个职责，一个是负责点菜，另外一个是上菜

厨师的职责就一个，烹饪食物

顾客可以做两件事情，一个是点菜，一个是吃

系列任务的第一个部分，我们先只实现类的编写。并通过大量阅读掌握JavaScript的面向对象编程

二、设计

下面的设计只是草案，根据自己理解和需要自行设计

餐厅类

属性：金钱，座位数量、职员列表

方法：招聘职员，解雇职员

职员类

属性：ID，姓名，工资

方法：完成一次工作

服务员类，继承自职员

完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为

厨师类，继承自职员

完成一次工作：烹饪出菜品

顾客类

方法：点菜，吃

菜品类

属性：名字、烹饪成本、价格

三、编码

请分别使用 ES5 和 ES6 来实现以上类的定义