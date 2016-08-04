$(document).ready(function() {
  var maxHeights = function() {
    var maxHeightW = $('.wide-img').height();
    var maxHeightV = $('.vertical-img').height();
    $('.tb-bottom').css({'height': maxHeightW/2});
    $('.tb-top').css({'height': maxHeightV/2});
  };
  $(window).load(function() {
    maxHeights();
  });
  $(window).resize(function() {
    maxHeights();
  });
});
