$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });


  $(".clickable2").click(function() {
    $(".dolphin-showing").toggle();
    $(".dolphin-hidden").toggle();
  });
});