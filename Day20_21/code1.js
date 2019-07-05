/*编码一*/
var subBtn = document.getElementById ("submit-btn");
let name = document.getElementById("name");

function myClick() {
    console.log(name.value);
}
subBtn.addEventListener('click',myClick);

window.onkeydown = function (e) {
    if(e.keyCode==13){
        console.log(name.value);
    } else if (e.keyCode == 27) {
        name.value = '';
    }
}

/*编码二*/
var school = document.getElementById ("school");
var company = document.getElementById ("company");
let option = document.querySelectorAll("select");

school.addEventListener('click',myChange);
company.addEventListener('click',myChange);

function myChange(e) {
    if(e.target.id == 'school') {
        option[0].style.cssText = 'display:block';
        option[1].style.cssText = '';
    } else if (e.target.id == 'company'){
        option[0].style.cssText = '';
        option[1].style.cssText = 'display:block';
    }
}

/*编码三*案例
var list = document.querySelectorAll("li");
for (var i = i = 0, len = list.length; i < len; i++) {
    list[i].onclick = function(e) {
        var t = e.target;
        var c = t.style.backgroundColor;
        var p = document.getElementsByClassName("color-picker")[0]
        p.innerHTML = c;
        p.style.color = c;

    }
}*/
var ulist = document.querySelector('.palette');

ulist.addEventListener('click',function(e){
    var e = e || window.event;
　　var target = e.target || e.srcElement;
    if( target.nodeName.toLowerCase() =='li') {
        var c = target.style.backgroundColor;
        var p = document.getElementsByClassName("color-picker")[0];
        p.innerHTML = c;
        p.style.color = c;
    }
});

/*编码四  setTimeout()实现*/
let fadeBtn = document.getElementById("fade-btn");
let fadeObj = document.getElementById("fade-obj");
let flag=0;

fadeBtn.addEventListener('click',fade);

function fade() {
    fadeBtn.disabled = true;
    if(flag==0) {
        disappear();
    }else if(flag==1) {
        appear();
    }
}

function disappear() {
    //console.log(fadeObj.style.opacity);
    if(fadeObj.style.opacity <= 0) {
        fadeBtn.innerText = '淡入';
        fadeBtn.disabled = false;
        flag=1;
    }else {
        fadeObj.style.opacity -= 0.05;
        setTimeout(disappear,5000/60);
    }
}

function appear() {
    //console.log(fadeObj.style.opacity);
    if(fadeObj.style.opacity >= 1) {
        fadeBtn.innerText = '淡出';
        fadeBtn.disabled = false;
        flag = 0;
    }else {
        fadeObj.style.opacity = parseFloat(fadeObj.style.opacity) + 0.05;
        setTimeout(appear,5000/60);
    }
}

/*setInterVal()实现

function fade() {
    fadeBtn.disabled = true;
    var time = setInterval((function() {
        //console.log(fadeObj.style.opacity);
        if(flag==0){
            if(fadeObj.style.opacity <= 0) {
                fadeBtn.innerText = '淡入';
                fadeBtn.disabled = false;
                clearInterval(time);
                flag=1;
            } else {
                fadeObj.style.opacity -= 0.05;
            }
        } else {
            if(fadeObj.style.opacity >= 1) {
                fadeBtn.innerText = '淡出';
                fadeBtn.disabled = false;
                clearInterval(time);
                flag=1;
            }else {
                fadeObj.style.opacity = parseFloat(fadeObj.style.opacity) + 0.05;
            }
        } 
    }),5000/60);    
}*/

/*编码五*/
var sprite = document.getElementById("sprite");
sprite.style.backgroundPositionY = 0;
let flag2=0;
var animation = setInterval((function() {

    var bgY = parseInt(sprite.style.backgroundPositionY);
    //console.log(bgY);
    if(flag2==0) {
        if (bgY <=-7680) {
            flag2=1;
        } else {
            sprite.style.backgroundPositionY = bgY - 480 + 'px';
        }
    } else if(flag2==1){
        if (bgY >=0) {
            flag2=0;
        } else {
            sprite.style.backgroundPositionY = bgY + 480 + 'px';
        }
    }
    
}),4000/60);








