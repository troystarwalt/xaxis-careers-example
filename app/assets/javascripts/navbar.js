$(document).ready(function (){
  setNavbarShadow();

  $(window).on('scroll',function(){
    setNavbarShadow();
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
