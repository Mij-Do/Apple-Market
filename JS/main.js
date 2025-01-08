let header = document.getElementById("header");
let imgShow = document.getElementById("showImg");
let selectIph = document.getElementById("select-Iph");
let aColor = document.querySelectorAll("a");
let btn = document.getElementById("btn");
let footerImg = document.getElementById("footerImg");

function setColor (color) {
    localStorage.setItem("color", color);
    document.body.style.backgroundColor = color;
}

function srcCode (src) {
    localStorage.setItem("src", src);
    imgShow.src = src;
}
function headerColor (backColor) {
    localStorage.setItem("backColor", backColor);
    header.style.backgroundColor = backColor;
    selectIph.style.backgroundColor = backColor;
    footerImg.style.backgroundColor = backColor;
}
function textColor (txt) {
    localStorage.setItem("textColor", txt);
    document.body.style.color = txt;
    aColor.forEach(element => {
        element.style.color = txt;
    });
}

if (localStorage.length > 0) {
    document.body.style.backgroundColor = localStorage.color;
    imgShow.src = localStorage.src;
    header.style.backgroundColor = localStorage.backColor;
    selectIph.style.backgroundColor = localStorage.backColor;
    document.body.style.color = localStorage.textColor;
    aColor.forEach(element => {
        element.style.color = localStorage.textColor;
    });
    footerImg.style.backgroundColor = localStorage.backColor;
} else {
    imgShow.src = "./Images/Iphone natural/natural.png";
}

// date
let date = new Date();
let dateNow = document.getElementById("dateNow");
dateNow.textContent = date.getFullYear();


