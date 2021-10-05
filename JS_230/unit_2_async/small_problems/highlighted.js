document.addEventListener('DOMContentLoaded', e => {
  let highlighted;

  function toggleHighlight(element) {
    if (highlighted) highlighted.classList.remove('highlight');
      highlighted = element;
      highlighted.classList.add('highlight');
  }

  [...document.querySelectorAll('a')].forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();

      let id = e.target.href.slice(e.target.href.indexOf('#'));
      let article = document.querySelector(id);
      toggleHighlight(article);
    })
  });

  [...document.querySelectorAll('article')].forEach(element => {
    element.addEventListener('click', e => {
      e.stopPropagation();
    
      let article = e.currentTarget;
      toggleHighlight(article);
    })
  });

  document.addEventListener('click', () => {
    let main = document.querySelector('main');
    toggleHighlight(main);
  })
})