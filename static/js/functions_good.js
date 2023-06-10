// top book metadata table
// metadata baby
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    console.log(booksData);


const topBook = booksData[1]
// console.log(topBook)

function topBookTable(booksData) {
    let metadataElement = document.getElementById('sample-metadata');
    let metadataObject = topBook;
  // clear old info
    if (metadataObject) {
      metadataElement.innerHTML = '';
  // set up table
      let table = document.createElement('table');
      table.className = 'metadata-table';
      for (let key in metadataObject) {
        if (metadataObject.hasOwnProperty(key)) {
          let row = document.createElement('tr');
          let keyCell = document.createElement('td');
          let valueCell = document.createElement('td');
          keyCell.textContent = key;
          valueCell.textContent = metadataObject[key];
          row.appendChild(keyCell);
          row.appendChild(valueCell);
          table.appendChild(row);
        }
      }
      metadataElement.appendChild(table);
    } else {
      metadataElement.textContent = 'No metadata available for ID: ' + id;
    }
  }
  topBookTable(booksData);
  })





// top longest Imprints div = chart-imp
// having trouble showing the actual top ones
fetch('http://127.0.0.1:5000/api/v1.0/books') 
.then(response => response.json())
.then(bookData => {
  console.log(bookData);

const rankedImprints = bookData.reduce((acc, imprint) => {
if (imprint.imprint_name !== "imprint_name") {
    acc[imprint.imprint_name] = imprint.weeks_on_list;
  }
  return acc;
}, {});
const sortedRankedImprints = Object.fromEntries(
Object.entries(rankedImprints).sort((a, b) => b[1] - a[1])
);
console.log(sortedRankedImprints)


let imprintsLongest = Object.keys(sortedRankedImprints)
let imprintsLength = Object.values(sortedRankedImprints)



function rankedImprintsBar() {
let topImprintsLongest = imprintsLongest.slice(0,5)
let topImprintsLength = imprintsLength.slice(0,5)
console.log(topImprintsLongest)
let trace = {
  x: topImprintsLength,
  y: topImprintsLongest,
  type: 'bar',
  orientation: 'h',
  marker: {
    color: ['red', 'orange', 'yellow', 'green', 'blue'],
    line: {
      width: 1,
      color: 'black'
    }
}}
let layout = {
  title: 'Imprints by Weeks on List',
  bargap: 0.1,
  height: 400,
  yaxis: {
    automargin: true
  }
}
Plotly.newPlot('chart-imp', [trace], layout);
}
rankedImprintsBar();
})




// top longest publishers chart = chart-pub-group
// having trouble showing the actual top ones
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);

  let groupedPublishers = {};

  // Iterate over the dataset
  for (let data of booksData) {
    let publisherName = data.publisher_name;
    let weeksOnList = data.weeks_on_list;
  
    // Check if the publisher_name already exists in the groupedData object
    if (groupedPublishers[publisherName]) {
      groupedPublishers[publisherName] += weeksOnList;
    } else {
      groupedPublishers[publisherName] = weeksOnList;
    }
  }
  
  console.log(groupedPublishers);

// Convert the object into an array of { publisher_name, weeks_on_list } objects
let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
  publisher_name: publisherName,
  weeks_on_list: weeksOnList
}));

// Sort the array based on the weeks_on_list in descending order
groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// Select only the top 5 publishers
const topPublishers = groupedPublishersArray.slice(1, 6);

// Extract the publisher names and weeks on list data
const publishers = topPublishers.map(publisher => publisher.publisher_name);
const weeksOnList = topPublishers.map(publisher => publisher.weeks_on_list);

// Define the trace for the bar chart
const trace = {
  x: weeksOnList,
  y: publishers,
  type: 'bar',
  orientation: 'h',
  marker: {
    color: ['red', 'orange', 'yellow', 'green', 'blue'],
    line: {
      width: 1,
      color: 'black'
    }
  }
};

// Define the layout for the chart
const layout = {
  title: 'Top 5 Parent Publishers by Weeks on List',
  bargap: 0.1,
  height: 400,
  yaxis: {
    automargin: true
  }
};


// Render the chart
Plotly.newPlot('chart-pub-group', [trace], layout);
  })





// top longest imprints chart = chart-imp-group
// having trouble showing the actual top ones
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);

  let groupedImprints = {};

  // Iterate over the dataset
  for (let data of booksData) {
    let imprintName = data.imprint_name;
    let weeksOnList = data.weeks_on_list;
  
    // Check if the publisher_name already exists in the groupedData object
    if (groupedImprints[imprintName]) {
      groupedImprints[imprintName] += weeksOnList;
    } else {
      groupedImprints[imprintName] = weeksOnList;
    }
  }
  
  console.log(groupedImprints);

// Convert the object into an array of { publisher_name, weeks_on_list } objects
let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnList]) => ({
  imprint_name: imprintName,
  weeks_on_list: weeksOnList
}));

// Sort the array based on the weeks_on_list in descending order
groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// Select only the top 5 publishers
const topImprints = groupedImprintsArray.slice(1, 6);

// Extract the publisher names and weeks on list data
const imprints = topImprints.map(imprint => imprint.imprint_name);
const weeksOnList = topImprints.map(imprint => imprint.weeks_on_list);

// Define the trace for the bar chart
const trace = {
  x: weeksOnList,
  y: imprints,
  type: 'bar',
  orientation: 'h',
  marker: {
    color: ['red', 'orange', 'yellow', 'green', 'blue'],
    line: {
      width: 1,
      color: 'black'
    }
  }
};

// Define the layout for the chart
const layout = {
  title: 'Top 5 Imprint Publishers by Weeks on List',
  bargap: 0.1,
  height: 400,
  yaxis: {
    automargin: true
  }
};


// Render the chart
Plotly.newPlot('chart-imp-group', [trace], layout);
  })