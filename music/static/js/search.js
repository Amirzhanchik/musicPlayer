// search.js

var $ = jQuery.noConflict();

$(document).ready(function () {
    // Function to handle the search
    function handleSearch() {
        // Get the search input value
        var searchQuery = $('#searchInput').val().toLowerCase();

        // Loop through each song card
        $('.card').each(function () {
            var cardTitle = $(this).find('.card-title').text().toLowerCase();
            var artistName = $(this).find('.card-title').next().text().toLowerCase();

            // Check if the search query matches the card title or artist name
            if (cardTitle.includes(searchQuery) || artistName.includes(searchQuery)) {
                $(this).show(); // Show the card if there's a match
            } else {
                $(this).hide(); // Hide the card if there's no match
            }
        });

        // Show a message if no songs are found
        var noSongsMessage = $('#noSongsMessage');
        if ($('.card:visible').length === 0) {
            noSongsMessage.show();
        } else {
            noSongsMessage.hide();
        }
    }

    // Attach the handleSearch function to the form submission and input change events
    $('form').submit(function (e) {
        e.preventDefault();
        handleSearch();
    });

    $('#searchInput').on('input', function () {
        handleSearch();
    });
});
