
// let groupedPublishers = {};

// // Iterate over the dataset
// for (const data of booksData) {
//   let publisherName = booksData.publisher_name;
//   let weeksOnList = booksData.weeks_on_list;

//   // Check if the publisher_name already exists in the groupedData object
//   if (groupedPublishers[publisherName]) {
//     groupedPublishers[publisherName] += weeksOnList;
//   } else {
//     groupedData[publisherName] = weeksOnList;
//   }
// }

// console.log(groupedData);
// // top longest publishers chart = chart-pub
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
// .then(response => response.json())
// .then(bookData => {
//   console.log(bookData);

// const rankedPublishers = bookData.reduce((acc, publisher) => {
// if (publisher.publisher_name !== "publisher_name") {
//     acc[publisher.publisher_name] = publisher.weeks_on_list;
//   }
//   return acc;
// }, {});
// const sortedRankedPublishers = Object.fromEntries(
// Object.entries(rankedPublishers).sort((a, b) => b[1] - a[1])
// );
// console.log(sortedRankedPublishers)


// let publishersLongest = Object.keys(sortedRankedPublishers)
// let publishersLength = Object.values(sortedRankedPublishers)



// function rankedPublishersBar() {
// let topPublishersLongest = publishersLongest.slice(0,5)
// let topPublishersLength = publishersLength.slice(0,5)
// // console.log(topPublishersLongest)
// let trace = {
//   x: topPublishersLength,
//   y: topPublishersLongest,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
// }}
// let layout = {
//   title: 'Publishers by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// }
// Plotly.newPlot('chart-pub', [trace], layout);
// }
// rankedPublishersBar();
// })


// // testing to see if I can call the list I want; pulls titles and rank
// const rankedBooks = data.reduce((acc, book) => {
//   if (book.book_title !== "book_title") {
//     acc[book.book_title] = book.weeks_on_list;
//   }
//   return acc;
// }, {});


// function listDropdwon() {}
// let nytData = d3.json(nytUrl).then(function(data) {
//     let nytLists = [];
//     for (let i=0; i < data.lists.length; i++){
//       let nytList = data.lists[i];
//       nytLists.push(nytList);
  
//   };
//     let dropdownLists = document.getElementById('selDataset');
//     for (let i = 0; i < lists.length; i++) {
//         let nytList = lists[i];
//         let dropdownOption = document.createElement('option');
//         dropdownOption.value = nytList;
//         dropdownOption.textContent = nytList;
//         dropdownLists.append(dropdownOption);
    
//   }
// });


// publisherURL = ""
// let publishers = d3.json(publisherUrl).then(function(data) {

// const topFive = ['Penguin/Random House','Hachette Book Group', 'Harper Collins', 'Simon and Schuster', 'Macmillan'];
// const colors = ['red','orange','yellow','green','blue']
// // pie chart of the top 5 at number 1 spot
// function publishersPieNumberOne(book_id) {
//     let trace = {
//         type: 'pie',
//         values: topFiveNumberOne,
//         labels: topFive,
//         marker: colors
//     };
//     let layout = {
//         title: 'Most Often at the Number One Spot',
//         font:{size:14},
//         showlegend: true
//     }
//     Plotly.newPlot("pie", trace, layout);
// };

// // pie chart of top 5 longest
// function publishersPieLongest(book_id) {
//     let trace = {
//         type: 'pie',
//         values: topFiveLongest,
//         labels: topFive,
//         marker: colors
//     };
//     let layout = {
//         title: 'Longest on the List',
//         font:{size:14},
//         showlegend: true
//     }
//     Plotly.newPlot("pie", trace, layout);
// };
// })


// imprintUrl = ""
// let imprints = d3.json(imprintUrl).then(function(data) {
// function createBarChart(id){
//     let otuID = sampleOne.otu_ids.slice(0,10).map(id => `otu${id}`).reverse();
//     let otuIDValues = sampleOne.sample_values.slice(0,10).reverse();
//     let trace1 = {
//       x: otuIDValues,
//       y: otuID,
//       type: 'bar',
//       orientation: 'h',
    
//     };
//     let traceBar = [trace1];
//     let layoutBar = {
//       title: 'Top Ten OTU_IDs',
//       margin: {
//         l: 100,
//         r: 100,
//         t: 100,
//         b: 100}
//       };
      
//     Plotly.newPlot("bar", traceBar, layoutBar);
//     }
//   })    




