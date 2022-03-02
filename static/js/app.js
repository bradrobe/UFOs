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