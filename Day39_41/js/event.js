//根据传递的数据，画柱状图和折线图
function draw(data) {
    barChart.setData(data);
    barChart.drawChart();
        
    lineChart.setdata(data);
    lineChart.drawChart();
}

//对图表和表格进行重绘
function reset() {
    var data = getData();
    drawTable();
    draw(data);
}

//当鼠标点击某个数字的单元格时，这个数字进入编辑状态，单元格内容变成一个输入框，输入框下边是取消和确定
function addChild(target) {
    target.style.background = "none";

    var value = target.innerHTML;
    target.innerHTML  = '';
    var edit  = document.createElement("input");
    edit.setAttribute('type', 'text');
    edit.setAttribute('value', value);

    var save = document.createElement("button");
    save.setAttribute('id','save');
    save.innerHTML = "确定";

    var cancel = document.createElement("button");
    cancel.setAttribute('id','cancel');
    cancel.innerHTML = "取消";

    target.appendChild(edit);
    target.appendChild(save);
    target.appendChild(cancel);
}

/*
确定按钮的点击事件：输入框消失，数字变成编辑的，
这个过程中需要判断输入的正确性，如果输入的不是数字，则弹出提示
*/
function saveEvent(target) {
    var value = inputValue(target);
    if (isNaN(value)) {
        alert("输入的不是数字");
    } else {
        target.innerHTML = value;
    }
    saveStorage(target);
    reset();
}

//取得输入框中的值
function inputValue(target) {
    var childs = target.childNodes;
    var len = childs.length;
    for (var i = 0; i < len; i++) {
        if (childs[i].nodeName == 'INPUT') {
            var value = childs[i].value;
        }
    }
    return value;
}

//点击该单元格以外的页面其他任何地方，除了响应对应行为外，同时等同于点击了取消，输入状态消失
document.onclick = function(e) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    if(target.nodeName !='TD' && target.nodeName != 'INPUT') {
        reset();
    }
}
