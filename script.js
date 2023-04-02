function setDate() {
    //to get current number of seconds
    const now = new Date();
    const seconds = now.getSeconds();
    //to turn the number of seconds into base 100
}

setInterval(setDate, 1000);