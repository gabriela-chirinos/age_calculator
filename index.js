document.addEventListener("DOMContentLoaded", () => {
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const resultYear = document.querySelector(".resultSection > p:nth-child(1)  .number");
    const resultMonth = document.querySelector(".resultSection > p:nth-child(2)  .number");
    const resultDay = document.querySelector(".resultSection > p:nth-child(3)  .number");
    const circleButton = document.querySelector("button");


    
// EVENT LISTENER FOR BUTTON :

circleButton.addEventListener("click",() => {
const day = parseInt(dayInput.value);
const month = parseInt(monthInput.value);
const year = parseInt(yearInput.value);
 let isValid = true;



  // Reset previous error styles
  [dayInput, monthInput, yearInput].forEach((input) => input.classList.remove("error"));

  if (dayInput.classList.contains("error")) {
    dayInput.previousElementSibling.classList.add("errorLabel"); // Add a class to the label
  }


//Validate the input :

if(!day || !month || !year){
  [dayInput, monthInput, yearInput].forEach((input) => input.classList.add("error"));
    alert("All fields are required");
    isValid = false;
}
else if(month < 1 || month > 12){
  monthInput.classList.add("error");
    alert("Month must be between 1 & 12");
    isValid = false;
}else if(day < 1 || day > 31){
  dayInput.classList.add("error");
    alert("Please enter a valid day");
    isValid = false;
}else if(year < 1900 || year > new Date().getFullYear()){
  yearInput.classList.add("error");
    alert("Please enter a valid year");
    isValid = false;
}

if (!isValid) {
  return;
}




 //Get the date:

 const today = new Date();
 const currentDay = today.getDate();
 const currentMonth = today.getMonth() + 1;
 const currentYear = today.getFullYear();


//calculate Age 

let ageYears = currentYear -year;
let ageMonths = currentMonth - month;
let ageDays = currentDay - day;


  // Adjust if the day or month is negative
  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(currentYear, currentMonth - 1, 0).getDate(); // Days in the previous month
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

// Update the result section
resultYear.textContent = ageYears;
resultMonth.textContent = ageMonths;
resultDay.textContent = ageDays;






});



});