$(function(){
  var $sameContent = $('#content');
  console.log($sameContent);
  
  var $lis = $('li');
  console.log($lis.length);

  console.log($sameContent.jquery);
  console.log($lis.jquery);

  // var $p = $('p');

  // $p.parent().css('color', 'blue');

  var $p = $('p');

  $p.parent('.highlight').css('color', 'blue');

  $('#javascript').closest('ul').addClass('categories');

  // alert($('ul#navigation').find('li').length);  // Should be 4
  // alert($('#navigation').children().length);  // Should be 1

  // Find all list items after the CSS list item and hide them
  var $css = $('#css').closest('li');
  $css.nextAll().hide();

  // // Find all list items before the CSS list item and hide them
  // $css.prevAll().hide();

  // // Find all sibling lis and show them
  // $css.siblings().show();
});
