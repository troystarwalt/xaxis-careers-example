$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });
  $("#search-button").on("click", function () {
    $(".search-container").toggle();
  });
});
