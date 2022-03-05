// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
// we declare "tbody" as variable, "d3.select" tells JavaScript to look for the <tbody> tags in the HTML.

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

// Original additon function
function addition(a, b) {
    return a + b;
}
// Converted function above to an arrow function
addition = (a, b) => a + b;

//Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}
// converted function above to an arrow function
doubleAddition = (c, d) => addition(c, d) * 2;


// Building a dynamic table with self-contained code, we will pass in "data" as the argument
// This is our first time working with the "data" we import from the first line of code, data from "data.js"
// We will use standard JavaScript "function" instead of "arrow function" because we will bu putting a function within a function.
function buildTable(data) {
    tbody.html("");
}


// CREATE A FOREACH:
// "data" is an object that references the data being imported.  // This new code chained a "for" loop to our data. 
// "forEach" the keywords to create a "for" loop in JavaScript.
// ((dataRow) is a parameter that will be used as a value when the function is called.  // We added an argument (datarow) that represent each row of data as we iterate through the array.
 
// Now create a variable that will append a row to the table body "tbody".  Using "let" becasue it is specific to this block of code.
//  The new "let" statement tells JavaScript to find the "tbody" tag w/in HTML & add a table row "tr".  Each "object" or "UFO" sighting will be wrapped in <tr> tag.
///data.forEach((dataRow) => {
///    let row = tbody.append("tr");
///});

// This code loops thru each field in the (dataRow) argument.  These fields will becaome tabl data, wrapped in <td> tags when appended to the HTML table.
// Starting w/"object.values" we're telling JavaScript to reference one object from the array of UFO sightings.
// Adding (dataRow) as the argument, we are saying we want the values to go into the dataRow.
// The "forEach((val)" specifies we want one object per row.

// The new "let" statement we are creating a variable to append data to a table.
// the "cell.text(val)" is the variable tha holds only each value from the object.

///Object.values(dataRow).forEach((val) => {
///    let cell = row.append("td");
///    cell.text(val);
///});

data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
});
// With the above function we have: Looped through each object in the array/  Appended a row to the HTML table/  Added each value from the objhect into a cell.

// ADD FILTERS:
// We are adding a date function, so we'll need to create a couple variables to hold our "date" data for filtered and unfiltered.

// In code below ".select()" will select the first elemt that matches our selector string "datetime".  The "select string"
// is what we are tellig D3.js to look for.

// The chaining of ".property("value");" to "d3.selet" we are telling D3 to not only look for where our date values are stored 
// on the webpage, but to grab that info and hold it in the "date" variable.

// we need to set a dfault filter and save it to new variable. The default filter will actually be the original table data
// which will allow users to refine their search on their own time. This is the "let filteredData = tableData;" line.

// Setting the filteredData variable to raw data, we are basically using a blank slate.  This function we are working on
// now will run each time the filter button is clicked on the website.  If no date has been entered as a filter all 
// the data will be returned instead.

function handleClick() {
   // Grab the datetime value from the filter
   let date = d3.select("#datetime").property("value");
   let filteredData = tableData;



//IF STATEMENTS:
// if-statement syntax:
//if ( check for condition ) { code to execute }
//pseudocode practice
///if (a date is entered) {
///    Filter the "default" data to show only the date intered
///};
//  Basically the above coe is asking JavaScript to check for a date.  If date is present we want it to return only
//  the data with that date.

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

// Code above, the line "row => row.datetime === date);" apples the filter to table data.  It is saying "Show only the rows
// where the date is equal to the date filter we created above."  The triple equal sign "===" is testing for equality,
// the date in table has to match our filter exactly!

//BUILD FILTERED TABLE

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// FINAL STEPS:
// Build the table when the page loads
//buildTable(tableData);