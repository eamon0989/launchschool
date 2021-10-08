async function getList() {
  let dates = await fetch('/api/bookings').then(res => res.json());
  let ul = document.getElementById('list');
  dates.forEach(date => appendLi(date, ul))
}

getList();

function appendDetailsToLi(target) {
  fetch(`/api/bookings/${target.textContent}`)
    .then(res => res.json())
    .then(json => {
      json.forEach(details => {
        let ul2 = document.createElement('ul');
        target.appendChild(ul2);
        appendLi(details.join(' | '), ul2)
      })
  });
}

function appendLi(liText, ul) {
  let li = document.createElement('li');
  li.textContent = liText;
  ul.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
  let ul = document.getElementById('list');

  ul.addEventListener('click', e => {
    let target = e.target;
    if (target.tagName === 'LI') appendDetailsToLi(target);
  })
})
