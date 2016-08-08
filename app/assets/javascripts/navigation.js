$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });

  $('html').click(function() {
    if ($('#search-container').is(':visible')) {
      $('#search-container').hide();
    }
  });

  $('#search-container').click(function(event){
    event.stopPropagation();
  });

  $('#search-button').click(function(event){
    $('#search-container').toggle();
    event.stopPropagation();
  });
});
