var form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault(); //prevents page from reloading

    var input = document.getElementById("input").value;

    var reverse = input.split("").reverse().join("");

    document.querySelector("p").innerText = reverse;
});

