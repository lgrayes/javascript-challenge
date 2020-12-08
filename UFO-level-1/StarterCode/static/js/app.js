
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Step 5: Use d3 to update each cell's text with ufo report values 
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter((viewing) => viewing.datetime === inputValue);

  filteredData.forEach(function(ufoReport) {
    var tbody = d3.select("tbody");

    console.log(filteredData);

    var row = tbody.append("tr")

    row.append("td").text(ufoReport.datetime)
    row.append("td").text(ufoReport.city)
    row.append("td").text(ufoReport.state)
    row.append("td").text(ufoReport.country)
    row.append("td").text(ufoReport.shape)
    row.append("td").text(ufoReport.durationMinutes)
    row.append("td").text(ufoReport.comments)
  });
}