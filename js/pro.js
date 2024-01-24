var ma5zen = [];
var colect;
var data;

function getData() {
    var nameInput = document.getElementById("name").value;
    var linkInput = document.getElementById("link").value;

    // Check if inputs are empty or contain only whitespace
    if (nameInput.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (linkInput.trim() === "") {
        alert("Please enter your LinkedIn profile URL.");
        return;
    }

    // Validate LinkedIn profile URL format (optional)
    if (!isValidURL(linkInput)) {
        alert("Please enter a valid LinkedIn profile URL.");
        return;
    }

    data = {
        jName: nameInput,
        jLink: linkInput,
    };
    clear();
    ma5zen.push(data);
    display();
}

function clear() {
    document.getElementById("name").value = null;
    document.getElementById("link").value = null;
}

function deleteEntry(index) {
    ma5zen.splice(index, 1); // Remove the entry at the given index
    display(); // Update the table after deletion
}

function visitLink(index) {
    // Open the link in a new tab
    var url = ma5zen[index].jLink;
    window.open(url, '_blank');
}

function display() {
    colect = "";
    for (var i = 0; i < ma5zen.length; i++) {
        colect += "<tr><td>" + (i + 1) + "</td>" +
            "<td>" + ma5zen[i].jName + "</td>" +
            "<td><button class='btn btn-primary' onclick='visitLink(" + i + ")'>Visit</button></td>" +
            "<td><button class='btn btn-danger' onclick='deleteEntry(" + i + ")'>Delete</button></td></tr>";
    }
    document.getElementById("tbody").innerHTML = colect;
}

function isValidURL(url) {
    // Basic URL validation using a regular expression
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
}
