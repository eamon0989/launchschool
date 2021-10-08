document.addEventListener('DOMContentLoaded', () => {
  let select = document.querySelector('select');
  
  
  async function addStaffNamesToSelect() {
    let request = new XMLHttpRequest();
    request.open('GET', 'api/staff_members');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
  
    request.addEventListener('load', () => {
      JSON.parse(request.response).forEach(obj => {
        let option = new Option(obj.name, obj.id);
        select.appendChild(option);
      })
    })
  }
  
  addStaffNamesToSelect();

  let addScheduleButton = document.getElementById('add');
  let submitButton = document.getElementById('submit');

  addScheduleButton.addEventListener('click', () => {
    let clone = document.querySelector('form').cloneNode(true);
    submitButton.parentElement.insertBefore(clone, submitButton);
  })

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let forms = document.querySelectorAll('form');
    let data = {
      schedules: []
    };

    [...forms].forEach(form => {
      let formData = new FormData(form);
      let json = {};
  
      for (let prop of formData) {
        json[prop[0]] = prop[1];
      }

      data.schedules.push(json);
    })


    let req = new XMLHttpRequest();
    req.open('POST', '/api/schedules');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(data));

    req.addEventListener('load', () => {
      if(req.status === 201) [...forms].forEach(form => form.reset());
      alert(req.responseText);
    })
  })
})