// // top longest publishers
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(bookData => {
//     console.log(bookData);

// const rankedPublishers = bookData.reduce((acc, publisher) => {
//   if (publisher.publisher_name !== "publisher_name") {
//       acc[publisher.publisher_name] = publisher.weeks_on_list;
//     }
//     return acc;
//   }, {});
// const sortedRankedPublishers = Object.fromEntries(
//   Object.entries(rankedPublishers).sort((a, b) => b[1] - a[1])
// );
// console.log(sortedRankedPublishers)


// let publishersLongest = Object.keys(rankedPublishers)
// let publishersLength = Object.values(rankedPublishers)



// function rankedPublishersBar() {
//   let topPublishersLongest = publishersLongest.slice(0,5)
//   let topPublishersLength = publishersLength.slice(0,5)
//   let trace = {
//     x: topPublishersLength,
//     y: topPublishersLongest,
//     type: 'bar',
//     orientation: 'h',
//     marker: {
//       color: ['red', 'orange', 'yellow', 'green', 'blue'],
//       line: {
//         width: 1,
//         color: 'black'
//       }
//   }}
//   let layout = {
//     title: 'Publishers by Weeks on List',
//     bargap: 0.1,
//     height: 400,
//     yaxis: {
//       automargin: true
//     }
//   }
//   Plotly.newPlot('chart', trace, layout);
// }
// rankedPublishersBar();
// })
// }
// })

// console.log(topBook)






// const rankedPublishers = booksLongestData.reduce((acc, publisher) => {
//   if (publisher.publisher_name !== "publisher_name") {
//     acc[publisher.publisher_name] = publisher.weeks_on_list;
//   }
//   return acc;
// }, {});
// console.log(rankedPublishers)
// const topPublishersLongest = Object.keys(rankedPublishers)
// function rankedPublishersBar(book_id){
//   let otuID = sampleOne.otu_ids.slice(0,10).map(id => `otu${id}`).reverse();
//   let otuIDValues = sampleOne.sample_values.slice(0,10).reverse();
//   let trace1 = {
//     x: otuIDValues,
//     y: otuID,
//     type: 'bar',
//     orientation: 'h',
  
//   };
//   let traceBar = [trace1];
//   let layoutBar = {
//     title: 'Top Ten OTU_IDs',
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100}
//     };
    
//   Plotly.newPlot("bar", traceBar, layoutBar);
//   })






// // top book metadata table - needs a place in HTML 'sample-metadata'
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     console.log(booksData);


// const topBook = booksData[1]
// // console.log(topBook)

// function topBookTable(booksData) {
//     let metadataElement = document.getElementById('sample-metadata');
//     let metadataObject = topBook;
//   // clear old info
//     if (metadataObject) {
//       metadataElement.innerHTML = '';
//   // set up table
//       let table = document.createElement('table');
//       table.className = 'metadata-table';
//       for (let key in metadataObject) {
//         if (metadataObject.hasOwnProperty(key)) {
//           let row = document.createElement('tr');
//           let keyCell = document.createElement('td');
//           let valueCell = document.createElement('td');
//           keyCell.textContent = key;
//           valueCell.textContent = metadataObject[key];
//           row.appendChild(keyCell);
//           row.appendChild(valueCell);
//           table.appendChild(row);
        // Display book image
      //   let imageRow = document.createElement('tr');
      //   let imageKeyCell = document.createElement('td');
      //   let imageValueCell = document.createElement('td');
      //   let imageElement = document.createElement('img');

      //   imageKeyCell.textContent = 'book_image';
      //   imageElement.src = topBook.book_image;
      //   imageValueCell.appendChild(imageElement);

      //   imageRow.appendChild(imageKeyCell);
      //   imageRow.appendChild(imageValueCell);
      //   table.appendChild(imageRow);

      //   return table;
      // }
//         }
//       }
//       metadataElement.appendChild(table);
//     } else {
//       metadataElement.textContent = 'No metadata available for ID: ' + id;
//     }
//   }
//   topBookTable(booksData);



// function createBarChart(id){
//   let otuID = sampleOne.otu_ids.slice(0,10).map(id => `otu${id}`).reverse();
//   let otuIDValues = sampleOne.sample_values.slice(0,10).reverse();
//   let trace1 = {
//     x: otuIDValues,
//     y: otuID,
//     type: 'bar',
//     orientation: 'h',
  
//   };
//   let traceBar = [trace1];
//   let layoutBar = {
//     title: 'Top Ten OTU_IDs',
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100}
//     };
    
//   Plotly.newPlot("bar", traceBar, layoutBar);
//   }




// pie chart of top 5 publishers longest
// function publishersPieLongest(book_id) {
//     let trace = {
//         type: 'pie',
//         values: topFiveLongest,
//         labels: topFive,
//         marker: colors
//     };
//     let layout = {
//         title: 'Longest on the List',
//         font:{size:14},
//         showlegend: true
//     }
//     Plotly.newPlot("pie", trace, layout);
// };
// publishersPieLongest(topBook)
// })


