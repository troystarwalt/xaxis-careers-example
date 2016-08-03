

$(document).ready(function() {
  $(window).load(function() {
    var maxHeight = $('.vertical-img').height();
    $('.tb-top').css({'height': maxHeight/2})
  })
  $(window).resize(function() {
    var maxHeight = $('.vertical-img').height();
    $('.tb-top').css({'height': maxHeight/2})
  })
  $(window).load(function() {
    var maxHeight = $('.wide-img').height();
    $('.tb-bottom').css({'height': maxHeight/2})
  })
  $(window).resize(function() {
    var maxHeight = $('.wide-img').height();
    $('.tb-bottom').css({'height': maxHeight/2})
  })

});
