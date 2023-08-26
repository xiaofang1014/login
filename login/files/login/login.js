function checkForm() {
    var a = "admin";
    var pas = "123";
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    console.log(username.value, password.value)
    var eye = document.getElementById("eye");
    if (username.value == "") {
        username.style.border = "1px solid rgba(197,81,58,0.8)";
        name_bug.style.display = "block";
        name_bug.innerText = "*用户名不能为空！";
        // alert("用户名不能为空！");
        return;
    } else {
        username.style.border = " 1px solid rgba(255,255,255,0.3)";
    }
    if (password.value == "") {
        password.style.border = "1px solid rgba(197,81,58,0.8)";
        password_bug.style.display = "block";
        password_bug.innerText = "*密码不能为空！";
        eye.style.bottom = '22px';
        // alert("密码不能为空！");
        return;
    } else {
        password.style.border = " 1px solid rgba(255,255,255,0.3)";
    }
    if (username.value == a && password.value == pas) {
        submit_ok.innerText = "登入成功" + "用户名：" + a + "密码：" + pas;
        submit_ok.style.display = "block";
        // alert("登入成功" +"用户名："+a  + "密码："+pas);
        console.log(a, pas);
    } else {
        // alert("登入失败" +"用户名："+username.value  + "密码："+password.value);
        submit_ok.style.display = "block";
        submit_ok.innerText = "登入失败" + "用户名：" + a + "密码：" + pas;
    }
}
// function checkname(){
//     $("name_bug").innerText="";
//     var user =$("username").value;
//     if (user == "") {
//         $("name_bug").innerText ="*用户名不能为空！"
//         return;
//     }
// }

// function checkUser(){
//     var username = document.getElementById('username');
//     var userMatch = /^[a-zA-Z]||[a-zA-Z0-9_]*$/
//     if (!username.match(userMatch)) {
//         username.style.border = "1px solid rgba(197,81,58,0.8)";
//         alert("请输入由汉字、英文、数字或者下划线的组成")
//     }else{
//         username.style.border = " 1px solid rgba(255,255,255,0.3)";
//     }
// } 

var eye = document.getElementById('eye');
var password = document.getElementById('password');
var kuang = 0;
function anniu() {
    if (kuang == 0) {
        kuang = 1;
        password.type = "text";
        eye.src = "./img/open.png";
    } else {
        kuang = 0;
        password.type = "password";
        eye.src = "./img/close.png";
    }
}