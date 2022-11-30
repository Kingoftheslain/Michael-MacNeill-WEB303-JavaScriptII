$(document).ready(function(){
    $('#sbmt').prop('disabled', true);
    let password ;
    let password2 ;
    $("#pass").on("keyup", function(){
        password = $("#password").val();
    });
    $("#pass2").on("keyup", function(){
        password2 = $("#password2").val();
    });

    $('#check').click(function () {
        //check if checkbox is checked
        if ($(this).is(':checked') && password === password2) {

            $('#sbmt').prop('disabled', false); //enable input

        } else {
            $('#sbmt').prop('disabled', true); //disable input
        }
    });

    $('#sbmt').click(function (event) {
        event.preventDefault();
        var $inputs = $('form :input');
    
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
            console.log(values);
        });
        $("#welcomeText").append(`<p>Welcome ${values.username}! You selected the country code ${values.country}.</p>`);
    });
});