$(document).ready(function(){
  $("a[href^='#'][class^='js-smooth-scroll']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){
      window.location.hash = hash;
     });
   });
});
