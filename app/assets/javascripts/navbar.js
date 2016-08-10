$(document).ready(function (){
  setNavbarShadow();
  $(window).on('scroll',function(){
    setNavbarShadow();
  });

  $(window).on('scoll', function(){
    $('.dropdown-menu').css('opacity', '.8');
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
