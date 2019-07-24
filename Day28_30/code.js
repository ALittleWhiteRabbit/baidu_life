// 邮箱后缀List参考
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];

var input = document.getElementById("email-input");
var emailSug = document.getElementById("email-sug-wrapper");

// 增加一个变量，用于存储当前选中的提示Li的序号
var nowSelectTipIndex = 0;

//一进入页面就将焦点放在输入框中
window.onload = input.focus();

/*
获取用户输入，生成提示框中的提示内容，
将提示内容添加到email-sug-wrapper中
控制email-sug-wrapper的显示/隐藏状态
*/
input.addEventListener('keyup',function(e) {
    var e = event || window.event;
    var code = e.keyCode;
    var inputValue = getInputValue();
    createPrompt();
    addEmailSug();
/*
新增
    如果按键不是上下及回车重置选中状态()
*/
    if(code != 38 && code !=40 && code != 13) {
        controlEmailSug(inputValue);
        reSet();
    }
});

/*
基于数据，我们设置一个变量，来保存当前选择的index（即当前选中的是第几行，从0开始计数），
当发生上下键操作的时候，直接改变index值，然后重新渲染提示框中的所有html内容，
根据index设置来操作后的选择提示样式，回车的时候，直接根据index来获取对应的内容
*/
input.addEventListener('keydown',function(e) {
    var e = event || window.event;
    var code = e.keyCode;
    var lis = addEmailSug();
    var len = lis.length;
    if (code == 38) {
        console.log(nowSelectTipIndex);
       if (nowSelectTipIndex == 0) {
           nowSelectTipIndex = len-1;
           console.log(nowSelectTipIndex);
       }else {
           --nowSelectTipIndex;
       }
    }else if (code == 40) {
        if(nowSelectTipIndex < len-1) {
            ++nowSelectTipIndex;
        }else {
            nowSelectTipIndex = 0;
        }
    }else if (code == 13) {
        /*从当前提示框中选第 nowSelectTipIndex 个Li，将其HTML内容解码后填到input中
        隐藏提示框*/       
        var inputValue = lis[nowSelectTipIndex].innerText;
        input.value = HtmlUtil.htmlDecode(inputValue);
        hiddenEmailSug();
        input.focus();
    } else if (code == 27) {
        //用户按ESC键的时候，对用户输入进行全选
        input.select();
    }
});

function reSet() {
    nowSelectTipIndex = 0;
}

/*
当监听到用户点击某一个提示的Li后，我们需要做的就是，把Li对应的提示内容，放在输入框中，同时隐藏提示框
在把鼠标点击的提示框内容转回输入框时进行解码
选择一个合适的DOM节点.监听鼠标点击 = function () {
    if 被点击的是不是提示框中的Li节点 {
        获取被点击Li对应的提示内容
        将内容放到input输入框中
        隐藏输入框
    }
}
*/
emailSug .addEventListener('click',function(e) {
    var e = event || window.event;
    var target = e.target ||e.srcElement;
    if(target.nodeName == "LI") {
        input.value = HtmlUtil.htmlDecode(target.innerText);
        hiddenEmailSug();
    }
    //用户点击鼠标，进行提示选择后，焦点依然在输入框中
    input.focus();
});

//拿到input输入框的输入内容trim后返回 
function getInputValue() {
    return input.value.trim();
}

/*
当用户输入含有 @ 符号时，我们选取用户输入的@前面的字符来和后缀拼接,
当用户输入了 @ 及部分后缀时，只从 postfixList 选取符合用户输入预期的后缀，我们以前缀匹配为要求
当用户输入不满足任何前缀匹配时，则显示全部提示
    用来拼接的用户输入内容 = 获取用户输入
    if 用户输入含有@ {
        用来拼接的用户输入内容 = @之前的字符串
        用来前缀匹配的用户输入内容 = @之后的字符串
    }
    遍历postfixList {
        if 用来前缀匹配的用户输入内容前缀匹配遍历字符串元素
            把用来拼接的用户输入内容和这个字符串进行结合成为一个Li
    }
    // 新增
    将第nowSelectTipIndex个Li的样式设置为被选样式

    返回生成的提示内容
*/
function createPrompt() {
    var inputValue = getInputValue();
    var len = postfixList.length;
    var location = inputValue.indexOf('@');
    var prompt = new Array();  //存放提示内容
    var afterStr;
    var isMatch = false;
    if(location != -1){
        afterStr = inputValue.slice(location+1);
        inputValue = inputValue.slice(0,location);
    }
    if(inputValue != '') {
        for(var i=0;i<len;i++) {
            if(postfixList[i].indexOf(afterStr) ==0 ) {
                prompt.push(inputValue+'@'+ postfixList[i]);
                isMatch = true;
            }
        }
        for(var i=0;i<len;i++) {
            if(isMatch == false){
                prompt.push(inputValue+'@'+ postfixList[i]);
            }
        }
    }
    return prompt;
}

/*
将提示内容添加到email-sug-wrapper中:
    获取生成提示框中的提示内容
    在生成提示内容那里，对于特殊字符进行转义编码
    将内容添加到email-sug-wrapper中
*/
function addEmailSug(tipStr) {
    var tipStr = createPrompt();
    emailSug.innerHTML = '';
    var Lis = new Array();
    for(var i=0;i<tipStr.length;i++) {
        var options = document.createElement("li");
        options.innerText = HtmlUtil.htmlEncode(tipStr[i]);
        emailSug.appendChild(options);
        Lis.push(options);
    }
    //如果lis提示li存在 就将第nowSelectTipIndex个Li的样式设置为被选样式 
    if(Lis[nowSelectTipIndex]) {
        Lis[nowSelectTipIndex].className = 'select';
    }
    return Lis;
}

/*
控制email-sug-wrapper的显示/隐藏状态:
    if 用户输入为空 {
        隐藏提示框
    } else {
        显示提示框
    }
*/
function controlEmailSug(inputValue) {
    if(inputValue == '') {
        hiddenEmailSug();
    }else {
        displayEmailSug();
    }

}

//隐藏提示框
function hiddenEmailSug() {
    emailSug.style.display = 'none';
}

//显示提示框
function displayEmailSug(){
    emailSug.style.display = 'block';
}