// // top longest publishers chart = chart-pub
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

//   let groupedPublishers = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let publisherName = data.publisher_name;
//     let weeksOnList = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedPublishers[publisherName]) {
//       groupedPublishers[publisherName] += weeksOnList;
//     } else {
//       groupedPublishers[publisherName] = weeksOnList;
//     }
//   }
  
//   console.log(groupedPublishers);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
//   publisher_name: publisherName,
//   weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topPublishers = groupedPublishersArray.slice(0, 5);

// // Extract the publisher names and weeks on list data
// const publishers = topPublishers.map(publisher => publisher.publisher_name);
// const weeksOnList = topPublishers.map(publisher => publisher.weeks_on_list);

// // Define the trace for the bar chart
// const trace = {
//   x: weeksOnList,
//   y: publishers,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };

// // Define the layout for the chart
// const layout = {
//   title: 'Top 5 Publishers by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// };

// // Create the data array
// const data = [trace];

// // Render the chart
// Plotly.newPlot('chart', data, layout);
//   })



// // top longest Publishers div = chart-pub
// // having trouble showing the actual top ones

// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);
// const rankedPublishers = booksData.reduce((acc, publisher) => {
// if (publisher.publisher_name !== "publisher_name") {
//     acc[publisher.publisher_name] = publisher.weeks_on_list;
//   }
//   return acc;
// }, {});
// const sortedRankedPublishers = Object.fromEntries(
// Object.entries(rankedPublishers).sort((a, b) => b[1] - a[1])
// );
// console.log(sortedRankedPublishers)


// let publishersLongest = Object.keys(sortedRankedPublishers)
// let publishersLength = Object.values(sortedRankedPublishers)



// function rankedPublishersBar() {
// let topPublishersLongest = publishersLongest.slice(0,5)
// let topPublishersLength = publishersLength.slice(0,5)
// // console.log(topPublishersLongest)
// let trace = {
//   x: topPublishersLength,
//   y: topPublishersLongest,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
// }}
// let layout = {
//   title: 'Publishers by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// }
// Plotly.newPlot('chart-pub', [trace], layout);
// }
// rankedPublishersBar();
// })



// // top longest publishers chart = chart-pub-group
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

//   let groupedImprints = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let imprintName = data.imprint_name;
//     let weeksOnList = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedImprints[imprintName]) {
//       groupedImprints[imprintName] += weeksOnList;
//     } else {
//       groupedImprints[imprintName] = weeksOnList;
//     }
//   }
  
//   console.log(groupedImprints);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnList]) => ({
//   imprint_name: imprintName,
//   weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topImprints = groupedImprintsArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const imprints = topImprints.map(imprint => imprint.imprint_name);
// const weeksOnList = topImprints.map(imprint => imprint.weeks_on_list);

// // Define the trace for the bar chart
// const trace = {
//   x: weeksOnList,
//   y: imprints,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };

// // Define the layout for the chart
// const layout = {
//   title: 'Top 5 Imprint Publishers by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// };


// // Render the chart
// Plotly.newPlot('chart-imp-group', [trace], layout);
//   })


//   // top longest imprints chart = chart-imp-group
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
// .then(response => response.json())
// .then(booksData => {
//   // console.log(booksData);

// let groupedAuthors = {};

// // Iterate over the dataset
// for (let data of booksData) {
//   let authorName = data.author_name;
//   let weeksOnList = data.weeks_on_list;

//   // Check if the publisher_name already exists in the groupedData object
//   if (groupedAuthors[authorName]) {
//     groupedAuthors[iauthorName] += weeksOnList;
//   } else {
//     groupedAuthors[authorName] = weeksOnList;
//   }
// }

// console.log(groupedAuthors);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedAuthorsArray = Object.entries(groupedAuthors).map(([authorName, weeksOnList]) => ({
// author_name: authorName,
// weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedAuthorsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topAuthors = groupedAuthorsArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const authors = topAuthors.map(author => author.author_name);
// const weeksOnList = topAuthors.map(author => author.weeks_on_list);

// // Define the trace for the bar chart
// const trace = {
// x: weeksOnList,
// y: authors,
// type: 'bar',
// orientation: 'h',
// marker: {
//   color: ['red', 'orange', 'yellow', 'green', 'blue'],
//   line: {
//     width: 1,
//     color: 'black'
//   }
// }
// };

// // Define the layout for the chart
// const layout = {
// title: 'Top 5 Imprint Authorsby Weeks on List',
// bargap: 0.1,
// height: 400,
// yaxis: {
//   automargin: true
// }
// };


