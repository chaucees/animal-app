var topics = ["dog", "cat", "parrot", "giraffe", "cheetah", "goldfish", "bird", "kangaroo", "owl", "dolphin", "killer whale"]

function displayAnimal() {
    var animal = $(this).attr('.image-display');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=JLVs3oGYrrFoQ1FRuOKC5Pl31trTkWEr&limit=15";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        var animalDisplayDiv = $('.image-display').append(displayAnimal);


    })
}

// Display Animal Memes
function renderButtons() {
    $(".animal-buttons").empty();
    for (var i = 0; i < animal.length; i++) {
        var a = $("<button>");
        a.text(animal[i]);
        $(".animal-buttons").append(a);
        
    }
}


// Animal Search and Submit
$("#add-animal").on("click", function(event) {
event.preventDefault();
var animal = $("#animal-input").val().trim();
animal.push(animal);
renderButtons();
});

$(document).on("click", ".movie", displayAnimal);

renderButtons();