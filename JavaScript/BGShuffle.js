function bgshuffle() {
    var randomnum = Math.floor(Math.random() * (4 - 1)) + 1;
    if (window.innerWidth > "750") {
        document.getElementById("bgchange").style.background = "url(../Imgs/landscape" + randomnum + ".jpg)";

    } else {
        document.getElementById("bgchange").style.background = "url(../Imgs/landscape" + randomnum + ".jpg)";
    }
}