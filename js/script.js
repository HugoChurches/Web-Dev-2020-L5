console.log("OK, I'm hooked into the HTML");

//Trying Jquery
//Target submit form
$("#addGroceries").on('submit', function(eventPrevent){
    //Get grocery item from input box
    var text = $('.itemShop').val();

    //Target UL and append submitted grocery
    $('#groceries').append('<li class="box">' + text + '<button type="button" class="deleteItem">Delete</button>' + '<button type="button" class="checkItem">Check</button>' + '</li>');

    //Clear and refocus on input box
    $('.itemShop').val('');
    $('.itemShop').focus();

    //Prevent forwarding
    eventPrevent.preventDefault();
});

//Event delegation! Review
$('#groceries').on('click', 'li', function(){
    //Wait for button press and remove item if pressed
    if(event.target.classList == 'deleteItem'){
        $(this).remove();
    }
    //Wait for button press and remove style if pressed
    $('#groceries').on('click', 'li', function(){
        $(this).toggleClass('crossItem');
        }
)});

