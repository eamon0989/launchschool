document.addEventListener("DOMContentLoaded", () => {
  let inputs = document.querySelectorAll('input');
  let p = document.getElementById('form_errors');
  let form = document.querySelector('form');
  let firstName = document.getElementById('first_name');
  let lastName = document.getElementById('last_name');
  let creditCard = document.querySelectorAll('[name="credit_card"]');
  let telephone = document.getElementById('telephone');


  form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      p.textContent = 'Form cannot be submitted until errors are corrected.';
    }
  })

  inputs.forEach(input => {
    input.addEventListener('focus', e => {
      e.target.classList.remove('blur');
    })

    input.addEventListener('blur', e => {    
      if (e.target.checkValidity()) {
        e.target.classList.remove('blur');
        let span = e.target.nextElementSibling;
        if (span) span.textContent = '';
        if (form.checkValidity()) {
          p.textContent = '';
        }
      }
    })

    input.addEventListener('invalid', e => {
      e.target.classList.add('blur');
      if (e.target.id === 'password') {
        invalidPasswordText(e);
      } else {
        addInvalidText(e);
      }
    })
  })

  firstName.addEventListener('keydown', e => {
    if (e.key === "Shift" || e.key === "Tab") return;
    if (!/[a-zA-Z' ]/.test(e.key)) {
      e.preventDefault();
    }
  })

  lastName.addEventListener('keydown', e => {
    if (e.key === "Shift" || e.key === "Tab") return;
    if (!/[a-zA-Z' ]/.test(e.key)) {
      e.preventDefault();
    }
  })

  telephone.addEventListener('keydown', e => {
    if (e.key === "Shift" || e.key === "Tab") return;
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  })

  creditCard.forEach(ele => {
    ele.addEventListener('keydown', e => {
      if (e.key === "Shift" || e.key === "Tab") return;
      if (!/\d/.test(e.key)) {
        e.preventDefault();
      }
    })
  })

  
  Array.from(creditCard).slice(0, creditCard.length - 1)
    .forEach(card => {
      card.addEventListener('keyup', e => {
        let string = card.value;
        let next = card.nextElementSibling.nextElementSibling;
        if (string.length === 4) {
          next.focus();
        }
      })
    });
})

function addInvalidText(e) {
  let text = document.querySelector(`[for="${e.target.id}"]`)
    .textContent.trim().slice(0, -1);
  let span = e.target.nextElementSibling;

  if (e.target.value.trim() === '') {
    span.textContent = `${text} is a required field!`;     
  } else {
    span.textContent = `Please enter a valid ${text}.`;
  }
}

function invalidPasswordText(e) {
  let text = document.querySelector(`[for="${e.target.id}"]`)
  .textContent.trim().slice(0, -1);
  let span = e.target.nextElementSibling;

  if (e.target.value.trim() !== '') {
    span.textContent = `Password must be at least 10 characters long.`;
  } else {
    span.textContent = `Please enter a valid ${text}.`;
  }
}

/* 
if one of the form items is clicked, border turns green
if anywhere but the form input is clicked, the border is removed
  unless the input is invalid, then it turns red

*/


let cardInputFields = document.querySelectorAll('[name="credit_card"]');

Array.from(cardInputFields).slice(0, cardInputFields.length - 1)
  .forEach(card => {
    card.addEventListener('keyup', e => {
      let string = card.value;
      let next = card.nextElementSibling.nextElementSibling;
      if (string.length === 4) {
        next.focus();
      }
    })
  });