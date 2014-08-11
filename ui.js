$(document).ready(function () {
  $("#buttons").hide();
  $("#timer").hover(
    function () {
      $("#buttons").show();
    },
    function () {
      $("#buttons").hide();
    });
});
