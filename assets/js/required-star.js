const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');


function addRedStar(inputElement, starId) {
  const starSpan = document.getElementById(starId);


  if (inputElement.required && inputElement.value.trim() === '') {
    starSpan.textContent = '*'; 
  } else {
    starSpan.textContent = ''; 
  }
}

firstName.addEventListener('input', function() {
  addRedStar(firstName, 'firstNameStar');
});

lastName.addEventListener('input', function() {
  addRedStar(lastName, 'lastNameStar');
});

const form = document.querySelector('#formSubmission');
form.addEventListener('submit', function(event) {

  addRedStar(firstName, 'firstNameStar');
  addRedStar(lastName, 'lastNameStar');

  if (firstName.value.trim() === '' || lastName.value.trim() === '') {
    event.preventDefault(); 
  }
});