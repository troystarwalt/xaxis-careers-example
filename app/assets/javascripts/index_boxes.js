$('.locations-area, .regions-area, .departments-area').ready(function(){
  $(window).on('load', function(){
    setContainerHeights($('.location h2, .region h2, .department h2'));
  });
  $(window).on('resize', function(){
    setContainerHeights($('.location h2, .region h2, .department h2'));
  });

});

function setContainerHeights(elems){
  $(elems).outerHeight('');
  var heights = $(elems).map(function (){
    return $(this).outerHeight();
  }).get();
  var maxHeight = Math.max.apply(null, heights);
  $(elems).outerHeight(maxHeight);
}
