/*
	WEB 303 Assignment 1 - jQuery
	Michael MacNeill
	0237866
	09-19-2022
*/

$( document ).ready(function(){
	$("input").change(function(){
		let $yearlySal = $('input#yearly-salary').val();
		let $percentSpent = $('input#percent').val();
		let moneySpent = ($yearlySal * $percentSpent / 100).toFixed(2);
		$("span#amount").text('$' + moneySpent)
	});
});