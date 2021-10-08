/* 
Cancel schedule

DELETE /api/schedules/:schedule_id
Success: HTTP/1.1 204 No Content
Can't delete schedule if there is a booking, check if there is a 
  booking and delete that first

Cancel booking:
PUT /api/bookings/:booking_id
Success: HTTP/1.1 204 No Content


*/

async function cancelSchedule(scheduleId) {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', `/api/schedules/${scheduleId}`);
  xhr.addEventListener('load', e => {
    if (xhr.status === 204) {
      alert('Schedule canceled');
    } else if (xhr.status === 403) {
      alert(xhr.responseText);
    }
  })
  xhr.send();
}

async function cancelBooking(bookingId) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', `/api/bookings/${bookingId}`);
  xhr.addEventListener('load', e => {
    if (xhr.status === 204) {
      alert('Booking canceled');
    } else if (xhr.status === 404) {
      alert(xhr.responseText);
    }
  })
  xhr.send();
}

let sched = await fetch('/api/schedules').then(res => res.json());
