// Part1 - Data rendering and date search

// Data from data.js
var tableData = data;

// Table body variables
var ufoTable = d3.select("#ufo-table");
var ufoBody = ufoTable.select("tbody");
var oldInput = d3.select("input");

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
    var filterTab = [];
    // Preventing HTML events
    d3.event.preventDefault();
    // Filtering inputs
    var inputType = d3.select(".form-control");
    var inputVal = inputType.property("value");
    if (filterTab.length >= 1) {
        console.log('filtering filtered data');
        filterTab = filterTab.filter(datapoint => datapoint.datetime === inputVal);
    } else {
        console.log('new filter');
        filterTab = tableData.filter(datapoint => datapoint.datetime === inputVal);
    }
    console.log(filterTab);
    // Delete previous table data
    ufoBody.selectAll("tr").remove();
    // Looping in filtered data and update table
    filterTab.forEach(function (ufo) {
        var rowNew = ufoBody.append("tr");
        Object.entries(ufo).forEach(function ([key, value]) {
            var cellNew = rowNew.append("td");
            cellNew.text(value);
        });
    });
};

// Part2 - Drop-down filters

// Listener on drop-down filters
var selector = d3.select("#selFilter");
selector.on("change", selectFilter);

// SelectFilter function
function selectFilter() {
    var newFilter = selector.node().value;
    var listInput = d3.select(".list-group-item");
    var newInput = listInput.append('input');
    var oldInput = d3.select("input");
    var label = d3.select("label");
    switch (newFilter) {
        case "newFilter2":
            oldInput.remove();
            label.text("Enter City Name");
            newInput.attr("class", "form-control");
            newInput.attr("id", "city");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "City");
            break;
        case "newFilter3":
            oldInput.remove();
            label.text("Enter State Name");
            newInput.attr("class", "form-control");
            newInput.attr("id", "state");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "State");
            break;
        case "newFilter4":
            oldInput.remove();
            label.text("Enter Country Name");
            newInput.attr("class", "form-control");
            newInput.attr("id", "country");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "Country");
            break;
        case "newFilter5":
            oldInput.remove();
            label.text("Enter Shape");
            newInput.attr("class", "form-control");
            newInput.attr("id", "shape");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "Shape");
            break;
        default:
            oldInput.remove();
            label.text("Enter Date");
            newInput.attr("class", "form-control");
            newInput.attr("id", "datetime");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "mm/dd/yyyy");
            break;
    }
}

// Input tag ID
var button = d3.select("#filter-btn");
var form = d3.select("form");
// Listener for "Filter Table" button click action
button.on("click", runSearch);
// Listener for keyboard "ENTER"
form.on("submit", runSearch);

// RunSearch function to filter by selected criteria
var filterTab = [];
function runSearch() {
    var newId = d3.select("input").attr("id");
    d3.event.preventDefault();
    // Locating input tag by class
    var inputType = d3.select(".form-control");
    // Select entered input values
    var inputVal = inputType.property("value");
    var inputVal = inputVal.toLowerCase();
    // Filtering
    if (filterTab.length >= 1) {
        console.log('filtering filtered data');
        filterTab = filterTab.filter(datapoint => datapoint[newId] === inputVal);
    } else {
        console.log('new filter');
        filterTab = tableData.filter(datapoint => datapoint[newId] === inputVal);
    }
    // Log out filtered results to console
    console.log(filterTab);
    // Delete previous table data
    ufoBody.selectAll("tr").remove();
    // Filter and update
    filterTab.forEach(function (ufo) {
        var rowNew = ufoBody.append("tr");
        Object.entries(ufo).forEach(function ([key, value]) {
            var cellNew = rowNew.append("td");
            cellNew.text(value);
        });
    });
};

var resetButton = d3.select("#reset-btn");
resetButton.on("click", resetFilters);

function resetFilters() {
    location.reload();
}