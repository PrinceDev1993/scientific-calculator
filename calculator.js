function clearScreen() {
    document.querySelector(".result").value = "";
}

function display(value) {
    document.querySelector(".result").value += value;
}

function calculate() {
    var p = document.querySelector(".result").value;
    var q = eval(p);
    document.querySelector(".result").value = q;
}

function square() {
    var p = document.querySelector(".result").value;
    document.querySelector(".result").value = p ** 2;
}

function sqroot() {
    var p = document.querySelector(".result").value;
    document.querySelector(".result").value = Math.sqrt(p);
}

function cubed() {
    var p = document.querySelector(".result").value;
    document.querySelector(".result").value = p ** 3;
}

function cubedroot() {
    var p = document.querySelector(".result").value;
    document.querySelector(".result").value = Math.cbrt(p);
}

function sin() {
    var p = document.querySelector(".result").value;
    document.querySelector(".result").value = Math.sin(p);
}