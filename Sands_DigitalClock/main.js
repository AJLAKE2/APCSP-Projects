$(document).ready( function() {
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var day = currentTime.getDay();
        var date = currentTime.getDate();
        var month = currentTime.getMonth();
        var year = currentTime.getYear() + 1900;
        var meridiem = "AM";
        
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
       
 
        if (hours > 12) {
            hours = hours - 12;
            meridiem = " PM"
        }
        
        if (hours === 0) {
            hours = 12;
        }
        
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        
        var dayDiv = document.getElementById('day');
        var dateDiv = document.getElementById('date');
        var clockDiv = document.getElementById('clock');        
        
        dayDiv.innerText = days[day];
        dateDiv.innerText = months[month] + " " + date + ", " + year;
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
        
    }
    
    //This runs the displayTime function the first time
    displayTime();
    
     //This makes our clock tick by repeatedly running display Time function every second
    setInterval(displayTime, 1000);
});