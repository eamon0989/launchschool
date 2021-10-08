/* 
Schedules:
populate a select bx with available schedules (name|data|time)
Allow student to enter email and submit
If student email does not exist, alert showing booking sequence, then
show a new form that allows a student to register

form:
email (auto populate)
name
booking sequence (auto populate)

After submiting, show alert
successfully added student to database
then booked


*/

(async function () {
  document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('schedule_form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      let formData = new FormData(form);
      let json = {};
      for (let prop of formData.entries()) {
        json[prop[0]] = prop[1];
      }
  
      let responsePromise = fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
      }).then(res => {
        let status = res.status;
        if (status === 404) {
          res.text().then(text => {
            alert(text);

            let bookingSequence = text.match(/\d{6}/gi);
            let newStudentForm = document.getElementById('new_student_form');
            newStudentForm.style.display = 'block';
    
            let bookingSequenceInput = document.getElementById('booking_sequence');
            bookingSequenceInput.value = bookingSequence?.[0];

            let emailInput = document.getElementById('student_email');
            emailInput.value = document.getElementById('email').value;
          })
        } else if (req.status === 204) {
              alert(`Booked`);
        }
      });

      // let responsePromise = createBooking(JSON.stringify(json));
      // responsePromise.then(res => console.log(res))
      // responsePromise.then(res => {
      //   console.log(res);
      //   console.log(res.status);
      // })
      // let req = new XMLHttpRequest();
      // req.open('POST', '/api/bookings');
      // req.setRequestHeader('Content-Type', 'application/json');
      // req.send(JSON.stringify(json));
  
      // req.addEventListener('load', () => {
      //   console.log(req.status);
      //   if (req.status === 404) {
      //     alert(req.response)
      //     let bookingSequence = req.responseText.match(/\d{6}/gi);
      //     new_student_form.style.display = 'block';
  
      //     let bookingSequenceInput = document.getElementById('booking_sequence');
      //     bookingSequenceInput.value = bookingSequence?.[0];
      //     let emailInput = document.getElementById('student_email');
      //     emailInput.value = document.getElementById('email').value;
      //   } else if (req.status === 204) {
      //     alert(`Booked`);
      //   }
  
      // })
    })
  
  })
})();



// async function createBooking(json) {
//   console.log(json);
//   return new Promise((resolve, reject) => {
//     return fetch('/api/bookings', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: json
//     })

    // fetch('/api/bookings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: json
    // }).then(response => response.status)
    // let req = new XMLHttpRequest();
    // req.open('POST', '/api/bookings');
    // req.setRequestHeader('Content-Type', 'application/json');
    // // req.onload = () => resolve(req.response);
    // req.send(JSON.stringify(json));
//   })
// }

async function getStaff() {
  return fetch('/api/staff_members', {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json())
}

async function getSchedules() {
  return fetch('/api/schedules', {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json())
}

const staff = await getStaff();
const schedules = await getSchedules();

const array = await Promise.all([staff, schedules]).then(_ => {
    let select = document.getElementById('schedule');

    let staffNames = {};
    staff.forEach(obj => staffNames[obj.id] = obj.name);

    schedules.forEach(schedule => {
      if (!schedule.student_email) {
        let id = schedule.staff_id;
        let text = `${staffNames[id]} | ${schedule.date} | ${schedule.time}`;
        let option = new Option(text, schedule.id);
        select.appendChild(option);
      }
    })
})
// /* 
// Schedules:
// populate a select bx with available schedules (name|data|time)
// Allow student to enter email and submit
// If student email does not exist, alert showing booking sequence, then
// show a new form that allows a student to register

// form:
// email (auto populate)
// name
// booking sequence (auto populate)

// After submiting, show alert
// successfully added student to database
// then booked


// */
// // async function getSchedules() {
// //   return await fetch('/api/schedules').then(res => res.json());
// // }

// // async function getStaff() {
// //   return await fetch('/api/staff_members').then(res => res.json());
// // }

// // let schedules = await getSchedules();
// // let staff = await getStaff();

// async function getStaff() {
//   return new Promise((resolve, request) => {
//     let staffReq = new XMLHttpRequest();
//     staffReq.open('GET', '/api/staff_members');
//     staffReq.responseType = 'json';
//     staffReq.send();
    
//     let staffNames = {};

//     staffReq.addEventListener('load', () => {
//       staffReq.response.forEach(obj => staffNames[obj.id] = obj.name);
//     });

//     return staffNames;
//   })
// }

// let promStaff = await getStaff();

// let staffReq = new XMLHttpRequest();
// staffReq.open('GET', '/api/staff_members');
// staffReq.responseType = 'json';
// staffReq.send();

// let xhr = new XMLHttpRequest();
// xhr.open('GET', '/api/schedules');
// xhr.responseType = 'json';
// xhr.send();

// document.addEventListener('DOMContentLoaded', () => {
//   let select = document.getElementById('schedule');

//   staffReq.addEventListener('load', () => {
//     let staffNames = {};
//     staffReq.response.forEach(obj => staffNames[obj.id] = obj.name);

//     xhr.addEventListener('load', () => {
//       let schedules = xhr.response;
  
//       schedules.forEach(schedule => {
//         if (!schedule.student_email) {
//           let id = schedule.staff_id;
//           let text = `${staffNames[id]} | ${schedule.date} | ${schedule.time}`;
//           let option = new Option(text, schedule.id);
//           select.appendChild(option);
//         }
//       })
//     })
//   })

//   let form = document.getElementById('schedule_form');

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // let req = sendScheduleFormData();

//     let formData = new FormData(form);

//     let req = new XMLHttpRequest();
//     req.open('POST', '/api/bookings');
//     req.setRequestHeader('Content-Type', 'application/json');

//     let json = {};
//     for (let prop of formData.entries()) {
//       json[prop[0]] = prop[1];
//     }

//     console.log(json);
//     req.send(JSON.stringify(json));

//     req.addEventListener('load', () => {
//       console.log(req.status);
//       if (req.status === 404) {
//         alert(req.response)
//         let bookingSequence = req.responseText.match(/\d{6}/gi);
//         new_student_form.style.display = 'block';

//         let bookingSequenceInput = document.getElementById('booking_sequence');
//         bookingSequenceInput.value = bookingSequence?.[0];
//         let emailInput = document.getElementById('student_email');
//         emailInput.value = document.getElementById('email').value;
//       } else if (req.status === 204) {
//         alert(`Booked`);
//       }

//     })
//   })

//   let newStudentForm = document.getElementById('new_student_form');
//   newStudentForm.addEventListener('submit', e => {
//     e.preventDefault();

//     let formData = new FormData(newStudentForm);

//     let req = new XMLHttpRequest();
//     req.open('POST', '/api/students');
//     req.setRequestHeader('Content-Type', 'application/json');

//     let json = {};
//     for (let prop of formData.entries()) {
//       json[prop[0]] = prop[1];
//     }

//     req.send(JSON.stringify(json));

//     req.addEventListener('load', () => {
//       alert(req.responseText)
//       if (req.status === 201) {
//         newStudentForm.reset();
//         let event = new Event('submit');
//         form.dispatchEvent(event);
//       }

//     })
//   })
// })
