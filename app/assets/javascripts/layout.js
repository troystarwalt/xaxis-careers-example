$(document).ready(function() {
  var maxHeights = function() {
    if ( $(window).width() <= 675 ) {
      var maxHeightW = $('.wide-img').height();
      var maxHeightV = $('.vertical-img').height();
      $('.tb-bottom').css({'height': maxHeightV/2});
      $('.tb-top').css({'height': maxHeightV/2});
    }
    else {
      $('.tb-bottom').css({'height': '50%'});
      $('.tb-top').css({'height': '50%'});
    }
  };
  $(window).load(function() {
    maxHeights();
  });
  $(window).resize(function() {
    maxHeights();
  });
});
