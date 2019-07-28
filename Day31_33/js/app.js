var regionWrapper = document.getElementById("region-radio-wrapper");
var productWrapper = document.getElementById("product-radio-wrapper");
var tableWrapper = document.getElementById("table-wrapper");

//页面加载根据默认选择调用一次渲染表格函数
window.onload = function() {
    drawTable();
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