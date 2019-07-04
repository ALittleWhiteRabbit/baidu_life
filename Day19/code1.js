   function getAllListItem() {
        // 返回页面中所有li标签
        return document.getElementsByTagName('li');
    }
    console.log(getAllListItem());

    function findAllHtmlSpanInOneSection(sectionId) {
        // 返回某个section下所有span中内容为HTML的span标签
        var arr=[],a=0;
        var all = document.getElementById(sectionId);
        var Nodes = all.getElementsByTagName('span');
        for(i=0;i<Nodes.length;i++) {
            if(Nodes[i].innerText =='HTML') {
                arr[a]=Nodes[i];
                a++;
            }
        }
        return arr;
        /*
        let spanNodes = Array.from(document.getElementById(sectionId)
        .getElementsByTagName('span'))
        return spanNodes.filter(x => x.innerText === 'HTML')
        */
    }
    console.log(findAllHtmlSpanInOneSection("news-normal"));

    function findListItem(sectionId, spanCont) {
        // 返回某个section下，所有所包含span内容为spanCont的LI标签
        var arr=[],a=0;
        var all = document.getElementById(sectionId);
        var Nodes = all.getElementsByTagName('span');
        for(i=0;i<Nodes.length;i++) {
            if(Nodes[i].innerText == spanCont) {
                arr[a]=Nodes[i].parentNode;
                a++;
            }
        }
        return arr;
    }
    console.log(findListItem("news-normal","HTML"));

    function getActiveLinkContent(sectionId) {
        // 返回某个section下，class为active的链接中包含的文字内容
        var arr=[],a=0;
        var all = document.getElementById(sectionId);
        var Nodes = all.getElementsByTagName('a');
        for(i=0;i<Nodes.length;i++) {
            if(Nodes[i].className == 'active') {
                arr[a]=Nodes[i].innerText;
                a++;
            }
        }
        return arr;
    }
    console.log(getActiveLinkContent("news-normal"));
 