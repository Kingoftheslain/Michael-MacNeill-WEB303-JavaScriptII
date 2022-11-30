$(document).ready(function(){
    var countries = $.getJSON("countries.json", function (obj) {
        // adding countries to select list
        $.each(obj, function(key, value) {
            $("select").append(`
            <option value=${value.code}>${value.name}</option>
            `);
        });
    });
    var results = [];
 });