var num = 0;
var counter = document.getElementById("num");
var saveEl = document.getElementById("save_num");
var resetEl = document.getElementById("save_num");

function increment() {
    num += 1;
    counter.innerText = num;
}

function decrement() {
    num -= 1;
    counter.innerText = num;
}

function save() {
    var saveStr = " - " + num;
    saveEl.textContent += saveStr;
    counter.textContent = num = 0;
}

function reset() {
    resetEl.innerText = "Previous entires:" + " ";
    counter.innerText = num = 0;
}

















































// var counter = document.getElementById("num");
// var saveEl = document.getElementById("save-el");
// var count = 0;

// function increment() {
//     count += 1;
//     counter.innerHTML = count;
// }

// function decrement() {
//     count -= 1;
//     document.getElementById("num").innerHTML = count;
// }

// function save() {
//     var saved = count + " - ";
//     saveEl.textContent += saved;
//     document.getElementById("counter").textContent = "0";

// }