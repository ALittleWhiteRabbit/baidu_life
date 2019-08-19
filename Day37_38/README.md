**目标**

学习LocalStorage，基于它来实现对于数据的写操作

**任务**

工作:一个是实现在数据编辑的交互问题，另一个是解决数据编辑完成后的传输问题。

1、首先是数据读取，原来是直接使用提供的JS文件，现在我们需要先判断LocalStorage中是否有数据，有的话从LocalStorage中读取，没有的话再使用JS文件中的数据。

a.给所有input输入框增加一个onblur事件，在事件中增加对于输入内容的判断，是否为正确的数字，是的话什么都不做，不是的话弹出提示框（alert）

b.点击保存的时候，遍历所有input，按照一定顺序，把数据写入LocalStorage中。

2、看上去不是输入框，但鼠标移动上去或者点击就变成一个可编辑的状态。需求如下：

a.把表格恢复成没有input的状态

b.当鼠标滑动过某一个数字的单元格时，数字旁边显示一个铅笔的icon，或者显示灰色的小小的编辑两个字

c.当鼠标点击某个数字的单元格时，这个数字进入编辑状态，单元格内容变成一个输入框，输入框下边是取消和确定

d.点击取消，输入框消失，恢复出原来数字

e.点击确定，输入框消失，数字变成编辑的，这个过程中需要判断输入的正确性，如果输入的不是数字，则弹出提示

f.点击该单元格以外的页面其他任何地方，除了响应对应行为外，同时等同于点击了取消，输入状态消失

g.理论上，同一时刻，只有一个单元格处于编辑状态

h.在输入框中，按ESC键等同于按取消

i.在输入框中，按回车键等同于按确认