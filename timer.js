const LIMIT = 59;

function decrease_time() {
  var sec = decrease($("#seconds").html());
  $("#seconds").html(sec);
  var min = $("#minutes").html();
  if (sec == LIMIT) {
    min = decrease(min);
    $("#minutes").html(min);
  }
  var hour = $("#hours").html();
  if((min == LIMIT) && (sec == LIMIT)) {
    hour = decrease_number_on_clocks(hour);
    $("#hours").html(hour);
  }
}

function decrease_number_on_clocks(number) {
  if (number <= 10) {
    return "0" + (number - 1);
  } else {
    return number - 1;
  }
}

function decrease(number) {
  if (number != 0) {
    return decrease_number_on_clocks(number);
  } else {
    return LIMIT;
  }
}

$(document).ready(function (){
  setInterval(decrease_time, 1000);
});
