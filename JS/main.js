let header = document.getElementById("header");
let imgShow = document.getElementById("showImg");


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
}
function textColor (txt) {
    localStorage.setItem("textColor", txt);
    // aColor.style.color = txt;
    document.body.style.color = txt;
}

if (localStorage.length > 0) {
    document.body.style.backgroundColor = localStorage.color;
    imgShow.src = localStorage.src;
    header.style.backgroundColor = localStorage.backColor;
    // aColor.style.color = localStorage.textColor;
    document.body.style.color = localStorage.textColor;
} else {
    imgShow.src = "./Images/Iphone natural/natural.png";
}


