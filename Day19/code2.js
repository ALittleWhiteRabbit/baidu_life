function getAllListItem() {
    // 返回页面中所有li标签
    return document.querySelectorAll ('li');
}
console.log(getAllListItem());

function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    var arr=[],a=0;
    var all = document.querySelector (sectionId);
    var nodes = all.querySelectorAll ('span');
    for(i=0;i<nodes.length;i++){
        if(nodes[i].innerText == 'HTML') {
            arr[a] = nodes[i];
            a++;
        }
    }
    return arr;
}
console.log(findAllHtmlSpanInOneSection("#news-normal"));

function findListItem(sectionId, spanCont) {
    // 返回某个section下，所有所包含span内容为spanCont的LI标签
    var arr=[],a=0;
    var all = document.querySelector (sectionId);
    var nodes = all.querySelectorAll ('span');
    for(i=0;i<nodes.length;i++){
        if(nodes[i].innerText == spanCont) {
            arr[a] = nodes[i].parentNode;
            a++;
        }
    }
    return arr;
}
console.log(findListItem('#news-top','JS'));

function getActiveLinkContent(sectionId) {
    // 返回某个section下，class为active的链接中包含的文字内容
    var arr=[],a=0;
    var all = document.querySelector (sectionId);
    var nodes = all.querySelectorAll ('a');
    for(i=0;i<nodes.length;i++){
        if(nodes[i].className == 'active') {
            arr[a] = nodes[i].innerText;
            a++;
        }
    }
    return arr;
}
console.log(getActiveLinkContent('#news-normal'));
