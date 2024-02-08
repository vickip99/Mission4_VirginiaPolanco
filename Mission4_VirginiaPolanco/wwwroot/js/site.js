let resultValue = null; 
function checkNumber(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the input field
    let fHours = parseFloat($("#hoursWanted").val());
    let iFixedCost = parseInt($("#fixedCost").val());
    $("#message").text("");

    // Check if the number is less than 0
    if (fHours < 0)
    {
        // Clear the input field & display error message
        $("#hoursWanted").val("");
        $("#message").text("The number of hours needs to be greater than 0");
        $("#outputBox").hide(); 

    }
    else
    {
        resultValue = fHours * iFixedCost;

        if (resultValue > 0) {
            // Update the output box with the result
            $("#result").text(resultValue);
            $("#outputBox").show();
        }
        else
        {
            $("#outputBox").hide(); 
        }
    }
}

$("#button").click(checkNumber);

