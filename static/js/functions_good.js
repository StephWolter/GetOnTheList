// top book metadata table
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
let topPublishersLongest = publishersLongest.slice(0,10)
let topPublishersLength = publishersLength.slice(0,10)
let trace = {
  x: topPublishersLength,
  y: topPublishersLongest,
  type: 'bar',
  orientation: 'h',
  marker: {
    // color: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
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