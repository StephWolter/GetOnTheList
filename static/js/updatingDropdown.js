


 // Initialize the charts with the initial data
function init(){

    fetch('http://127.0.0.1:5000/api/v1.0/books')  
    .then(response => response.json())
    .then(booksData => {
      // console.log(booksData);
    // limit by most recent list date
    const recentData = booksData.filter(entry => entry.published_date === "Sun, 21 May 2023 00:00:00 GMT");
  // make list of the unique list names    
    const uniqueListNames = [...new Set(recentData.map(obj => obj.list_name))];
  // console.log(uniqueListNames);

  // make dropdown list function
    function dropDownListMenu() {
    let dropdownLists = document.getElementById('selDataset');
  // make a loop adding each value to the dropdown
    for (let i = 0; i < uniqueListNames.length; i++) {
     let id = uniqueListNames[i];
     let dropdownOption = document.createElement('option');
      dropdownOption.value = id;
      dropdownOption.textContent = id;
      dropdownLists.append(dropdownOption);

  }
  }
    dropDownListMenu()
      })
      // set initial elements
      const dropdown = document.getElementById('dropdown');
      const listChoice = dropdown.value;
      const firstInstance = updateCharts(listChoice);
      rankedOverallPublisherBar(firstInstance);
      groupedOverallImprintBar(firstInstance);
      groupedOverallAuthorBar(firstInstance);
      combineCharts(firstInstance);

      listChoice.addEventListener('change', handleDropdownChange);

  }

function handleDropdownChange() {
  const selectedListName = this.value;
  const selectedData = dropDownListMenu(selectedListName);

  // Update the bar chart with the selected data
  updateBarChart('chart1', selectedData);
  }

function rankedOverallPublisherBar() {
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


function updateBarChart() {
  Plotly.update('chart-pub-group', { y: [[data.book_count]] });
}



  







// top longest imprints chart ACROSS ALL LISTS = chart-imp-group
// having trouble showing the actual top ones
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);
function groupedOverallImprintBar() {

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
groupedOverallImprintBar()
})











// top longest authors chart ACROSS ALL LISTS = chart-auth-group
// this is the same as the two charts above just merged together
fetch('http://127.0.0.1:5000/api/v1.0/books') 
.then(response => response.json())
.then(booksData => {
  // console.log(booksData);
function groupedOverallAuthorBar() {
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
groupedOverallAuthorBar()
})










// top longest publishers chart ACROSS ALL LISTS => 'chart-pub-group'
let tracePub, layoutPub, traceImp, layoutImp;


fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);

function rankedOverallPublisherBarCombo() {
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
  name: 'Top Parent Publishers Represented',
  orientation: 'h',
  marker: {
    color: 'Red',
    line: {
      width: 1,
      color: 'black'
    }
  }
};

// Define the layout for the chart
const layout = {
  title: 'Top Parent Publishers by Weeks on List',
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
tracePub = trace;
layoutPub = layout;
}
rankedOverallPublisherBarCombo()





// top longest imprints chart ACROSS ALL LISTS = chart-imp-group
// having trouble showing the actual top ones
    // console.log(booksData);
function groupedOverallImprintBarCombo() {

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
const topImprints = groupedImprintsArray.slice(2, 6);

// Extract the publisher names and weeks on list data
const imprints = topImprints.map(imprint => imprint.imprint_name);
const weeksOnList = topImprints.map(imprint => imprint.weeks_on_list);

// Define the trace for the bar chart
const trace = {
  x: weeksOnList,
  y: imprints,
  type: 'bar',
  name: 'Top Imprint Publishers Represented',
  orientation: 'h',
  marker: {
    color: 'Yellow',
    line: {
      width: 1,
      color: 'black'
    }
  }
};

// Define the layout for the chart
const layout = {
  title: 'Top Imprint Publishers by Weeks on List',
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
traceImp = trace;
layoutImp = layout;
}
groupedOverallImprintBarCombo()


function combineCharts() {
  const combinedData = [tracePub, traceImp];
  const combinedLayout = {
    title: 'Across All NYT Lists',
    bargap: 0.1,
    height: 400,
    yaxis: {
      automargin: true
    },
    font: {
      family: 'Trebuchet MS, sans-serif'
    }
  };

  // Render the combined chart
  Plotly.newPlot('chart-comb-group', combinedData, combinedLayout);
}

// Call the function to combine and render the charts
combineCharts();
})
