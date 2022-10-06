// WEB303 Assignment 3
// Name: Michael MacNeill
// Student Number #: 0237866
// Date: Wed, OCt. 5th, 2022

//Document Loading
$(document).ready(function() {
    jQueryGetJSON();
});

//Functions

function jQueryGetJSON() {
    $.getJSON("team.json").done(function (data) {
      $.each(data, function (i, value) {
        $("div#team").append("<h2> Name: " + value.name + "</h2>");
        $("div#team").append("<h5> Name: " + value.position + "</h5>");
        $("div#team").append("<p> Name: " + value.bio + "</p>");
      });
    });
  }
  
  function jQueryAjax() {
    $.ajax({
      url: "team.json",
      beforeSend: function () {
        $("div#team").append("<h1>loading...</h1>").delay(5000);
      },
  
      success: function (data) {
        $("#team h1").remove();
  
        $.each(data, function (i, value) {
          $("div#team").append("<h2> Name: " + value.name + "</h2>");
          $("div#team").append("<h5> Name: " + value.position + "</h5>");
          $("div#team").append("<p> Name: " + value.bio + "</p>");
        });
      }
    });
  }