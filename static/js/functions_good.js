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
      table.className = 'striped-table';
      table.style.fontFamily = 'Trebuchet MS, sans-serif';
      
      for (let key in metadataObject) {
        if (metadataObject.hasOwnProperty(key)) {
          let row = document.createElement('tr');
          let keyCell = document.createElement('td');
          let valueCell = document.createElement('td');
          let displayKey;
          switch (key) {
            case 'author_name':
              displayKey = 'Author:';
              break;
            case 'book_description':
              displayKey = 'Description:';
              break;
            case 'book_image':
              displayKey = 'Book Cover:';
              break;
            case 'book_title':
                displayKey = 'Title:'
                break;
            case 'imprint_name':
                displayKey = 'Imprint Publisher:'
                break;
            case 'list_name':
                displayKey = 'NYT List:'
                break;
            case 'publisher_name':
                displayKey = 'Parent Publisher:'
                break;
            case 'weeks_on_list':
                displayKey = 'Weeks On List:'
                break;
            default:
              displayKey = key;
              break;
          }

          keyCell.textContent = displayKey;
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

// top longest publishers chart = chart-pub-group
// having trouble showing the actual top ones
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);

function rankedPublisherBar() {
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
  },
  font: {
    family: 'Trebuchet MS, sans-serif' 
  }
};


// Render the chart
Plotly.newPlot('chart-pub-group', [trace], layout);
}
rankedPublisherBar()
  })





// top longest imprints chart = chart-imp-group
// having trouble showing the actual top ones
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);
function groupedImprintBar() {

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
  },
  font: {
    family: 'Trebuchet MS, sans-serif' 
  }
};


// Render the chart
Plotly.newPlot('chart-imp-group', [trace], layout);
}
groupedImprintBar()
})




// top longest authors chart = chart-auth-group
// this is the same as the two charts above just merged together
fetch('http://127.0.0.1:5000/api/v1.0/books') 
.then(response => response.json())
.then(booksData => {
  // console.log(booksData);
function groupedAuthorBar() {
let groupedAuthors = {};

// Iterate over the dataset
for (let data of booksData) {
  let authorName = data.author_name;
  let weeksOnList = data.weeks_on_list;

  // Check if the publisher_name already exists in the groupedData object
  if (groupedAuthors[authorName]) {
    groupedAuthors[authorName] += weeksOnList;
  } else {
    groupedAuthors[authorName] = weeksOnList;
  }
}

console.log(groupedAuthors);

// Convert the object into an array of { publisher_name, weeks_on_list } objects
let groupedAuthorsArray = Object.entries(groupedAuthors).map(([authorName, weeksOnList]) => ({
author_name: authorName,
weeks_on_list: weeksOnList
}));

// Sort the array based on the weeks_on_list in descending order
groupedAuthorsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// Select only the top 5 publishers
const topAuthors = groupedAuthorsArray.slice(1, 6);

// Extract the publisher names and weeks on list data
const authors = topAuthors.map(author => author.author_name);
const weeksOnList = topAuthors.map(author => author.weeks_on_list);

// Define the trace for the bar chart
const trace = {
x: weeksOnList,
y: authors,
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
title: 'Top 5 Authors by Weeks on List',
bargap: 0.1,
height: 400,
yaxis: {
  automargin: true
},
font: {
    family: 'Trebuchet MS, sans-serif' 
  }
};


// Render the chart
Plotly.newPlot('chart-auth-group', [trace], layout);
}
groupedAuthorBar()
})




// top longest publishers chart = chart-pub-group
// having trouble showing the actual top ones
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);
function groupedPubImpComp() {
  let groupedPublishers = {};
  let groupedImprints = {};

  // Iterate over the dataset
  for (let data of booksData) {
    let publisherName = data.publisher_name;
    let weeksOnListPub = data.weeks_on_list;
  
    // Check if the publisher_name already exists in the groupedData object
    if (groupedPublishers[publisherName]) {
      groupedPublishers[publisherName] += weeksOnListPub;
    } else {
      groupedPublishers[publisherName] = weeksOnListPub;
    }
  }
    // Iterate over the dataset
  for (let data of booksData) {
    let imprintName = data.imprint_name;
    let weeksOnListImp = data.weeks_on_list;
    
    // Check if the publisher_name already exists in the groupedData object
    if (groupedImprints[imprintName]) {
      groupedImprints[imprintName] += weeksOnListImp;
    } else {
      groupedImprints[imprintName] = weeksOnListImp;
    }
  }
  console.log(groupedPublishers);
  console.log(groupedImprints);

// Convert the object into an array of { publisher_name, weeks_on_list } objects
let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnListPub]) => ({
  publisher_name: publisherName,
  weeks_on_list: weeksOnListPub
}));
let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnListImp]) => ({
  imprint_name: imprintName,
  weeks_on_list: weeksOnListImp
}));

// Sort the array based on the weeks_on_list in descending order
groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);
groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// Select only the top 5 publishers
const topPublishers = groupedPublishersArray.slice(1, 6);
const topImprints = groupedImprintsArray.slice(1, 6);

// Extract the publisher names and weeks on list data
const publishers = topPublishers.map(publisher => publisher.publisher_name);
const weeksOnListPubs = topPublishers.map(publisher => publisher.weeks_on_list);
const imprints = topImprints.map(imprint => imprint.imprint_name);
const weeksOnListImps = topImprints.map(imprint => imprint.weeks_on_list);

// Define the trace for the bar chart
const trace1 = {
  x: weeksOnListPubs,
  y: publishers,
  type: 'bar',
  orientation: 'h',
  name: 'Top Publishers',
  marker: {
    color: ['red', 'orange', 'yellow', 'green', 'blue'],
    line: {
      width: 1,
      color: 'black'
    }
  }
};
const trace2 = {
  x: weeksOnListImps,
  y: imprints,
  type: 'bar',
  orientation: 'h',
  name: 'Top Imprints',
  marker: {
    color: ['Maroon', 'OrangeRed', 'Gold', 'ForestGreen', 'MidnightBlue'],
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

let pub_and_imp_ranked = [trace1,trace2]
// Render the chart
Plotly.newPlot('chart-comp-group', pub_and_imp_ranked, layout);
}
groupedPubImpComp()
  })