// // Render the chart
// Plotly.newPlot('chart-auth-group', [trace], layout);
// })

// // Select only the top 5 publishers
// const topPublishers = groupedPublishersArray.slice(1, 11);
// const otherPublishers = groupedPublishersArray.slice(11);
// console.log(otherPublishers);
// // Extract the publisher names and weeks on list data
// const top5Publishers = topPublishers.map(publisher => publisher.publisher_name);
// const weeksOnList = topPublishers.map(publisher => publisher.weeks_on_list);
// const groupedSlice = {
//   publisher_name: 'Other',
//   weeks_on_list: otherPublishers.reduce((total, item) => total + item.weeks_on_list, 0),
// };
// const wholePie = [...top5Publishers, groupedSlice];
// const wholePiePublisherNames = wholePie.map(item => item.publisher_name);
// const wholePieWeeksOnList = wholePie.map(item => item.weeks_on_list);








// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

// function parentPublisherOverallTreeMap() {
//   let groupedPublishers = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let publisherName = data.publisher_name;
//     let weeksOnList = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedPublishers[publisherName]) {
//       groupedPublishers[publisherName] += weeksOnList;
//     } else {
//       groupedPublishers[publisherName] = weeksOnList;
//     }
//   }
  
//   console.log(groupedPublishers);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
//   publisher_name: publisherName,
//   weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Extract the publisher names and weeks on list data
// const publishers = groupedPublishersArray.map(publisher => publisher.publisher_name);
// // const weeksOnList = groupedPublishersArray.map(publisher => publisher.weeks_on_list);
// // Select only the top 5 publishers
// const topPublishers = groupedPublishersArray.slice(1, 11);
// const otherPublishers = groupedPublishersArray.slice(11);
// console.log(otherPublishers);
// // Extract the publisher names and weeks on list data
// const top11Publishers = topPublishers.map(publisher => publisher.publisher_name);
// // const weeksOnList = topPublishers.map(publisher => publisher.weeks_on_list);
// // const groupedSlice = {
// //   publisher_name: 'Other',
// //   weeks_on_list: otherPublishers.reduce((total, item) => total + item.weeks_on_list, 0),
// // };
// // const wholePie = top5Publishers.concat(groupedSlice);
// // const wholePiePublisherNames = wholePie.map(item => item.publisher_name);
// // const wholePieWeeksOnList = wholePie.map(item => item.weeks_on_list);
// // console.log(wholePie);  // the problem is here-ish - only getting the top5publishers

// // Create trace for the treemap
// const Trace = {
//     type: 'treemap',
//     labels: [...top11Publishers.map(item => item.publisher_name), 'Other'],
//     parents: ['', '', '', '', '', '','','','',''], 
//     values: [...top11Publishers.map(item => item.weeks_on_list), otherPublishers.reduce((sum, item) => sum + item.weeks_on_list, 0)],
//     root: {}
// };

// // Create layout options for the treemap
// const Layout = {
//   title: 'Parent Publishers Appearances',
// };

// // Render the treemap using Plotly
// Plotly.newPlot('treemap', [Trace], Layout);



// }
// parentPublisherOverallTreeMap()
//   })






// // PIE CHART of all the publishers
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
// .then(response => response.json())
// .then(booksData => {
//     // console.log(booksData);

// let groupedPublishers = {};

// // Iterate over the dataset

// function parentPublishersPie () {

// for (let data of booksData) {
//   let publisherName = data.publisher_name;
//   let weeksOnList = data.weeks_on_list;

//   // Check if the publisher_name already exists in the groupedData object
//   if (groupedPublishers[publisherName]) {
//     groupedPublishers[publisherName] += weeksOnList;
//   } else {
//     groupedPublishers[publisherName] = weeksOnList;
//   }
// }

// console.log(groupedPublishers);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
// publisher_name: publisherName,
// weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topPublishers = groupedPublishersArray.slice(1, 11);
// const otherPublishers = groupedPublishersArray.slice(11);
// console.log(otherPublishers);
// // Extract the publisher names and weeks on list data
// const top5Publishers = topPublishers.map(publisher => publisher.publisher_name);
// const weeksOnList = topPublishers.map(publisher => publisher.weeks_on_list);
// const groupedSlice = {
//   publisher_name: 'Other',
//   weeks_on_list: otherPublishers.reduce((total, item) => total + item.weeks_on_list, 0),
// };
// const wholePie = [...top5Publishers, groupedSlice];
// const wholePiePublisherNames = wholePie.map(item => item.publisher_name);
// const wholePieWeeksOnList = wholePie.map(item => item.weeks_on_list);

