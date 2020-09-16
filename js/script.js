$(document).ready(function(){

  var sourceRow = $("#temp_row").html();
  var templateRow = Handlebars.compile(sourceRow);
  for (var i = 0; i < 6; i++) {
    var visualRow = templateRow();
    $(".container").append(visualRow);
  }

  var sourceSquare = $("#temp_square").html();
  var templateSquare = Handlebars.compile(sourceSquare);
  for (var i = 0; i < 6; i++) {
    var visualSquare = templateSquare();
    $(".row").append(visualSquare);
  }

  $(".square").click(
    function() {
      var endpoint = "https://flynn.boolean.careers/exercises/api/random/int";
      var squareColor = $(this);
      $.ajax(
        {
          "url" : endpoint,
          "method" : "GET",
          "success" : function (data, status) {
            var serverAnswer = data.response;
            squareColor.text(serverAnswer);
            randomNumberCheck(serverAnswer, squareColor);

          },
          "error" : function (request, status, errors) {
            alert("Errore!");
          }
        }
      );
  });

  function randomNumberCheck(servNumb, sqrThs) {
    if (servNumb > 5) {
      sqrThs.addClass("bgcolor_green");
    } else if (servNumb <= 5) {
      sqrThs.addClass("bgcolor_yellow");
    }
  }

});
