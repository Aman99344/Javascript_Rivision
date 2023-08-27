
const hourHand = document.querySelector(".hourHand")
const minuteHand = document.querySelector(".minuteHand")
const secondHand = document.querySelector(".secondHand")

let clock = function(){

    let currDate = new Date()

    let hour = currDate.getHours() % 12;
    let minute = currDate.getMinutes()
    let sec = currDate.getSeconds()

    hourHand.textContent = hour;
    minuteHand.textContent = minute;
    secondHand.textContent = sec;

}

setInterval(clock, 1000)


