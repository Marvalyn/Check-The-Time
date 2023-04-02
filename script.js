function setDate() {

    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    
    //to get current number of seconds
    const now = new Date();
    const seconds = now.getSeconds();
    //to turn the number of seconds into base 100
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    secondHand.style.transform =`rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes();
    console.log(mins);
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
}

setInterval(setDate, 1000);