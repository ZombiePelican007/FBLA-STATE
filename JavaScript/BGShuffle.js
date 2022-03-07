function bgshuffle() {
    Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("test").innerHTML = "url(landscape" + Math.random() + ")";
}