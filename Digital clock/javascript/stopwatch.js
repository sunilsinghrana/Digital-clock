let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerdisplay = document.getElementById('timerdisplay')
let int = null;

let pausetime = document.getElementById('pausetimer');
let starttime = document.getElementById('starttimer');
let resettime = document.getElementById('resettimer');

starttime.addEventListener('click', ()=>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimeonweb,10);
    console.log('start is clicked');
})

pausetime.addEventListener('click', ()=>{
    clearInterval(int);
    console.log('pause is clicked');
});

resettime.addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerdisplay.innerHTML = '00 : 00 : 00 : 000 ';
    console.log('reset is clicked');
});

function displayTimeonweb(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerdisplay.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}