// set audio for alaram-------------------------- 

const alaramList = []; // make an array for store all the alaram being set

const audio = new Audio('audio/Desires.mp3')

function ringing(now) {
    audio.play();
    console.log(`Hey it is ${now}`);
}



// creating logic for clock--------------------
let clocknav = document.getElementById('clock');
let alaramnav = document.getElementById('alaram');
let stopwatchnav = document.getElementById('stopwatch');

let clocksection = document.getElementById('clocksection')
let alaramsection = document.getElementById('alaramsection')

clocknav.addEventListener('click', () => {
    clocksection.style.display = 'flex'
    alaramsection.style.display = 'none'
})
alaramnav.addEventListener('click', () => {
    clocksection.style.display = 'none'
    alaramsection.style.display = 'block'
})



// for display time on web page---------------------
function displayTime() {
    let date = new Date();
    let gethours = formatTime(date.getHours());
    let getmin = formatTime(date.getMinutes());
    let getsecond = formatTime(date.getSeconds());
    let sessions = document.getElementById('sessions');

    const now = `${gethours}:${getmin}:${getsecond}`

    if (alaramList.includes(now)) {
        ringing(now);
    }

    if (gethours >= 12) {
        sessions.innerHTML = "PM"
    } else {
        sessions.innerHTML = "AM"
    }

    let hours = document.getElementById('hours').innerHTML = gethours;
    let minutes = document.getElementById('minutes').innerHTML = getmin;
    let seconds = document.getElementById('seconds').innerHTML = getsecond;
}
setInterval(displayTime, 1000)


// set the correct format of time
// converts "1:2:3" to "01:02:03"
function formatTime(time) {
    if (time < 10 && time.length != 2) {
        return '0' + time;
    }
    return time;
}


// Adds newAlarm to the unordered list as a new list item on webpage
let newalaramlist = document.getElementById('mylist');

function displaynewalaram(alaramtime){
    let html = `<li class = "time-list flex flex-row justify-center bg-gray-900 items-center h-[4rem] w-[400px] my-3 rounded-2xl">        
    <span class="time w-[160px] text-xl text-white">${alaramtime}</span>
    <button class="deleteAlarm time-control bg-gray-600 hover:bg-gray-800 px-[35px] py-[8px] text-white mx-12 rounded-xl" id="delete-button">Delete</button>       
    </li>`
    newalaramlist.innerHTML += html;
}


let setalarambtn = document.getElementById('setalaram'); 

// creating an alaram logic------------------
setalarambtn.addEventListener('click', () => {
let alaramhour = formatTime(document.getElementById('alaram-hour').value);
let alarammin = formatTime(document.getElementById('alaram-minutes').value);
let alaramsec = formatTime(document.getElementById('alaram-second').value);


const alaramtime = `${alaramhour}:${alarammin}:${alaramsec}`

    console.log(`confirm your time: ${ displaynewalaram(alaramtime) }`);
    displaynewalaram(alaramtime);
})

//----creating a logic for audio whenever Stop Alaram btn triggered
let stopalarambtn = document.getElementById('stopalaram'); 

stopalarambtn.addEventListener('click', () => {
    // alaramhour.value = "";
    audio.pause();
})
