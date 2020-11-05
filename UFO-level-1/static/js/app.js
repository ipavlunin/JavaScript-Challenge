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