// // trace
// const trace = {
//   labels: wholePiePublisherNames,
//   values: wholePieWeeksOnList,
//   type: 'pie',
// };

// const layout = {
//   title: 'Weeks on the List: Publishers',
//   width: 400,
//   height: 400,
// };

// Plotly.newPlot('pieChart',[trace],layout)
// }
// parentPublishersPie()
//   })








// top longest publishers chart = chart-pub-group
// having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

//   let groupedPublishers = {};
//   let groupedImprints = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let publisherName = data.publisher_name;
//     let weeksOnList = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedPublishers[publisherName]) {
//       groupedPublishers[publisherName] += weeksOnList;
//     } else {
//       groupedPublishers[publisherName] = weeksOnList;
//     }
//   }
//     // Iterate over the dataset
//   for (let data of booksData) {
//     let imprintName = data.imprint_name;
//     let weeksOnList = data.weeks_on_list;
    
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedImprints[imprintName]) {
//       groupedImprints[imprintName] += weeksOnList;
//     } else {
//       groupedImprints[imprintName] = weeksOnList;
//     }
//   }
//   console.log(groupedPublishers);
//   console.log(groupedImprints);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
//   publisher_name: publisherName,
//   weeks_on_list: weeksOnList
// }));
// let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnList]) => ({
//   imprint_name: imprintName,
//   weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);
// groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topPublishers = groupedPublishersArray.slice(1, 6);
// const topImprints = groupedImprintsArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const publishers = topPublishers.map(publisher => publisher.publisher_name);
// const weeksOnListPubs = topPublishers.map(publisher => publisher.weeks_on_list);
// const imprints = topImprints.map(imprint => imprint.imprint_name);
// const weeksOnListImps = topImprints.map(imprint => imprint.weeks_on_list);

// // Define the trace for the bar chart
// const trace1 = {
//   x: weeksOnListPubs,
//   y: publishers,
//   type: 'bar',
//   orientation: 'h',
//   name: 'Top Publishers',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };
// const trace2 = {
//   x: weeksOnListImps,
//   y: imprints,
//   type: 'bar',
//   orientation: 'h',
//   name: 'Top Imprints',
//   marker: {
//     color: ['Maroon', 'OrangeRed', 'Gold', 'ForestGreen', 'MidnightBlue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };
// // Define the layout for the chart
// const layout = {
//   title: 'Top 5 Parent Publishers by Weeks on List',
//   barmode: 'stack',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// };

// let pub_and_imp_ranked = [trace1,trace2]
// // Render the chart
// Plotly.newPlot('chart-pub-group', pub_and_imp_ranked, layout);
//   })





// // top longest imprints chart = chart-imp-group
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

//   let groupedImprints = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let imprintName = data.imprint_name;
//     let weeksOnList = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedImprints[imprintName]) {
//       groupedImprints[imprintName] += weeksOnList;
//     } else {
//       groupedImprints[imprintName] = weeksOnList;
//     }
//   }
  
//   console.log(groupedImprints);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnList]) => ({
//   imprint_name: imprintName,
//   weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topImprints = groupedImprintsArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const imprints = topImprints.map(imprint => imprint.imprint_name);
// const weeksOnList = topImprints.map(imprint => imprint.weeks_on_list);

// // Define the trace for the bar chart
// const trace = {
//   x: weeksOnList,
//   y: imprints,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };

// // Define the layout for the chart
// const layout = {
//   title: 'Top 5 Imprint Publishers by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// };


// // Render the chart
// Plotly.newPlot('chart-imp-group', [trace], layout);
//   })






// // top longest Imprints div = chart-imp
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
// .then(response => response.json())
// .then(bookData => {
//   console.log(bookData);

// const rankedImprints = bookData.reduce((acc, imprint) => {
// if (imprint.imprint_name !== "imprint_name") {
//     acc[imprint.imprint_name] = imprint.weeks_on_list;
//   }
//   return acc;
// }, {});
// const sortedRankedImprints = Object.fromEntries(
// Object.entries(rankedImprints).sort((a, b) => b[1] - a[1])
// );
// console.log(sortedRankedImprints)


// let imprintsLongest = Object.keys(sortedRankedImprints)
// let imprintsLength = Object.values(sortedRankedImprints)



// function rankedImprintsBar() {
// let topImprintsLongest = imprintsLongest.slice(0,5)
// let topImprintsLength = imprintsLength.slice(0,5)
// console.log(topImprintsLongest)
// let trace = {
//   x: topImprintsLength,
//   y: topImprintsLongest,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
// }}
// let layout = {
//   title: 'Imprints by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// }
// Plotly.newPlot('chart-imp', [trace], layout);
// }
// rankedImprintsBar();
// })




// // top longest publishers chart = chart-pub-group
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

// function rankedPublisherBar() {
//   let groupedPublishers = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let publisherName = data.publisher_name;
//     let weeksOnList = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedPublishers[publisherName]) {
//       groupedPublishers[publisherName] += weeksOnList;
//     } else {
//       groupedPublishers[publisherName] = weeksOnList;
//     }
//   }
  
//   console.log(groupedPublishers);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
//   publisher_name: publisherName,
//   weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topPublishers = groupedPublishersArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const publishers = topPublishers.map(publisher => publisher.publisher_name);
// const weeksOnList = topPublishers.map(publisher => publisher.weeks_on_list);

// // Define the trace for the bar chart
// const trace = {
//   x: weeksOnList,
//   y: publishers,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };

// // Define the layout for the chart
// const layout = {
//   title: 'Top 5 Parent Publishers by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// };


// // Render the chart
// Plotly.newPlot('chart-pub-group', [trace], layout);
// }
// rankedPublisherBar()
//   })





// // top longest imprints chart = chart-imp-group
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

//   let groupedImprints = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let imprintName = data.imprint_name;
//     let weeksOnList = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedImprints[imprintName]) {
//       groupedImprints[imprintName] += weeksOnList;
//     } else {
//       groupedImprints[imprintName] = weeksOnList;
//     }
//   }
  
//   console.log(groupedImprints);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnList]) => ({
//   imprint_name: imprintName,
//   weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topImprints = groupedImprintsArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const imprints = topImprints.map(imprint => imprint.imprint_name);
// const weeksOnList = topImprints.map(imprint => imprint.weeks_on_list);

// // Define the trace for the bar chart
// const trace = {
//   x: weeksOnList,
//   y: imprints,
//   type: 'bar',
//   orientation: 'h',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };

// // Define the layout for the chart
// const layout = {
//   title: 'Top 5 Imprint Publishers by Weeks on List',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// };


// // Render the chart
// Plotly.newPlot('chart-imp-group', [trace], layout);
//   })







// // top longest authors chart = chart-auth-group

// fetch('http://127.0.0.1:5000/api/v1.0/books') 
// .then(response => response.json())
// .then(booksData => {
//   // console.log(booksData);

// let groupedAuthors = {};

// // Iterate over the dataset
// for (let data of booksData) {
//   let authorName = data.author_name;
//   let weeksOnList = data.weeks_on_list;

//   // Check if the publisher_name already exists in the groupedData object
//   if (groupedAuthors[authorName]) {
//     groupedAuthors[authorName] += weeksOnList;
//   } else {
//     groupedAuthors[authorName] = weeksOnList;
//   }
// }

// console.log(groupedAuthors);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedAuthorsArray = Object.entries(groupedAuthors).map(([authorName, weeksOnList]) => ({
// author_name: authorName,
// weeks_on_list: weeksOnList
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedAuthorsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topAuthors = groupedAuthorsArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const authors = topAuthors.map(author => author.author_name);
// const weeksOnList = topAuthors.map(author => author.weeks_on_list);

// // Define the trace for the bar chart
// const trace = {
// x: weeksOnList,
// y: authors,
// type: 'bar',
// orientation: 'h',
// marker: {
//   color: ['red', 'orange', 'yellow', 'green', 'blue'],
//   line: {
//     width: 1,
//     color: 'black'
//   }
// }
// };

// // Define the layout for the chart
// const layout = {
// title: 'Top 5 Imprint Authors by Weeks on List',
// bargap: 0.1,
// height: 400,
// yaxis: {
//   automargin: true
// }
// };


// // Render the chart
// Plotly.newPlot('chart-auth-group', [trace], layout);
// })




// // top longest publishers chart = chart-pub-group
// // having trouble showing the actual top ones
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     // console.log(booksData);

//   let groupedPublishers = {};
//   let groupedImprints = {};

//   // Iterate over the dataset
//   for (let data of booksData) {
//     let publisherName = data.publisher_name;
//     let weeksOnListPub = data.weeks_on_list;
  
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedPublishers[publisherName]) {
//       groupedPublishers[publisherName] += weeksOnListPub;
//     } else {
//       groupedPublishers[publisherName] = weeksOnListPub;
//     }
//   }
//     // Iterate over the dataset
//   for (let data of booksData) {
//     let imprintName = data.imprint_name;
//     let weeksOnListImp = data.weeks_on_list;
    
//     // Check if the publisher_name already exists in the groupedData object
//     if (groupedImprints[imprintName]) {
//       groupedImprints[imprintName] += weeksOnListImp;
//     } else {
//       groupedImprints[imprintName] = weeksOnListImp;
//     }
//   }
//   console.log(groupedPublishers);
//   console.log(groupedImprints);

// // Convert the object into an array of { publisher_name, weeks_on_list } objects
// let groupedPublishersArray = Object.entries(groupedPublishers).map(([publisherName, weeksOnList]) => ({
//   publisher_name: publisherName,
//   weeks_on_list: weeksOnListPub
// }));
// let groupedImprintsArray = Object.entries(groupedImprints).map(([imprintName, weeksOnList]) => ({
//   imprint_name: imprintName,
//   weeks_on_list: weeksOnListImp
// }));

// // Sort the array based on the weeks_on_list in descending order
// groupedPublishersArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);
// groupedImprintsArray.sort((a, b) => b.weeks_on_list - a.weeks_on_list);

// // Select only the top 5 publishers
// const topPublishers = groupedPublishersArray.slice(1, 6);
// const topImprints = groupedImprintsArray.slice(1, 6);

// // Extract the publisher names and weeks on list data
// const publishers = topPublishers.map(publisher => publisher.publisher_name);
// const weeksOnListPubs = topPublishers.map(publisher => publisher.weeks_on_list);
// const imprints = topImprints.map(imprint => imprint.imprint_name);
// const weeksOnListImps = topImprints.map(imprint => imprint.weeks_on_list);

// // Define the trace for the bar chart
// const trace1 = {
//   x: weeksOnListPubs,
//   y: publishers,
//   type: 'bar',
//   orientation: 'h',
//   name: 'Top Publishers',
//   marker: {
//     color: ['red', 'orange', 'yellow', 'green', 'blue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };
// const trace2 = {
//   x: weeksOnListImps,
//   y: imprints,
//   type: 'bar',
//   orientation: 'h',
//   name: 'Top Imprints',
//   marker: {
//     color: ['Maroon', 'OrangeRed', 'Gold', 'ForestGreen', 'MidnightBlue'],
//     line: {
//       width: 1,
//       color: 'black'
//     }
//   }
// };
// // Define the layout for the chart
// const layout = {
//   title: 'Top 5 Parent Publishers by Weeks on List',
//   barmode: 'stack',
//   bargap: 0.1,
//   height: 400,
//   yaxis: {
//     automargin: true
//   }
// };

// let pub_and_imp_ranked = [trace1,trace2]
// // Render the chart
// Plotly.newPlot('chart-comp-group', pub_and_imp_ranked, layout);
//   })

// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     console.log(booksData);

// // set constant of top instance in ordered data
// const topBook = booksData[1]
// // console.log(topBook)


// // set up function to give a metadata striped table in 'sample-metadata'
// // class 'striped-table'

// function topOverallBookTable(booksData) {
//     let metadataElement = document.getElementById('sample-metadata');
//     let metadataObject = topBook;
//     delete metadataObject.book_image;
//     const reorderedKeys = ['book_title', 'author_name', 'book_description', 'imprint_name', 'list_name', 'publisher_name', 'weeks_on_list'];

//   // set up table
//       let table = document.createElement('table');
//       table.className = 'striped-table';
//       table.style.fontFamily = 'Trebuchet MS, sans-serif';
      
//       for (let key in reorderedKeys) {
//         if (metadataObject.hasOwnProperty(key)) {
//           let row = document.createElement('tr');
//           let keyCell = document.createElement('td');
//           let valueCell = document.createElement('td');
//           let displayKey;
//           switch (key) {
//             case 'book_title':
//                 displayKey = 'Title:'
//                 break;
//             case 'author_name':
//               displayKey = 'Author:';
//               break;
//             case 'book_description':
//               displayKey = 'Description:';
//               break;
//             case 'imprint_name':
//                 displayKey = 'Imprint Publisher:'
//                 break;
//             case 'list_name':
//                 displayKey = 'NYT List:'
//                 break;
//             case 'publisher_name':
//                 displayKey = 'Parent Publisher:'
//                 break;
//             case 'weeks_on_list':
//                 displayKey = 'Weeks On List:'
//                 break;
//             default:
//               displayKey = key;
//               break;
//           }

//           keyCell.textContent = displayKey;
//           valueCell.textContent = metadataObject[key];
//           row.appendChild(keyCell);
//           row.appendChild(valueCell);
//           table.appendChild(row);

//         }
//       }
//       metadataElement.appendChild(table);
//   }
//   topOverallBookTable(booksData);
// })












fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);

