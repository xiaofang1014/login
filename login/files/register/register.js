function checkForm() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let two_password = document.getElementById('two_password');
    var eye1 =document.getElementById("eye1");
    var eye2 =document.getElementById("eye2");
    if (username.value == "") {
        username.style.border = "1px solid rgba(197,81,58,0.8)";
        name_bug.style.display = "block";
        name_bug.innerText = "*用户名不能为空！";
        // alert("用户名不能为空！");
        return;
    } else {
        username.style.border = " 1px solid rgba(255,255,255,0.3)";
    }
    if (password.value == '' ) {
        password.style.border = "1px solid rgba(197,81,58,0.8)";
        password_bug.style.display = "block";
        password_bug.innerText = "*密码不能为空！";
        eye1.style.bottom='22px';
        // alert("密码不能为空！");
        return;
    } else {
        password.style.border = " 1px solid rgba(255,255,255,0.3)";
    }
    if (two_password.value == '' ) {
        two_password.style.border = "1px solid rgba(197,81,58,0.8)";
        two_password_bug.style.display = "block";
        two_password_bug.innerText = "*确认密码不能为空！";
        eye2.style.bottom='22px';
            // alert("密码不能为空！");
        return;
    } else { 
        two_password.style.border = "1px solid rgba(197,81,58,0.8)";
    }
    if (password.value.length < 6 ) {
        alert("密码不能小于6位！");
        return;
    }
    if (two_password.value == password.value) {
        alert("注册成功")
    } else {
        alert("密码不一致！");
        two_password.value = "";
    }
 }


var eye1 = document.getElementById('eye1');
var password = document.getElementById('password');
var kuang1 = 0;
function anniu1(){
    if (kuang1 == 0) {
        kuang1 = 1;
        password.type = "text";
        eye1.src = "./img/open.png";
    } else {
        kuang1 = 0;
        password.type = "password";
        eye1.src = "./img/close.png";
    }
}
var eye2 = document.getElementById('eye2');
var two_password = document.getElementById('two_password');
var kuang2 = 0;
function anniu2(){
    if (kuang2 == 0) {
        kuang2 = 1;
        two_password.type = "text";
        eye2.src = "./img/open.png";
    } else {
        kuang2 = 0;
        two_password.type = "password";
        eye2.src = "./img/close.png";
    }
}