// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

let posts = [{
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p>',
  tags: ['Food', 'Cooking', 'Vegetables'],
}, 
{
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p>',
}];

Handlebars.registerPartial( // used on line 19 of index.html - >tag
  "tag", 
  "<strong>{{this}}</strong>"
)

let HTMLString = document.getElementById('post').innerHTML;
// console.log(HTMLString);
let postTemplate = Handlebars.compile(HTMLString);
// console.log(postTemplate);
// let html = postTemplate({posts: posts});
// console.log(html);
console.log({posts: posts});
$('body').append(postTemplate({ posts: posts }));

// Vanilla
// let body = document.querySelector('body');
// body.insertAdjacentHTML('beforeend', postTemplate(post))
