/*
我们假设要在某种特殊的机器人上写代码，但是这个机器人本身只实现了以下两个方法（函数）：
    Go，表示向当前方向前进一步
    TurnLeft，表示向左转
那么向右转：通过三次向左转来实现
*/
function go() {
    //前进
}
function TurnLeft() {
    //向左转
}
/*
需求一:
    我需要这个机器人，向前一步，然后向右转，向前两步，再向右转，向前一步，
    再向右转，向前三步，再向右转，那代码变为：
*/
Go();
TurnLeft();
TurnLeft();
TurnLeft();
Go();
Go();
TurnLeft();
TurnLeft();
TurnLeft();
Go();
TurnLeft();
TurnLeft();
TurnLeft();
Go();
Go();
Go();
TurnLeft();
TurnLeft();
TurnLeft();
/*
    把上面代码一些重复的地方封装为一个函数 把向右转： TurnRight()
    因此上面代码就变成
 */
function TurnRight() {
    TurnLeft();
    TurnLeft();
    TurnLeft();
}
Go();
TurnRight();
Go();
Go();
TurnRight();
Go();
TurnRight();
Go();
Go();
Go();
TurnRight();
/*
需求二：前进4步，向右转，前进8步向右转，前进20步向右转……
    因此可以封装： 
        function GoSteps(n) {
            while (n--) {
                Go();
            }
        }
*/
/*
    当然上面的GoSteps函数目前是不严谨的，我们必须考虑更多的问题，比如传入参数的正确性和合法性，
    比如传入的参数是不是数字，是不是正整数，现在请你自己写一个GoSteps函数，然后跑通下面的测试用例。
*/

function Go() {
    console.log("Go");
}

function GoSteps(n) {
    n = n === undefined ? 1:n;
    n = parseInt(n * 1); //n * 1先把n转为数字类型 再用parseInt()取整
    while(n>0) {
        Go();
        n--
    }
}

GoSteps(10); // Go 10次
GoSteps(1); // Go 1次
GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
GoSteps(0);  // 0次
GoSteps(-1);  // 0次
GoSteps(1.4);  // Go 1次
GoSteps(1.6);  // Go 1次
GoSteps(-1);  // 0次
GoSteps(true);  // Go 1次
GoSteps(false);  // 0次
GoSteps("Test");  // 0次
GoSteps(NaN);  // 0次
GoSteps(null);  // 0次


var text = document.getElementById("clock");
var text2 = document.getElementById("clock2");

function weeks() {
    var d = new Date().getDay();
    var week = ['日','一','二','三','四','五','六'];
    return week[d];
}

function weeks_2() {
    var d = new Date().getDay();
    var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return week[d];
}

function format(value) {
    if(value<10) {
        return value = '0'+ value;
    }else {
        return value;
    }
}

function change(value) {
    var myDate = new Date();
    var minute = format(myDate.getMinutes());
    var second = format(myDate.getSeconds());
    if(value<12) {
        flag=0;
        return value = format(value)+':'+ minute+':'+second+' AM';
    } else {
        return value = format(value-12)+':'+ minute+':'+second+' PM';
    }
}

function display() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = format(myDate.getMonth()+1);
    var day = format(myDate.getDate());
    var hour = format(myDate.getHours());
    var value = change(myDate.getHours());
    var minute = format(myDate.getMinutes());
    var second = format(myDate.getSeconds());
    var week = weeks();
    var week2 = weeks_2();
    text.innerHTML= year +' 年 '+ month +' 月 '+ day +' 日 ' +" 星期"+ week + ' ' + hour +':'+ minute+':'+second ;
    text2.innerHTML= year +'-'+ month +'-'+ day +' ' + week2 + ' ' +value;
}
setInterval(display,500);


