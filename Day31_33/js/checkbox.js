/**
 * [生成checkbox]
 * @param {element} box [CheckBox容器]
 * @param {object} list [heckBox选项的参数对象或者数组]
 */
function createCheckBox(box,list) {
    var len = list.length,
    label = {},  //label元素节点
    check_all = {}, //全选checkbox元素节点
    check_sub ={},  //子项checkbox元素节点
    check_subs = []; //全部的checkbox元素节点

    label = document.createElement("label");
    label.innerText = "全选";
    check_all = document.createElement("input");
    check_all.type = "checkbox";
    check_all.setAttribute("checkbox-type","all");

    box.appendChild(label);
    label.appendChild(check_all);

    /*
    遍历参数对象 {
        生成各个子选项checkbox的html，给一个自定义属性表示为子选项
    */
    for(var i=0;i<len;i++) {
        label = document.createElement("label");
        label.innerText = list[i].text;
        var check_sub = document.createElement("input");
        check_sub.type = 'checkbox';
        check_sub.value = list[i].value;
        check_sub.setAttribute('checkbox-type',"sub");
        check_sub.setAttribute('data-text',list[i].text);

        if(i==0) {
            check_sub.checked = true;  //默认选中第一项
        }

        box.appendChild(label);
        label.appendChild(check_sub);
        check_subs.push(check_sub);
    }

    //给容器做一个事件委托,分别给全选的CheckBox和各个单选的CheckBox绑定上点击事件
    box.onclick = function(e) {
        var e = event || window.event,
            target = e.target || e.srcElement,
            node_Name = target.nodeName,
            node_Type = target.getAttribute("checkbox-type"),
            sub_len = box.querySelectorAll('input[checkbox-type = sub]:checked').length,
            subs_len = check_subs.length;
        if(node_Name == "INPUT") {
            if(node_Type == "all") {
                for(var i=0;i<subs_len;i++) {
                    check_subs[i].checked = true;
                }
                if(sub_len == subs_len) {
                    target.checked = true;
                }
            }else if(node_Type == "sub") {
                if(sub_len<1) {
                    //如果该选项为唯一被勾选的，将check状态置为真
                    target.checked = true;
                }
                sub_len ==subs_len ? (check_all.checked = true) :(check_all.checked = false);
            }
            drawTable();
        }
    }

}


/*创建选项 
function initRegion() {
    var lis = new Array();
    var len = sourceData.length;
    var label = document.createElement("label");
    label.innerText = "全选";
    var check_all = document.createElement("input");
    check_all.type = 'checkbox';
    regionWrapper.appendChild(label);
    regionWrapper.appendChild(check_all);
    for(var i=0;i<len;i++) {
        if(lis.indexOf(sourceData[i].region) == -1) {
            var label2 = document.createElement("label");
            label2.innerText = sourceData[i].region;
            var check_sub = document.createElement("input");
            check_sub.type = 'checkbox';
            check_sub.value = i;
            regionWrapper.appendChild(label2);
            regionWrapper.appendChild(check_sub);
            lis.push(sourceData[i].region);
        }
    }
};

function initProduct() {
    var lis = new Array();
    var len = sourceData.length;
    var label = document.createElement("label");
    label.innerText = "全选";
    var check_all = document.createElement("input");
    check_all.type = 'checkbox';
    productWrapper.appendChild(label);
    productWrapper.appendChild(check_all);
    for(var i=0;i<len;i++) {
        if(lis.indexOf(sourceData[i].product) == -1) {
            var label2 = document.createElement("label");
            label2.innerText = sourceData[i].product;
            var check_sub = document.createElement("input");
            check_sub.type = 'checkbox';
            check_sub.value = i;
            productWrapper.appendChild(label2);
            productWrapper.appendChild(check_sub);
            lis.push(sourceData[i].product);
        }
    }
};
*/