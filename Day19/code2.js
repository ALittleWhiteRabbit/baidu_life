function getAllListItem() {
    // 返回页面中所有li标签
    return document.querySelectorAll('li');
}
console.log(getAllListItem());

function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    var all = document.querySelector(sectionId);
    var nodes = all.querySelectorAll('div span');
    return nodes;
    var f = {},a = 0;
    var x = document.getElementById(sectionId);
    var x_span = x.querySelectorAll("span");
    for(var i = 0;i < x_span.length;i++){//判断其长度，并遍历
    if(x_span[i].innerHTML == "HTML"){//判断span中内容
        f[a] = x_span[i];
        a++;
    }
    }
    return f;
    // 返回某个section下所有span中内容为HTML的span标签
}
console.log(findAllHtmlSpanInOneSection("#news-normal"));
function findListItem(sectionId, spanCont) {
    // 返回某个section下，所有所包含span内容为spanCont的LI标签
}

function getActiveLinkContent(sectionId) {
    // 返回某个section下，class为active的链接中包含的文字内容
    var all = document.querySelectorAll(sectionId);
    var nodes = all.querySelector('.active');
    return nodes;
}
console.log(getActiveLinkContent("#news-normal"));
