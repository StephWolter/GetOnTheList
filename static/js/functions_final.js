// Define function for TOP BOOK
// Create metadata striped table in 'sample-metadata'
function topBookTable(topBook) {

  let metadataElement = document.getElementById('standalone-metadata');
  let metadataObject = topBook;
  delete metadataObject.book_image;
  const reorderedKeys = ['book_title', 'author_name', 'book_description',  'list_name', 'publisher_name', 'imprint_name','weeks_on_list'];

  // clear old info
  if (metadataObject) {
    metadataElement.innerHTML = '';
    // set up table
    let table = document.createElement('table1');
    table.className = 'striped-table1';
    table.style.fontFamily = 'Trebuchet MS, sans-serif';

    reorderedKeys.forEach(key => {
      if (metadataObject.hasOwnProperty(key)) {
        let row = document.createElement('tr');
        let keyCell = document.createElement('td');
        let valueCell = document.createElement('td');
        let displayKey;
        switch (key) {
          case 'book_title':
            displayKey = 'Title:';
            break;
          case 'author_name':
            displayKey = 'Author:';
            break;
          case 'book_description':
            displayKey = 'Description:';
            break;
          case 'list_name':
            displayKey = 'NYT List:';
            break;
          case 'publisher_name':
            displayKey = 'Parent Publisher:';
            break;
          case 'imprint_name':
            displayKey = 'Imprint Publisher:';
            break;
          case 'weeks_on_list':
            displayKey = 'Weeks On List:';
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
    });

    metadataElement.appendChild(table);
  } else {
    metadataElement.textContent = 'No metadata available for ID: ' + id;
  }
};

// Ranked publisher bar chart
function rankedPublisherBar(bookData) {
  let groupedPublishers = {};

  // Iterate over the dataset
  for (let data of bookData) {
    let publisherName = data.publisher_name;
    let weeksOnList = data.weeks_on_list;
  
    // Check if the publisher_name already exists in the groupedData object
    if (groupedPublishers[publisherName]) {
      groupedPublishers[publisherName] += weeksOnList;
    } else {
      groupedPublishers[publisherName] = weeksOnList;
    }
  };
  
  // console.log("LOGGING GROUPED PUBLISHERS");
  // console.log(groupedPublishers);

  // Convert the object into an array of { publisher_name, weeks_on_list } objects
  let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
    publisher_name: publisherName,
    weeks_on_list: weeksOnList
  }));

  // Sort the array based on the weeks_on_list in descending order
  groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);
  
  // Select only the top 5 publishers
  const topPublishers = groupedPublishersArray.slice(0, 5);
  
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
      color: 'purple',
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
  
  return [trace, layout];

};

// top longest imprints chart ACROSS ALL LISTS = chart-imp-group
function rankedImprintBar(bookData) {

  let groupedImprints = {};

  // Iterate over the dataset
  for (let data of bookData) {
    let imprintName = data.imprint_name;
    let weeksOnList = data.weeks_on_list;
  
    // Check if the publisher_name already exists in the groupedData object
    if (groupedImprints[imprintName]) {
      groupedImprints[imprintName] += weeksOnList;
    } else {
      groupedImprints[imprintName] = weeksOnList;
    }
  };
  
  // console.log("LOGGING GROUPED IMPRINTS");
  // console.log(groupedImprints);

  // Convert the object into an array of { publisher_name, weeks_on_list } objects
  let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnList]) => ({
    imprint_name: imprintName,
    weeks_on_list: weeksOnList
  }));

  // Sort the array based on the weeks_on_list in descending order
  groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);
  
  // Select only the top 5 publishers
  const topImprints = groupedImprintsArray.slice(0, 5);
  
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
      color: 'yellow',
      line: {
        width: 1,
        color: 'black'
      }
    }
  };
  
  // Define the layout for the chart
  const layout = {
    title: 'Top 5 Imprints by Weeks on List',
    bargap: 0.1,
    height: 400,
    yaxis: {
      automargin: true
    },
    font: {
      family: 'Trebuchet MS, sans-serif' 
    }
  };

  return [trace, layout];

};

// top longest authors chart ACROSS ALL LISTS = chart-auth-group
function rankedAuthorBar(bookData) {
  let groupedAuthors = {};
  
  // Iterate over the dataset
  for (let data of bookData) {
    let authorName = data.author_name;
    let weeksOnList = data.weeks_on_list;
  
    // Check if the publisher_name already exists in the groupedData object
    if (groupedAuthors[authorName]) {
      groupedAuthors[authorName] += weeksOnList;
    } else {
      groupedAuthors[authorName] = weeksOnList;
    }
  };
  
  // console.log("LOGGING GROUPED AUTHORS");
  // console.log(groupedAuthors);
  
  // Convert the object into an array of { publisher_name, weeks_on_list } objects
  let groupedAuthorsArray = Object.entries(groupedAuthors).map(([authorName, weeksOnList]) => ({
  author_name: authorName,
  weeks_on_list: weeksOnList
  }));
  
  // Sort the array based on the weeks_on_list in descending order
  groupedAuthorsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);
  
  // Select only the top 5 publishers
  const topAuthors = groupedAuthorsArray.slice(0, 5);
  
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
      color: ['purple', 'orange', 'yellow', 'green', 'blue'],
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
  
  return [trace, layout];

};


