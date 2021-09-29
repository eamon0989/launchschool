document.addEventListener('DOMContentLoaded', function() {
  let links = document.querySelectorAll('article a');

  let teamInfo = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
  Array.from(links).forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      let modal = document.createElement('div');
      modal.style.id = 'modal';

      // let thisLink = document.querySelector()
      console.log(this.dataset.name);
      console.log(this);
      let img = this.querySelector('img').cloneNode();
      let name = this.querySelector('img').getAttribute('alt');
      console.log(img);
      console.log(name);
      modal.appendChild(img);
      let h3 = document.createElement('h3');
      h3.textContent = name;
      modal.appendChild(h3);
      modal.appendChild(teamInfo);
      modal.style.display = 'block';
      link.appendChild(modal);
    })
  });
})