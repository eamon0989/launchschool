// async function getSchedules() {
//   let response = fetch('/api/schedules')
//     .then(res => res.json())
//     .then(json => {
//       console.log(json);
//       let available = json.reduce((obj, schedule) => {
//         if (!schedule.student_email) {
//           obj[schedule.staff_id] ? obj[schedule.staff_id] += 1 : obj[schedule.staff_id] = 1;
//         }
//         return obj;
//       }, {});

//       for (let prop in available) {
//         console.log(`staff ${prop}: ${available[prop]}`);
//       }
//     })
// }

// getSchedules();


function getSchedules() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.responseType = 'json';
  request.timeout = 7000;

  request.addEventListener('load', () => {
    let available = request.response.reduce((obj, schedule) => {
      obj[schedule.staff_id] ? obj[schedule.staff_id] += 1 : obj[schedule.staff_id] = 1;
      return obj;
    }, {});

    for (let prop in available) {
      console.log(`staff ${prop}: ${available[prop]}`);
    }
  })

  request.addEventListener('timeout', () => {
    console.log(`The request is taking longer than expected, please try again.`);
  })

  request.addEventListener('loadend', () => {
    console.log(`The request has been completed.`);
  })

  request.send();
}

getSchedules();