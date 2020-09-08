import "./styles.css";

// getting the html 
const daysEL  = document.getElementById('days');
const hoursEL  = document.getElementById('hours');
const minsEL  = document.getElementById('mins');
const secondsEL  = document.getElementById('seconds');


const newYears = "1 Jan 2021";


function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  //Getting the number of seconds
  const totalSeconds = (newYearsDate - currentDate) / 1000
  
  //Getting the number of  days
  const days = Math.floor(totalSeconds /  3600 / 24);
  //Getting the number of hours
  const hours = Math.floor(totalSeconds / 3600 ) % 24;
  //Getting the number of minutes
  const minutes = Math.floor(totalSeconds / 60) % 60;

    //Getting the number of seconds
  const seconds = Math.floor(totalSeconds) % 60;
  
  daysEL.innerHTML = days;
  hoursEL.innerHTML =  hours;
  minsEL.innerHTML = minutes;
  secondsEL.innerHTML = seconds;


  console.log(days, hours, minutes, seconds);

}
//call function
countdown()

setInterval(countdown, 1000)