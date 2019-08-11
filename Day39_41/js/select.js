var regionSelect = document.getElementById("region-select");
var productSelect = document.getElementById("product-select");
var tableWrapper = document.getElementById("table-wrapper");

/*
页面加载根据默认选择调用一次渲染表格函数
*/
window.onload = function() {
    initRegion();  //加载选项
    initProduct();  //加载选项
    var index = regionSelect.selectedIndex;
    var text =  regionSelect.options[index].text;
    var index2 = productSelect.selectedIndex;
    var text2 =  productSelect.options[index2].text;
    var data = getData(text,text2);
    drawTable(data);
}

/*
 渲染新的表格()
*/
regionSelect.addEventListener('change',function(e){
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var index = target.selectedIndex;
    var text =  regionSelect.options[index].text;
    var index2 = productSelect.selectedIndex;
    var text2 =  productSelect.options[index2].text;
    var data = getData(text,text2);
    drawTable(data);
});

productSelect.addEventListener('change',function(e){
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var index = regionSelect.selectedIndex;
    var text =  regionSelect.options[index].text;
    var index2 = target.selectedIndex;
    var text2 =  productSelect.options[index2].text;
    var data = getData(text,text2);
    drawTable(data);
});


/*
根据select选项获取数据
    遍历数据 {
        向要返回的数据list中添加符合表单所选项的数据
    }
    返回数据
*/
function getData(text,text2) {
    var list = new Array();
    var len = sourceData.length;
    for(var i=0;i<len;i++) {
        if(sourceData[i].region == text && sourceData[i].product == text2) {
            list.push(sourceData[i]);
        }
    }
    return list;
};

/* 根据表单选项获取数据
    渲染表格
*/
function drawTable(data) {
    tableWrapper.innerHTML = '';
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var regionName = document.createElement("th");
    regionName.innerText = "地区";
    var productName = document.createElement("th");
    productName.innerText = "商品";
    table.appendChild(tr);
    tr.appendChild(regionName);
    tr.appendChild(productName);
    for(var i=1;i<=12;i++ ) {
        var month = document.createElement("th");
        month.innerText = i+ "月";
        tr.appendChild(month);
    }
    for(var i=0;i<data.length;i++) {
        var item = document.createElement("tr");
        var name = document.createElement("td");
        name.innerText = data[i]['region'];
        item.appendChild(name);
        var name2 = document.createElement("td");
        name2.innerText = data[i]['product'];
        item.appendChild(name2);
        var len = data[i]['sale'].length;
        for(var j=0;j<len;j++) {
            var sales = document.createElement("td");
            sales.innerText = data[i]['sale'][j];
            item.appendChild(sales); 
        }
        table.append(item);
    }
    tableWrapper.appendChild(table);
}

//创建select中的选项
function initRegion() {
    regionSelect.innerText = '';
    var lis = new Array;
    var len = sourceData.length;
    for(var i=0;i<len;i++) {
        if(lis.indexOf(sourceData[i].region) == -1) {
            var option = document.createElement("option");
            option.value = i;
            option.innerText = sourceData[i].region;
            regionSelect.appendChild(option);
            lis.push(sourceData[i].region);
        }
    }
    if(lis.length>0) {
        regionSelect.selectedIndex = 0;
    }
};

function initProduct() {
    var lis = new Array();
    var len = sourceData.length;
    for(var i=0;i<len;i++) {
        if(lis.indexOf(sourceData[i].product) == -1) {
            var option = document.createElement("option");
            option.value = i;
            option.innerText = sourceData[i].product;
            productSelect.appendChild(option);
            lis.push(sourceData[i].product);
        }
    }
    if(lis.length>0) {
        productSelect.selectedIndex = 0;
    }
};