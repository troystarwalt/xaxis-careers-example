$('.mobility.timeline').ready(function(){
  var displayedTimeline = 0;
  var timelines = $('.cd-horizontal-timeline');
  $(timelines[0]).show();
  $('.timeline-picture-selector').on('click', function(){
    $('.timeline-picture-selector img').removeClass('active');
    $(this).find('img').addClass('active');
    var index = $('.timeline-picture-selector').index(this);
    $(timelines[displayedTimeline]).hide();
    $(timelines[index]).show();
    displayedTimeline = index;
  });
});
