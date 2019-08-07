/*
    遍历原始数据 {
        判断是否在商品维度 或者 地区维度的选中范围内 {
            添加到返回数据list中
        }
    }
    返回数据
*/
//取出localstorage中被选中的数据
function getData() {
    var list = new Array(),
        data = loadStorage(),
        regionText = '',
        productText ='',
        regions = regionWrapper.querySelectorAll('input[checkbox-type=sub]:checked'),
        products = productWrapper.querySelectorAll('input[checkbox-type =sub]:checked');
    for(var i=0;i<data.length;i++) {
        for(var j=0;j<regions.length;j++) {
            for(var k=0;k<products.length;k++) {
                regionText = regions[j].getAttribute('data-text');
                productText = products[k].getAttribute('data-text');
                if(data[i].region == regionText && data[i].product == productText){
                    list.push(data[i]);
                }
            }
        }
    }
    return list;
};

//取出所有的数据
function getAllData() {
    var list = new Array();
    for(var i=0;i<sourceData.length;i++) {
        list.push(sourceData[i]);
    }
    return list;
}


