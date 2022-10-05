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
     $.getJSON("team.json", function(data) {
        $.each(data, function(i, field){
            let teamName = $("<h2></h2>").text(field.name);
            let teamPost = $("<h5></h5>").text(field.position);
            let teamBio = $("<p></p>").text(field.bio);

            $("div#team").append(teamName + "<br>");
            $("div#team").append(teamPost + "<br>");
            $("div#team").append(teamBio + "<br><br>");
        });
     });
}

