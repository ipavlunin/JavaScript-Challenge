// Data from data.js
var tableData = data;

// Table body variables
var ufoTable = d3.select("#ufo-table");
var ufoBody = ufoTable.select("tbody");

// tableData iteration and calling function for each item
tableData.forEach(ufo => {
    // creating rows for data
    var rowUfo = ufoBody.append('tr');
    // array objects itteration to pick values
    Object.entries(ufo).forEach(([key, value]) => {
        // creating data cells and adding values
        var entryUfo = rowUfo.append("td");
        entryUfo.text(value);
    });
});

// Creating listener
var button = d3.select("#filter-btn");
var form = d3.select("form");
button.on("click", runSearch);
form.on("submit", runSearch);

// Filtering table
function runSearch() {
    // Preventing HTML events
    d3.event.preventDefault();
    // Filtering inputs
    var inputType = d3.select("#datetime");
    var inputVal = inputType.property("value");
    var filterTable = tableData.filter(datapoint => datapoint.datetime === inputVal);
    console.log(filterTable);
    // Delete previous table data
    ufoBody.selectAll("tr").remove();
    // Looping in filtered data and update table
    filterTable.forEach(function (ufo) {
        var rowNew = ufoBody.append("tr");
        Object.entries(ufo).forEach(function ([key, value]) {
            var cellNew = rowNew.append("td");
            cellNew.text(value);
        });
    });
};