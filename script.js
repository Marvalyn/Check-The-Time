function setDate() {
    // selecting clock hands using the html classes
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

    // to get current number of minutes
    const mins = now.getMinutes();
    //to turn the number of minutes into base 100
    const minsDegrees = ((mins / 60) * 360) + 90;
    //add the styling to the minute hand 
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // get current number of hours
    const hour = now.getHours();
    //to turn the number of hours into base 100
    const hourDegrees = ((hour / 12) * 360) + 90;
    //add the styling to the hour hand 
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// add interval so setDate function runs every second
setInterval(setDate, 1000);