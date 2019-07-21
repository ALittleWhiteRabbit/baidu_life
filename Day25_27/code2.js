var yearSelect = document.getElementById("year-select");
var monthSelect = document.getElementById("month-select");
var daySelect = document.getElementById("day-select");
var hourSelect = document.getElementById("hour-select");
var minuteSelect = document.getElementById("minute-select");
var secondSelect = document.getElementById("second-select");
var result = document.getElementById("result-wrapper");

//创建选项内容的函数
function createOptions(selectNode,start,len,selected) {
    for(var i=start;i<start+len;i++) {
        var options =document.createElement("option");
        options.value = i;
        options.text = i;
        if(i==selected) {
            options.selected = true;
        }
        selectNode.appendChild(options);
    }

}

//格式变化
function format(value) {
    if(value<10) {
        return value = '0'+ value;
    }else {
        return value;
    }
}

//不同的月份，天数不同
function getDayNum(year,month) {
    var num = [31,29,31,30,31,30,31,31,30,31,30,31];
    if(month !=2 ||(year%4 == 0 && year%100 !=0) || year%400 ==0) {
        return num[month-1];
    }
    return 28;
}

//创建选项，默认为2000年1月1日
createOptions(yearSelect,2000,33,2000);
createOptions(monthSelect,1,12,1);
createOptions(daySelect,1,getDayNum(yearSelect.value,monthSelect.value),1);
createOptions(hourSelect,0,24,0);
createOptions(minuteSelect,0,60,0);
createOptions(secondSelect,0,60,0);

//改变选项时，发生变化
function changeDay() {
    var yy = yearSelect.value;
    var mm = monthSelect.value;
    daySelect.options.length=0;
    createOptions(daySelect,1,getDayNum(yy,mm),1);
}

//所选的时间
function selectDate() {
    return [yearSelect.value,monthSelect.value,daySelect.value,
        hourSelect.value,minuteSelect.value,secondSelect.value];
}

//计算时间,显示内容
function calcTime() {
    var newDate = new Date();

    var options = selectDate().map(x =>parseInt(x));
    var optionDate =new Date(options[0],options[1]-1,options[2],options[3],options[4],options[5]);
    var d=optionDate.getDay();
    var week = ['日','一','二','三','四','五','六'];
    optionTime = week[d];

    var diff = optionDate - Date.parse(newDate);
    var value = diff <0 ? "已经过去":"还有";
    var diff = Math.abs(diff);

    var days = Math.floor(diff / (24*60*60*1000));
    var hours = Math.floor(diff / (60*60*1000)) % 24;
    var minutes = Math.floor(diff/ (60*1000)) % 60;
    var seconds = Math.floor(diff / (1000)) % 60;

    result.innerText = "现在距离"+options[0]+"年"
    +format(options[1])+"月"+format(options[2])+"日星期"+optionTime
    +format(options[3])+":"+format(options[4])+":"+format(options[5])
    +value+days+"天"+hours+"小时"+minutes+"分"+seconds+"秒";
}

//改变选项时，天数和文本显示内容改变
yearSelect.addEventListener('change',function() {
    changeDay();
    calcTime();
});
monthSelect.addEventListener('change',function() {
    changeDay();
    calcTime();
});
daySelect.addEventListener('change',calcTime);
hourSelect.addEventListener('change',calcTime);
minuteSelect.addEventListener('change',calcTime);
secondSelect.addEventListener('change',calcTime);

setInterval(calcTime,1000); //每秒设置一次