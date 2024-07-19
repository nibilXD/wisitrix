// Set the date we're counting down to
var countDownDate = new Date("aug 15, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the time remaining
    var timeLeft = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "D " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);