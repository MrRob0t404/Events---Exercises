var body = document.querySelector("body")

//fix below 
document.addEventListener("click", function (event) {
    event.preventDefault();
    var x = event.clientX;
    var w = body.innerWidth;
    var h = body.innerHeight;

    if (event.clientX < window.innerWidth / 2) {
        body.style.backgroundColor = "mediumaquamarine";
    } else {
        body.style.backgroundColor = "peachpuff";
    }
});