// Fetch all data
fetch('http://127.0.0.1:5000/api/v1.0/books')  
  .then(response => response.json())
  .then(booksData => {
    // console.log("LOGGING ALL DATA");
    // console.log(booksData);
    
    // On init, the selected list is series books and time period is most recent
    let selectedList = 'Series Books';
    const mrd = booksData[0].published_date;

    // Assign list names to a constant
    const uniqueListNames = [...new Set(booksData.map(obj => obj.list_name))];
    // console.log("LOGGING UNIQUE LIST NAMES")
    // console.log(uniqueListNames);

    
    // Assign recent series-book data to variable
    let selectedData = booksData.filter(entry => entry.published_date == mrd).filter(entry => entry.list_name == selectedList);
    // console.log("LOGGING MOST RECENT SERIES BOOK DATA");
    // console.log(selectedData);

    const recentData = booksData.filter(entry => entry.published_date == mrd);
    // // Assign top book to a constant
    // const topBook = booksData[0]

    // // Assign top non-series book to a constant
    // const standAloneBooksData = booksData.filter(item => item.list_name !== "Series Books");
    // const topBookStandAlone = standAloneBooksData[0]

    // Define a function to populate bestseller list dropdown menu
    function populateListMenu() {

      let element = document.getElementById('selectList');

      for (let i = 0; i < uniqueListNames.length - 9; i++) {
        let id = uniqueListNames[i];
        let dropdownOption = document.createElement('option');
        dropdownOption.value = id;
        dropdownOption.textContent = id;
        element.append(dropdownOption);
      };
    };

    // // Define a function to populate time period dropdown menu
    // function populateTimeMenu() {

    //   let element = document.getElementById('selectTimePeriod');

    //   let dropdownOption1 = document.createElement('option');
    //   dropdownOption1.value = 'most_recent';
    //   dropdownOption1.textContent = 'Most Recent';

    //   let dropdownOption2 = document.createElement('option');
    //   dropdownOption2.value = 'all_time';
    //   dropdownOption2.textContent = 'Past 5 Years';

    //   element.append(dropdownOption1);
    //   element.append(dropdownOption2);
     
    // };
      
    // Traces and layouts for longest publishers and imprints
    let tracePub, layoutPub, traceImp, layoutImp;

    // top longest publishers chart ACROSS ALL LISTS => 'chart-pub-group'
    function rankedOverallPublisherBarCombo() {
      let groupedPublishers = {};
    
      // Iterate over the dataset
      for (let data of recentData) {
        let publisherName = data.publisher_name;
        let weeksOnList = data.weeks_on_list;
      
        // Check if the publisher_name already exists in the groupedData object
        if (groupedPublishers[publisherName]) {
          groupedPublishers[publisherName] += weeksOnList;
        } else {
          groupedPublishers[publisherName] = weeksOnList;
        }
      }
      
      // console.log(groupedPublishers);
    
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
          color: 'purple',
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
        
      // Assign publisher trace and layout
      tracePub = trace;
      layoutPub = layout;

    };
    
    // top longest imprints chart ACROSS ALL LISTS = chart-imp-group
    function groupedOverallImprintBarCombo() {

      let groupedImprints = {};

      // Iterate over the dataset
      for (let data of recentData) {
        let imprintName = data.imprint_name;
        let weeksOnList = data.weeks_on_list;
      
        // Check if the publisher_name already exists in the groupedData object
        if (groupedImprints[imprintName]) {
          groupedImprints[imprintName] += weeksOnList;
        } else {
          groupedImprints[imprintName] = weeksOnList;
        }
      };  
    
      // console.log(groupedImprints);

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

      // Assign imprint trace and layout
      traceImp = trace;
      layoutImp = layout;
    };

    // Define the function to combine and render the longest publisher and imprint charts
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
    };



    function init() {
      
      populateListMenu();
      // populateTimeMenu();

      topBookTable(booksData[0]);
      
      let pubBarItems = rankedPublisherBar(selectedData);
      Plotly.newPlot('chart-pub-group', [pubBarItems[0]], pubBarItems[1]);
      
      let impBarItems = rankedImprintBar(selectedData);
      Plotly.newPlot('chart-imp-group', [impBarItems[0]], impBarItems[1]);
      
      let authBarItems = rankedAuthorBar(selectedData);
      Plotly.newPlot('chart-auth-group', [authBarItems[0]], authBarItems[1]);

      rankedOverallPublisherBarCombo();
      groupedOverallImprintBarCombo();
      combineCharts();


    };

    init();
    
});


function updatePlotly(bookData) {
  let pubBarItems = rankedPublisherBar(bookData);
  let impBarItems = rankedImprintBar(bookData);
  let authBarItems = rankedAuthorBar(bookData);

  Plotly.react('chart-pub-group', [pubBarItems[0]], pubBarItems[1]);
  Plotly.react('chart-imp-group', [impBarItems[0]], impBarItems[1]);
  Plotly.react('chart-auth-group', [authBarItems[0]], authBarItems[1]);
};

function listChanged(selectedList) {
  fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    
    let allDatesData = booksData.filter(entry => entry.list_name == selectedList);
    const mrd = allDatesData[0].published_date;
    let selectedData = allDatesData.filter(entry => entry.published_date == mrd);

    // console.log(selectedData);
    topBookTable(selectedData[0]);
    updatePlotly(selectedData);

  });
};












