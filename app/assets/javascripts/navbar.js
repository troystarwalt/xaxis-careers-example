$(document).ready(function (){
  $(window).on('load', function(){
    setNavbarShadow();
  });


  $(window).on('scroll',function(){
    setNavbarShadow();
    $('.dropdown').css('opacity', '.975');
  });
});

function setNavbarShadow(){
  var distanceToScroll = $('.jumbotron').outerHeight()-15;
  if($(window).scrollTop() >= distanceToScroll){
    $('nav').addClass('navbar-shadowed');
  }else{
    $('nav').removeClass('navbar-shadowed');
  }
}
