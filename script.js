const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const currentDate = new Date();

const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthName = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(currentDate);

date.innerHTML = currentDate.getDate();
day.innerHTML = dayName[currentDate.getDay()];
month.innerHTML = monthName[currentDate.getMonth()];
year.innerHTML = currentDate.getFullYear();