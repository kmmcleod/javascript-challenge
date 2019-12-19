// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
function buildtable(data){
tbody.html("");
data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick(){
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildtable(filteredData)
}
    d3.selectAll("#filter-btn").on("click", handleClick);
    buildtable(tableData)