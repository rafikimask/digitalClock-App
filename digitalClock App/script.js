// Connecting the script to dom elements
const hourSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const amorpmSpan = document.getElementById("amorpm");

// Declaring the function for 'real-time'
function changeTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm;
    
    hourSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    
    if (hours >= 0 && hours <= 12) {
        amorpm = "AM"
    }   else {
        amorpm = "PM"
    }
    amorpmSpan.textContent = amorpm;
    

}

// Calling the function for real-time
changeTime()

// Now to breath life into our digital clock
setInterval(changeTime, 1000);