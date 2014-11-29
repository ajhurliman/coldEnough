$(document).ready(function() {
  $.ajax({
    url: "http://api.wunderground.com/api/7c72c8180ca33938/conditions/q/autoip.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      console.dir(parsed_json);
      var temp_f = parsed_json['current_observation']['temp_f'];
      var output = $('#out');
      if (temp_f < 45 && temp_f >= 20) {
        output.html("Yep, throw that shit outside");
      } else if (temp_f < 20) {
        output.html("Nah, shit's too cold man");
      } else {
        output.html("Nope");
      }
    }
  });
});

