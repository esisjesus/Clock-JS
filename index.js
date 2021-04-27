const secondHand = document.getElementById('sec');
const minHand = document.getElementById('mins');
const hourHand = document.getElementById('hour');
function setTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    const minsDegree = ((mins / 60)*360) + 90;
    const hoursDegree = ((hour / 12) * 360) +90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    minHand.style.transform = `rotate(${minsDegree}deg)`
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
}
setInterval(setTime, 1000);