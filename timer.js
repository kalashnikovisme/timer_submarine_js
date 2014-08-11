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
  if((min == LIMIT) && (sec == LIMIT) && (hour != 0)) {
    hour = decrease_number_on_clock(hour);
    $("#hours").html(hour);
  }
}

function decrease_number_on_clock(number) {
  if (number <= 10) {
    return "0" + (number - 1);
  } else {
    return number - 1;
  }
}

function decrease(number) {
  if (number != 0) {
    return decrease_number_on_clock(number);
  } else {
    return LIMIT;
  }
}

function increase_number_on_clock(number) {
  number = parseInt(number);
  if (number <= 8) {
    return "0" + (number + 1);
  } else {
    return number + 1;
  }
}

function increase(number) {
  if (number != LIMIT) {
    return increase_number_on_clock(number);
  } else {
    return "00";
  }
}

function increase_hour() {
  var hour = increase_number_on_clock($("#hours").html());
  $("#hours").html(hour);
}

function decrease_hour() {
  var hour = $("#hours").html();
  if (hour != 0) {
    hour = decrease_number_on_clock(hour);
    $("#hours").html(hour);
  }
}

function increase_minute() {
  var minute = increase($("#minutes").html());
  $("#minutes").html(minute);
  if (minute == 0) {
    increase_hour();
  }
}

function decrease_minute() {
  var minute = $("#minutes").html();
  minute = decrease(minute);
  $("#minutes").html(minute);
  if (minute == LIMIT) {
    decrease_hour();
  }
}

function increase_second() {
  var second = increase($("#seconds").html());
  $("#seconds").html(second);
  if (second == 0) {
    increase_minute();
  }
}

function decrease_second() {
  var second = $("#seconds").html();
  second = decrease(second);
  $("#seconds").html(second);
  if (second == LIMIT) {
    decrease_minute();
  }
}
$(document).ready(function (){
  setInterval(decrease_time, 1000);
  $("#increase_hour").click(function (){
    increase_hour();
  });
  $("#decrease_hour").click(function (){
    decrease_hour();
  });
  $("#increase_minute").click(function (){
    increase_minute();
  });
  $("#decrease_minute").click(function (){
    decrease_minute();
  });
  $("#increase_second").click(function (){
    increase_second();
  });
  $("#decrease_second").click(function (){
    decrease_second();
  });
});