function rankedListsWeeks() {
  let groupedLists = {};
    
  // Iterate over the dataset
  for (let data of booksData) {
    let listName = data.list_name;
    let weeksOnList = data.weeks_on_list;
      
     // Check if the publisher_name already exists in the groupedData object
    if (groupedLists[listName]) {
      groupedLists[listName] += weeksOnList;
    } else {
      groupedLists[listName] = weeksOnList;
    }
  }
      
  console.log(groupedLists);

  // Convert the object into an array of { publisher_name, weeks_on_list } objects
let groupedListsArray = Object.entries(groupedLists).map(([listName, weeksOnList]) => ({
  list_name: listName,
  weeks_on_list: weeksOnList
}));

}
rankedListsWeeks()
  })





let funnel = document.getElementById('myDiv');
let data = [{type: 'funnel', name: 'One Time',
  y: ["Website visit", "Downloads", "Potential customers", "Requested price"],
  x: [120, 60, 30, 20],
  textinfo: "value+percent initial"},
  {
     type: 'funnel',name: 'Two Times',
    y: ["One Time", "Two Times", "Three Times", "More"],
    x: [100, 60, 40, 30, 20], textposition: "inside", textinfo: "value+percent previous"},
  {
    type: 'funnel',name: 'Three Times',
    y: ["One Time", "Two Times", "Three Times", "More"],
    x: [90, 70, 50, 30, 10, 5], textposition: "outside", textinfo: "value+percent total"},
  {
    type: 'funnel',name: 'Three Times',
    y: ["Website visit", "Downloads", "Potential customers", "Requested price", "invoice sent", "closed deals"],
    x: [90, 70, 50, 30, 10, 5], textposition: "outside", textinfo: "value+percent total"}];

