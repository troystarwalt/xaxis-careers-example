$('.jumbotron').ready(function(){
  $(window).on('load', function(){
    var scroll_ok = true;
    setInterval(function () {
      scroll_ok = true;
    }, 10);
    var initialBottom = $('.overlay-text').css('bottom');
    $(window).on('scroll', function () {
      if (scroll_ok === true) {
        scroll_ok = false;
        var wScroll = $(window).scrollTop();
        $(".overlay-text").css({
          'bottom': (parseFloat(initialBottom) + wScroll/5) + 'px',
          'opacity' : 1 - ( wScroll / 500 )
        });
      }
    });
  });
});
