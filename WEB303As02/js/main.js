// WEB303 Assignment 2
// Name: Michael MacNeill
// Student Number #: 0237866
// Date: Wed, Sept. 28th, 2022

//document loading
$(document).ready(function() {
    $('#prospect').click(function() {
        $("#content1").fadeIn(2000, loadProspect())
    });

    $('#convert').click(function() {
        $("#content1").fadeIn(2000, loadConvert())
    });

    $('#retain').click(function() {
        $("#content1").fadeIn(2000, loadRetain())
    });
});

//Functions Lists
function loadProspect() {
var xhr = new XMLHttpRequest;
xhr.open('GET', 'prospect.html');

xhr.onload = function() {
    if (xhr.status === 200) {
        let cont = document.getElementById("content1");
        cont.innerHTML = xhr.responseText;
    }
};
xhr.send();
}

function loadConvert() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'convert.html');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            let cont = document.getElementById("content1");
            cont.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function loadRetain() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'retain.html');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            let cont = document.getElementById("content1");
            cont.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}