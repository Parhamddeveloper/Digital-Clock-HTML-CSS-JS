// Make Time
setInterval(ShowTime, 1000);
// ShowTimes
function ShowTime() {
    // Time Variables
    let Time = new Date();
    let Hour = Time.getHours();
    let Min = Time.getMinutes();
    let Sec = Time.getSeconds();
    let AM = document.querySelector(".AM");
    let PM = document.querySelector(".PM");
    let am_pm = "AM";

    // Setting time for 12 Hrs format
    if (Hour >= 12) {
        if (Hour > 12) Hour -= 12;
        PM.style.color = "red";
        AM.style.color = "";
    } 
    else if (Hour < 12) {
        // Hour = 12;
        AM.style.color = "red";
        PM.style.color = "";
    }

    Hour = Hour < 10 ? "0" + Hour : Hour;
    Min = Min < 10 ? "0" + Min : Min;
    Sec = Sec < 10 ? "0" + Sec : Sec;
    // Displaying the time
    let HourSpan = document.querySelector('.Hour');
    let MinSpan = document.querySelector('.Minute');
    let SecSpan = document.querySelector('.Second');
    HourSpan.textContent = Hour;
    MinSpan.textContent = Min;
    SecSpan.textContent = Sec;
    AM.innerHTML = am_pm
}

ShowTime();
