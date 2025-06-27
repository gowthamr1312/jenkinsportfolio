<<<<<<< HEAD
var API_ENDPOINT = "https://71gaj43a5l.execute-api.ap-south-1.amazonaws.com/prod";

fetch("https://zcrjgg8oag.execute-api.ap-south-1.amazonaws.com/Dev")
  .then(res => console.log("Visit logged"))
  .catch(err => console.error("Error logging visit", err));

=======
// Add your API endpoint here
var API_ENDPOINT = "https://71gaj43a5l.execute-api.ap-south-1.amazonaws.com/prod";

<<<<<<< HEAD
>>>>>>> e921582 (Initial commit)
=======
fetch("arn:aws:apigateway:ap-south-1::/apis/144wdle48b/routes/6sxta8k")
  .then(res => console.log("Visit logged"))
  .catch(err => console.error("Error logging visit", err));

>>>>>>> f7a79d3 (Initial commit 2)
// AJAX POST request to save student data
document.getElementById("savevisitor").onclick = function(){
    var inputData = {
        "name": $('#name').val(),
        "email": $('#email').val(),
        "subject": $('#subject').val(),
        "message": $('#message').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("visitorSaved").innerHTML = "visitor Data Saved!";
        },
        error: function () {
            alert("Error saving visitor data.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getvisitors").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#visitorTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#visitorTable").append("<tr> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['email'] + "</td> \
                    <td>" + data['subject'] + "</td> \
                    <td>" + data['message'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving visitor data.");
        }
    });
}
