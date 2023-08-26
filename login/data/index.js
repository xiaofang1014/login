var yuanshu = 0 //初始数值
const re = 5820 //获取到的数据
var num1Add = setInterval(num1Add, 8)
function num1Add() {
    yuanshu = yuanshu + 5 //数据变化的间隔
    document.getElementById("num1").innerText = yuanshu
    if (yuanshu == re) { //检验数值是否到达数据的数值
        window.num1Stop()
    }
}
function num1Stop() { //停止计时器
    window.clearInterval(num1Add)
}

var yuanshu1 = 0 //初始数值
const re1 = 2802 //获取到的数据
var num2Add = setInterval(num2Add, 8)
function num2Add() {
    yuanshu1 = yuanshu1 + 5 //数据变化的间隔
    document.getElementById("num2").innerText = yuanshu1
    if (yuanshu1 == re1) { //检验数值是否到达数据的数值
        window.num2Stop()
    }
}
function num2Stop() { //停止计时器
    window.clearInterval(num2Add)
}

var yuanshu = 0 //初始数值
const re2 = 249 //获取到的数据
var num3Add = setInterval(num3Add, 8)
function num3Add() {
    yuanshu = yuanshu + 1 //数据变化的间隔
    document.getElementById("num3").innerText = yuanshu
    if (yuanshu == re2) { //检验数值是否到达数据的数值
        window.num3Stop()
    }
}
function num3Stop() { //停止计时器
    window.clearInterval(num3Add)
}

var yuanshu = 0 //初始数值
const re3 = 23.786 //获取到的数据
var num4Add = setInterval(num4Add, 8)
function num4Add() {
    yuanshu = yuanshu + 1 //数据变化的间隔
    document.getElementById("num4").innerText = yuanshu
    if (yuanshu == re3) { //检验数值是否到达数据的数值
        window.num4Stop()
    }
}
function num4Stop() { //停止计时器
    window.clearInterval(num4Add)
}



var tupian = document.getElementById("p3_img");

var xiala = 0;
function ken() {
    var p4_img = document.getElementById("p4_img");
    var p4 = document.getElementById('p4');
    var p4_imgg = document.getElementById('p4_imgg');
    var p5_img = document.getElementById('p5_img');
    var p5 = document.getElementById('p5');
    var p5_imgg = document.getElementById('p5_imgg');
    var p6_img = document.getElementById('p6_img');
    var p6 = document.getElementById('p6');
    if (xiala == 0) {
        xiala = 1;
        product_content.style.display = "block";
        p3_img.src = "./img/箭头 上.png";
        // alert('xiala1'+xiala);   
        p4_img.style.top = '385px';
        p4.style.top = '370px';
        p4_imgg.style.top = '387px';
        p5_img.style.top = '435px';
        p5.style.top = '420px';
        p5_imgg.style.top = '437px';
        p6_img.style.top = '485px';
        p6.style.top = '470px';

    } else {
        // alert('xiala222222222'+xiala);
        xiala = 0;
        product_content.style.display = "none";
        p3_img.src = "./img/箭头 下.png";
        p4_img.style.top = "305px";
        p4.style.top = '290px';
        p4_imgg.style.top = '307px';
        p5_img.style.top = '355px';
        p5.style.top = '340px';
        p5_imgg.style.top = '357px';
        p6_img.style.top = '405px';
        p6.style.top = '390px';
    }
}
