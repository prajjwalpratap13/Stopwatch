let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let getSecond=document.querySelector(".second");
let getTens=document.querySelector(".tens");
let getMinutes=document.querySelector(".minute");

let second= 0;
let tens= 0;
let minutes=0;
let interval;

start.addEventListener("click",()=>{
    interval=setInterval(timer,10)
})

function timer(){
    tens++;
    if(tens<=9){
        getTens.innerText="0"+tens;
    }
    else if(tens>9 && tens<100){
        getTens.innerText=tens;
    }
    else if(tens==100){
        tens=0;
        getTens.innerText="0"+tens;
        second++;
        if(second<=9){
            getSecond.innerText="0"+second;
        }
        else if(second>9 && second<60){
            getSecond.innerText=second;
        }
        else if(second>59){
            minutes++;
            second=0;
            if(minutes<=9){
                getMinutes.innerText="0"+minutes;
                getSecond.innerText="0"+second;
            }
            else if(minutes>9){
                getMinutes.innerText=minutes;
                getSecond.innerText="0"+second;
            }
        }
    }
}

stop.addEventListener("click",()=>{
    clearInterval(interval);
})

reset.addEventListener("click",()=>{
    tens=0;
    second=0;
    minutes=0;
    getTens.innerText="0"+tens;
    getSecond.innerText="0"+second;
    getMinutes.innerText="0"+minutes;
    clearInterval(interval);
})