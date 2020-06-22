var plantContainer = document.getElementById("plant-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    //change address in case of relocation
    ourRequest.open('GET','http://localhost/ajaxstuff/cetvrti/medplants.json');
    ourRequest.onload = function() {

        if(ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            alert("We connected to the server, but it returned an error");
        }

    };

    ourRequest.onerror = function() {
        alert("Connection error");
    }

    ourRequest.send();

});

function renderHTML(data) {
    var htmlString = "";

    for(i = 0; i < data.length; i++) {
        htmlString += "<p><strong>" + data[i].name + ": </strong>" + data[i].description;
        htmlString += '</p>';

    }

    plantContainer.insertAdjacentHTML('beforeend', htmlString);
}