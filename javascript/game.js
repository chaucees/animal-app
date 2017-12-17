// Create Topics Variable
var topics = ["koala", "giraffe", "tasmanian devil", "cheetah", "kangaroo", "wombat", "elephant", "platypus"]

// Display Buttons
function renderButtons() {
    $(".animal-buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.attr("data-animal", topics[i]);
        a.addClass("button");
        a.text(topics[i]);
        $(".animal-buttons").append(a);
    }
}
$( document ).ready(function() {
    renderButtons();
});


// Function to display memes when button is clicked
$(document).on('click', '.button', function() {

    var animal = $(this).attr('data-animal');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=JLVs3oGYrrFoQ1FRuOKC5Pl31trTkWEr&limit=15";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $(".image-display");
            var rating = results[i].rating;
            var paragraph = $('<p>').text('Rating: ' + rating);

            var animalImage = $('<img>');
            animalImage.attr('src', results[i].images.fixed_height_still.url);
            animalImage.attr("data-still", results[i].images.fixed_height_still.url);
            animalImage.attr("data-animate", results[i].images.fixed_height.url);
            animalImage.attr("data-state", "still");
            animalImage.addClass("img-responsive cartoonGif");
            gifDiv.prepend(paragraph);
            gifDiv.prepend(animalImage);

            $('.image-display').prepend(gifDiv);

        }

    });

// Animal Search and Submit
$('#add-animal').on("click", function(event) {
event.preventDefault();
var userInput = $("#animal-input").val().trim();

topics.push(userInput);

renderButtons();
});


});