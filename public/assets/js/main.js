$(document).ready(function () {
    $.ajax({
        url: "assets/data/content.json",
        success: function (result) {
            console.log(result); // Checking if it is working

            // Calling array
            $('#overviewcards .col-12').each(function (index) {
                console.log('dataCards:', index); // Debugging line

                // Safeguard against undefined index
                // Update the title
                $(this).find('.card-title').text(result.dataCards[index].cardTitle);

                // Update the number
                $(this).find('.card-number').text(result.dataCards[index].cardNumber);
            })


        },
    });


    $.ajax({
        url: "assets/data/content.json",
        success: function (result) {
            console.log(result); // Checking if it is working

            // Calling array
            $('#middlerow .row').each(function (index) {
                console.log('graphCards:', index); // Debugging line

                // Safeguard against undefined index
                // Update the title
                $(this).find('.graph-title').text(result.graphCards[index].graphTitle);

                // Update the number
                $(this).find('.graph-number').text(result.graphCards[index].graphNumber);
            })
        },
    });
});
