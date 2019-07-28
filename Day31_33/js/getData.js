/*
    遍历原始数据 {
        判断是否在商品维度 或者 地区维度的选中范围内 {
            添加到返回数据list中
        }
    }
    返回数据
*/
function getData() {
    var list = new Array(),
        regionText = '',
        productText ='',
        regions = regionWrapper.querySelectorAll('input[checkbox-type=sub]:checked'),
        products = productWrapper.querySelectorAll('input[checkbox-type =sub]:checked');
    for(var i=0;i<sourceData.length;i++) {
        for(var j=0;j<regions.length;j++) {
            for(var k=0;k<products.length;k++) {
                regionText = regions[j].getAttribute('data-text');
                productText = products[k].getAttribute('data-text');
                if(sourceData[i].region == regionText && sourceData[i].product == productText){
                    list.push(sourceData[i]);
                }
            }
        }
    }
    return list;
};
