function checkForm() {
    var a="admin";
    var pas="123";
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (username.value == "") {
        username.style.border = "1px solid rgba(197,81,58,0.8)";
        alert("用户名不能为空！");
        return;
    } else {
        username.style.border = " 1px solid rgba(255,255,255,0.3)";
    }
    if (password.value == "") {
        alert("密码不能为空！");
        return;
    }
    if (username.value==a && password.value==pas) {
        alert("登入成功" +"用户名："+a  + "密码："+pas);
        console.log(a,pas);
    } else {
        alert("登入失败" +"用户名："+username.value  + "密码："+password.value);
    }
}