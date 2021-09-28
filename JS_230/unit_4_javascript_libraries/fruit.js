$(function () {
  let $p = $("p");
  let OUTPUT = "Your favorite fruit is ";

  $("a").click(function (e) {
    e.preventDefault();
    let $event = $(this);
    $p.text(OUTPUT + $event.text());
  });

  $("form").submit(function (e) {
    e.preventDefault();
    let $input = $(this).find("input[type=text]");
    $p.text(OUTPUT + $input.val());
  });
});