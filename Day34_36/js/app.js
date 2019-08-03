var regionWrapper = document.getElementById("region-radio-wrapper");
var productWrapper = document.getElementById("product-radio-wrapper");
var tableWrapper = document.getElementById("table-wrapper");

//页面加载根据默认选择调用一次渲染表格函数
window.onload = function() {
    drawTable();
    var data = getData();
    barChart.setData(data);
    barChart.drawChart();
    
    lineChart.setdata(data);
    lineChart.drawChart();
}

//初始化数据
createCheckBox(regionWrapper, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华北"
}, {
    value: 3,
    text: "华南"
}
]);

createCheckBox(productWrapper, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
},{
    value: 3,
    text: "智能音箱"
}
]);

//给表格增加一个鼠标滑过的事件响应，当鼠标滑过任何一行时，把这一行的数据在两个图表中进行呈现
tableWrapper.onmouseover = function (e) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var data = new Array();
    if(target.nodeName == "TD") {
        tr = target.parentNode;
        var region = tr.getAttribute('region');
        var product = tr.getAttribute('product');
        for(var i=0;i<sourceData.length;i++) {
            if(sourceData[i].region == region && sourceData[i].product == product) {
                data.push(sourceData[i]);
            }
        }
        barChart.setData(data);
        barChart.drawChart();
        
        lineChart.setdata(data);
        lineChart.drawChart();
    }
}

//当鼠标离开表格的时候，图表中的内容恢复
tableWrapper.onmouseout = function () {

        var data = getData();

        barChart.setData(data);
        barChart.drawChart();
        
        lineChart.setdata(data);
        lineChart.drawChart();
}