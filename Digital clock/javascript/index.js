// creating logic for clock--------------------
let clocknav = document.getElementById('clock');
let alaramnav = document.getElementById('alaram');
let stopwatchnav = document.getElementById('stopwatch');

let clocksection = document.getElementById('clocksection')
let alaramsection = document.getElementById('alaramsection')
let stopwatchsection = document.getElementById('stopwatch-section')

clocknav.addEventListener('click', () => {
    clocksection.style.display = 'flex'
    alaramsection.style.display = 'none'
    stopwatchsection.style.display = 'none'
})
alaramnav.addEventListener('click', () => {
    alaramsection.style.display = 'block'
    clocksection.style.display = 'none'
    stopwatchsection.style.display = 'none'
})
stopwatchnav.addEventListener('click', () => {
    stopwatchsection.style.display = 'block'
    clocksection.style.display = 'none'
    alaramsection.style.display = 'none'
})




