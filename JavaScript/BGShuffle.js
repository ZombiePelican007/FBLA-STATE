function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function bgshuffle() {
    var randomnum = Math.floor(Math.random() * (8)) + 1;
    if (window.innerWidth > "750") {
        document.getElementById("bgchange").style.background = "url(Imgs/landscape" + randomnum + ".jpg)";

    } else {
        document.getElementById("bgchange").style.background = "url(Imgs/portrait" + randomnum + ".jpg)";
    };
};