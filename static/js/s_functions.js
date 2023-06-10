

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




// top longest publishers
fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(bookData => {
    console.log(bookData);

const rankedPublishers = bookData.reduce((acc, publisher) => {
  if (publisher.publisher_name !== "publisher_name") {
      acc[publisher.publisher_name] = publisher.weeks_on_list;
    }
    return acc;
  }, {});
const sortedRankedPublishers = Object.fromEntries(
  Object.entries(rankedPublishers).sort((a, b) => b[1] - a[1])
);
console.log(sortedRankedPublishers)


let publishersLongest = Object.keys(rankedPublishers)
let publishersLength = Object.values(rankedPublishers)



function rankedPublishersBar() {
  let topPublishersLongest = publishersLongest.slice(0,5)
  let topPublishersLength = publishersLength.slice(0,5)
  let trace = {
    x: topPublishersLength,
    y: topPublishersLongest,
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
    title: 'Publishers by Weeks on List',
    bargap: 0.1,
    height: 400,
    yaxis: {
      automargin: true
    }
  }
  Plotly.newPlot('chart', trace, layout);
}
rankedPublishersBar();
})
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
