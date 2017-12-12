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

function renderButtons() {
    $(".animal-buttons").empty();
    for (var i = 0; i < animal.length; i++) {
        var a = $("<button>");
        a.text(movies[i]);
        $(".animal-buttons").append(a);
        
    }
}