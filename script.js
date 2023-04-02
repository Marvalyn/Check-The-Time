function setDate() {

    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    //to get current number of seconds
    const now = new Date();
    const seconds = now.getSeconds();
    //to turn the number of seconds into base 100
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //add the styling to the second hand 
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    console.log(hour);
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);