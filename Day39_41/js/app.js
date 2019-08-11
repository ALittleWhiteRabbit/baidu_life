var regionWrapper = document.getElementById("region-radio-wrapper");
var productWrapper = document.getElementById("product-radio-wrapper");
var tableWrapper = document.getElementById("table-wrapper");
var clear = document.getElementById("clear");

//页面加载根据默认选择调用一次渲染表格和图表
window.onload = function() {
    reset();
}

//清空localStorage，重新渲染表格和图表
clear.onclick = function() {
    localStorage.clear();
    reset();
}

//hash.getHash();

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

/*
给表格增加一个鼠标滑过的事件响应，当鼠标滑过任何一行时，把这一行的数据在两个图表中进行呈现
当鼠标滑动过某一个数字的单元格时，数字旁边显示一个铅笔的icon，或者显示灰色的小小的编辑两个字
*/
tableWrapper.onmouseover = function (e) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var data = new Array();
    var list = loadStorage();

    if(target.nodeName == "TD") {
        tr = target.parentNode;
        var region = tr.getAttribute('region');
        var product = tr.getAttribute('product');
        for(var i=0;i<list.length;i++) {
            if(list[i].region == region && list[i].product == product) {
                data.push(list[i]);
            }
        }

        if(target.id == "edit") {
            target.style = "background:none";
        }else {
            draw(data);
            if(target.innerHTML != region && target.innerHTML !=product) {
                target.style = "background:url(../Day39_41/icon.png) right center /15px 15px no-repeat";
            }
        }
        
    }
}

//当鼠标离开table的时候，图表中的内容恢复
tableWrapper.onmouseleave = function () {
    var data = getData();
    draw(data);
}

//鼠标划过单元格时，icon消失
tableWrapper.onmouseout = function (e) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    if(target.nodeName == "TD") {
        target.style = "background:none";
    }

}

//表格的点击事件
tableWrapper.addEventListener('click',function(){
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var region = tr.getAttribute('region');
    var product = tr.getAttribute('product');

    if(target.nodeName == "TD") {
        if(target.innerHTML != region && target.innerHTML !=product) {
            addChild(target);

            var save = document.getElementById("save");
            save.onclick = function () {
                saveEvent(target);
            }

            var cancel = document.getElementById("cancel");
            cancel.onclick = function () {
                reset();
            }

            //同一时刻，只有一个单元格处于编辑状态
            var editTd = document.querySelector('#edit');
            if (editTd !== null) {
                var value = inputValue(editTd);
                if (target.id == "") { // 存在正在编辑TD 点击到了别的TD
                    target.id = "edit";
                    editTd.id = "";
                    editTd.innerHTML = value;
                } else if (target.id == "edit") { // 存在正在编辑TD 点击到该TD
                    target.id = "";
                }
            } else if (editTd == null) { // 没有正在编辑的TD 点击到TD
                target.id = "edit";
            }
        }

    }
   
});

/*
按键
在输入框中，按ESC键等同于按取消
在输入框中，按回车键等同于按确认
*/
tableWrapper.onkeydown = function(e) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName == "INPUT") {
        var tar = target.parentNode;
        switch(e.keyCode) {
            case 13:
                saveEvent(tar);
                break;
            case 27:
                reset();
                break;
            default:
                break;
        }
        
    }
}

//hash.getHash();
push.getPush();