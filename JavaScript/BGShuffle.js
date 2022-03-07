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

async function testimonialswap() {
    const testname = ['"WOW Just WOW"', "cool"];
    const test = ["Not only did they ask me for creative input every step of the way but I also got to learn about Cinematoghraphy from their amazing crew!", "test"];
    for (let i = 0; i < test.length; i++) {
        document.getElementById("testimonialname").innerHTML = testname[i];
        document.getElementById("testimonial").innerHTML = test[i];
    };
};