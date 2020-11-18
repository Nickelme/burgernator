// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-btn").on("click", function(event) {
        var id = $(this).data("id");

        var devouredData = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredData
        }).then(
            function() {
                console.log("Burger Devoured");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});