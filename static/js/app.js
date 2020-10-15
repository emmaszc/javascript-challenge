// from data.js
var tableData = data;

tableData.forEach(function(time) {
    var tr = d3.select("tbody").append("tr");
    tr.append("td").text(time.datetime);
    tr.append("td").text(time.city);
    tr.append("td").text(time.state);
    tr.append("td").text(time.country);
    tr.append("td").text(time.shape);
    tr.append("td").text(time.durationMinutes);
    tr.append("td").text(time.comments);
});

// Use D3 to select the Date Time input field and the Filter button
var inputField = d3.select("#datetime");
var button = d3.select("#filter-btn");
// On click of the button, call filterTable function
button.on("click", filterTable);
function filterTable() {
    // Clear Table Area
    tbody.html("");
    // Read in the value from the inputField
    filterDate = inputField.property("value");
    //Print filter date to console log
    console.log(filterDate)
    // if filterData input field is not blank, filter the original table to include
    // only sightings with dates that match the entered date.
    if(filterDate){
        filteredData = tableData.filter(sighting => sighting.datetime === filterDate)
    }
    else if (filterDate = " ") {
        filteredDate = tableData;
    }
    // Populate tbody with the filtered data
    filteredData.forEach(function(time) {
        var tr = d3.select("tbody").append("tr");
        tr.append("td").text(time.datetime);
        tr.append("td").text(time.city);
        tr.append("td").text(time.state);
        tr.append("td").text(time.country);
        tr.append("td").text(time.shape);
        tr.append("td").text(time.durationMinutes);
        tr.append("td").text(time.comments);
    });
}