let layout = {margin: {l: 130, r: 0}, width: 600, funnelmode: "stack", showlegend: 'true'}

Plotly.newPlot('myDiv', data, layout);
  







// // top book overall metadata table
// // metadata baby
// fetch('http://127.0.0.1:5000/api/v1.0/books') 
//   .then(response => response.json())
//   .then(booksData => {
//     console.log(booksData);

// // set constant of top instance in ordered data
// const topBook = booksData[1]
// // console.log(topBook)


// // set up function to give a metadata striped table in 'sample-metadata'
// // class 'striped-table'

// function topOverallBookTable(booksData) {
//     let metadataElement = document.getElementById('sample-metadata');
//     let metadataObject = topBook;
//     delete metadataObject.book_image;
//     const reorderedKeys = ['book_title', 'author_name', 'book_description',  'list_name', 'publisher_name', 'imprint_name','weeks_on_list'];

//   // clear old info
//     if (metadataObject) {
//       metadataElement.innerHTML = '';
//   // set up table
//       let table = document.createElement('table');
//       table.className = 'striped-table';
//       table.style.fontFamily = 'Trebuchet MS, sans-serif';
      
//       for (let key in reorderedKeys) {
//         if (metadataObject.hasOwnProperty(key)) {
//           let row = document.createElement('tr');
//           let keyCell = document.createElement('td');
//           let valueCell = document.createElement('td');
//           let displayKey;
//           switch (key) {
//             case 'book_title':
//                 displayKey = 'Title:'
//                 break;
//             case 'author_name':
//                 displayKey = 'Author:';
//                 break;
//             case 'book_description':
//                 displayKey = 'Description:';
//                 break;
//             case 'list_name':
//                 displayKey = 'NYT List:'
//                 break;
//             case 'publisher_name':
//                 displayKey = 'Parent Publisher:'
//                 break;
//             case 'imprint_name':
//                 displayKey = 'Imprint Publisher:'
//                 break;
//             case 'weeks_on_list':
//                 displayKey = 'Weeks On List:'
//                 break;
//             default:
//                 displayKey = key;
//                 break;
//           }

//           keyCell.textContent = displayKey;
//           valueCell.textContent = metadataObject[key];
//           row.appendChild(keyCell);
//           row.appendChild(valueCell);
//           table.appendChild(row);

//         }
//       }
//       metadataElement.appendChild(table);
//     } else {
//       metadataElement.textContent = 'No metadata available for ID: ' + id;
//     }
//   }
//   topOverallBookTable(booksData);
//   });











// top longest publishers chart ACROSS ALL LISTS => 'chart-pub-group'

fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(booksData => {
    // console.log(booksData);

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
const tracePub = trace;
const layoutPub = layout;
}
rankedOverallPublisherBar()





// top longest imprints chart ACROSS ALL LISTS = chart-imp-group
// having trouble showing the actual top ones
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
const traceImp = trace;
const layoutImp = layout;
}
groupedOverallImprintBar()


function combineCharts() {
  const combinedData = [tracePub, traceImp];
  const combinedLayout = {
    title: 'Combined Bar Charts',
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