/* 
    根据表单选项获取数据
    渲染表格
*/
function drawTable() {
    tableWrapper.innerHTML = '';
    var data = getData(),
        regionLen = regionWrapper.querySelectorAll('input[checkbox-type = sub]:checked').length,
        productLen = productWrapper.querySelectorAll('input[checkbox-type = sub]:checked').length;
    var regionBefore = regionLen == 1 && regionLen < productLen ;
    var productBefore = productLen == 1 && regionLen> productLen ;

    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var regionName = document.createElement("th");
    regionName.innerText = "地区";
    var productName = document.createElement("th");
    productName.innerText = "商品";

    table.appendChild(tr);

    /*
    if：
      商品选择一个,地区作为第二列;
      地区选择一个,商品作为第二列;
    else：
      均多选或均只选一个时
      商品作为第一列, 地区作为第二列;
    */
    if(regionBefore || productBefore) {
        if(regionBefore) {
            tr.appendChild(regionName);
            tr.appendChild(productName);
        } 
        if (productBefore) {
            tr.appendChild(productName);
            tr.appendChild(regionName);
        } 
    } else {
        tr.appendChild(productName);
        tr.appendChild(regionName);
    }

    //渲染月份
    for(var i=1;i<=12;i++ ) {
        var month = document.createElement("th");
        month.innerText = i+ "月";
        tr.appendChild(month);
    }

    for(var i=0;i<data.length;i++) {
        var item = document.createElement("tr");
        item.setAttribute('region',data[i]['region']);
        item.setAttribute('product',data[i]['product']);
        var name = document.createElement("td");
        name.innerText = data[i]['region'];
        var name2 = document.createElement("td");
        name2.innerText = data[i]['product'];

        //合并单元格，取余为0使要合并的单元格只添加一次
        if(regionBefore) {
            name.setAttribute('rowspan',productLen);

            if( i % productLen ==0) {
                item.appendChild(name);
            }
            item.appendChild(name2);
        }else if(productBefore) {
            name2.setAttribute('rowspan',regionLen);
            
            if( i % regionLen ==0) {
                item.appendChild(name2);
            }
            item.appendChild(name);
        }else {
            name2.setAttribute('rowspan',regionLen);

            if( i % regionLen ==0) {
                item.appendChild(name2);
            }
            item.appendChild(name);
        }

        //渲染数据到表格中
        var len = data[i]['sale'].length;
        for(var j=0;j<len;j++) {
            var sales = document.createElement("td");
            sales.innerHTML = data[i]['sale'][j];
            sales.setAttribute('index', j);
            item.appendChild(sales); 
        }
        table.append(item);
    }
    tableWrapper.appendChild(table);
}
