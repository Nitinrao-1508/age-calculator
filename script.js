// const output_year = document.queryselector(".output1");
// const output_month = document.queryselector(".output2");
// const output_day = document.queryselector(".output3");
// const btn = document.queryselector(".btn");

// let isvalid = false;
// const input_year = document.queryselector("#year");
// const input_month = document.queryselector("#month");
// const input_day = document.queryselector("#day");
// // const btn = document.queryselector(".btn");


// const error_day = document.queryselector(".error-day");
// const error_month = document.queryselector(".error-month");
// const error_year = document.queryselector(".error-year");
// input_day.addeventlistner("input", (e) => {
//     if(+input_day.value > 31) {
//         error_day.textContent = "must be a valid date";
//         isvalid = false;
//         return;
//     } else {
//         isvalid = true;
//         error_day.textContent = '';
//     }
//     if(+input_day.value === 0) {
//         isvalid = false;
//     error_day.textContent = 'this field is required';
//     isvalid = false;
//     return;
//     } else {
//         error_day.textContent = '';
//     }
// });
// JavaScript code for Age Calculator App

// Get references to the input elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

// Get references to the output elements
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');

// Attach an event listener to the button
const button = document.querySelector('.btn');
button.addEventListener('click', calculateAge);

// Define the calculateAge function
function calculateAge() {
  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-day, .error-month, .error-year');
  errorMessages.forEach((errorMsg) => {
    errorMsg.textContent = '';
  });

  // Get the input values as integers
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  let hasErrors = false;

  // Check if any input field is empty or not a number
  if (isNaN(day) || day <= 0 || day > 31) {
    if (dayInput.value.trim() === '') {
      document.querySelector('.error-day').textContent = 'Field is required';
    } else {
      document.querySelector('.error-day').textContent = 'Must be a valid date';
    }
    hasErrors = true;
  }

  if (isNaN(month) || month <= 0 || month > 12) {
    if (monthInput.value.trim() === '') {
      document.querySelector('.error-month').textContent = 'Field is required';
    } else {
      document.querySelector('.error-month').textContent = 'Must be a valid date';
    }
    hasErrors = true;
  }

  if (isNaN(year) || year <= 0) {
    if (yearInput.value.trim() === '') {
      document.querySelector('.error-year').textContent = 'Field is required';
    } else {
      document.querySelector('.error-year').textContent = 'Must be a valid date';
    }
    hasErrors = true;
  }

  if (hasErrors) {
    return;
  }

  // Perform the age calculation (you can use a library like moment.js for more precise calculations)
  // For simplicity, we assume the current date is 2023-08-02
  const currentDate = new Date(2023, 7, 2);
  const inputDate = new Date(year, month - 1, day);

  // Check if the input date is in the future
  if (currentDate < inputDate) {
    document.querySelector('.error-year').textContent = 'Birth year can\'t be in the future';
    return;
  }

  // Calculate the difference in years, months, and days
  const ageInMilliseconds = currentDate - inputDate;
  const ageDate = new Date(ageInMilliseconds);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  // Update the output elements with the calculated age values
  output1.textContent = years;
  output2.textContent = months;
  output3.textContent = days;
}