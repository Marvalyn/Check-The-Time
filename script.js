function setDate() {

    const secondHand = document.querySelector('.second-hand');
    //to get current number of seconds
    const now = new Date();
    const seconds = now.getSeconds();
    //to turn the number of seconds into base 100
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    secondHand.style.transform =`rotate(${secondsDegrees}deg)`

   
}

setInterval(setDate, 1000);