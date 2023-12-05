"use strict"


const h1 = document.querySelector("h1")
const buttonStart = document.querySelector(".start")
const buttonStop = document.querySelector(".stop")
const buttonReset = document.querySelector("#reset")

let hh = 0;
let mm = 0;
let ss = 0;
let cron
let time = 1000;

function start() {
    cron = setInterval(() => { timer(); }, time);


}
function stop() {
    clearInterval(cron);
}
function reset() {
    clearInterval(cron)
    hh = 0;
    mm = 0;
    ss = 0;
    h1.innerText = '00:00:00'
}
function timer() {


    ss++;

    if (ss == 60) {
        ss = 0
        mm++

    } if (mm == 60) {
        mm == 0
        hh++
    }
    let format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);

    h1.innerHTML = format
}

buttonStart.addEventListener("click", start)
buttonStop.addEventListener("click", stop)
buttonReset.addEventListener("click", reset)