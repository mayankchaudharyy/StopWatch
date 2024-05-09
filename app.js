let [ms, s, min, h] = [0, 0, 0, 0];
let which = "stop";

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let inp = document.getElementById("input");
let dt = null;

start.addEventListener('click', startFunc);
stop.addEventListener('click', stopFunc);
reset.addEventListener('click', resetFunc);

function startFunc(){
    start.classList.add("hidden");
    stop.classList.remove("hidden");
    if(dt !== null){
        clearInterval(dt);
    }
    dt = setInterval(inc, 100);
}

function stopFunc(){
    stop.classList.add("hidden");
    start.classList.remove("hidden");
    clearInterval(dt);
}

function resetFunc(){
    inp.innerHTML = "00 : 00 : 00 : 00";
    [ms,s,min,h]=[0,0,0,0];
    clearInterval(dt);
    stopFunc();
}

function inc(){
    ms += 10;
    if(ms === 100){
        ms = 0;
        s += 1;
        if(s === 60){
            s = 0;
            min += 1;
            if(min === 60){
                min = 0;
                h += 1;
            }
        }
    }
    h = (h>9)?h:'0'+h;
    min = (min>9)?min:'0'+min;
    s = (s>9)?s:'0'+s;
    ms = (ms < 10) ? "0" + ms : ms;
    // ms = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    inp.innerText = `${h} : ${min} : ${s} : ${ms}`;
    h = Number(h);
    min = Number(min);
    s = Number(s);
    ms = Number(ms);
}