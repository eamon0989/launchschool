document.addEventListener('click', (event) => {
  let element = event.target;
  makeBold(element);
})

function makeBold(element) {
  element.classList.add('highlight');
}