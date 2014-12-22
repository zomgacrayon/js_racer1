$(document).ready(function() {
  $(document).on('keyup', function(event) {
    var key = event.which;
    if (key == 81) { //press Q
      $("#player1_strip td.active").next().addClass("active");
    }
    else if (key == 80) { //press P
      $("#player2_strip td.active").next().addClass("active");
    }
    $("td.active").prev().removeClass("active");

    if ($("#player1_strip td").last().hasClass("active") || $("#player2_strip td").last().hasClass("active")) {
      alert("Game has ended");
    }
  // Detect which key was pressed and call the appropriate function
  // Google "jquery keyup what key was pressed" if you don't know how
  });

  $("#restart").click(function() {
    $("td.active").removeClass("active");
    $("#player1_strip td").first().addClass("active");
    $("#player2_strip td").first().addClass("active");
  });
});