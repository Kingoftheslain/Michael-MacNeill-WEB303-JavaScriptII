/*
    Assignment 05
    Author Name: Michael MacNeill
    Student #: 0237866
    Date: Oct. 26th, 22
*/

$(document).ready(function () {
    // The Working Code for the Assignment
    class ContentItem {

        id;
        name;
        type;
        desc;

        constructor(id, name, type, desc){
            this.id = id;
            this.name = name;
            this.type = type;
            this.desc = desc;
        }

        updateContentInfo(id, name, type, desc){
            if(id === this.id && (name !== null)){
                this.id = id;
                this.name = name;
                this.type = type;
                this.desc = desc;

                document.getElementById("content-item-4").innerHTML = "<h2>" + this.name + "</h2>" +
                "<p>" + this.type + "</p>" +
                "<div>" + this.desc + "</div>"
            } 
            else {
                alert("There has been an error!");
            }
        }

        toString(id, name, type, desc) {
            return "<div class='itemContent' id='content-item-" + this.id + "'>" +
                   "<h2>" + this.name + "</h2>" +
                   "<p>" + this.type + "</p>" +
                   "<div>" + this.desc + "</div>" +
                   "</div>";
        }
    }

    let pharma = [
                    new ContentItem(1, 'Tylenol', 'Pill', 'Extra Strength Pain Relief'),
                    new ContentItem(2, 'Buckleys', 'Liquid', 'Cold and Cough Relief'),
                    new ContentItem(3, 'Alieve', 'Pill', 'Naproxen Muscle Relaxant'),
                    new ContentItem(4, 'Halls', 'Dissolvable', 'Cough Relief'),
                    new ContentItem(5, 'Traumeel', 'Paste', 'Pain Relief Cream'),
                 ];

    pharma.forEach(ContentItem => {
        $("#content-item-list").append(ContentItem.toString());
    });
    
    $(".itemContent").css({
                            'border': '1px solid black',
                            'margin': 'auto',
                            'margin-bottom': '5%',
                            'text-align': 'center'
                          });

    $('#updateInfo').on('click', function(){
        pharma[3].updateContentInfo(4, 'Halls', 'Lozenges', 'Cough Relief');
    });

    $('#failInfo').on('click', function(){
        pharma[3].updateContentInfo(30, 'Halls', 'Lozenges', 'Cough Relief');
    });
});


