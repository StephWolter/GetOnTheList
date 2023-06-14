// top book OVERALL ACROSS ALL LISTS metadata table
// metadata baby
fetch('http://127.0.0.1:5000/api/v1.0/books')
  .then(response => response.json())
  .then(booksData => {
    console.log(booksData);
// console.log(recentData);
// set constant of top instance in ordered data
const topBook = booksData[0]
// console.log(topBook)
// set up function to give a metadata striped table in 'sample-metadata'
// class 'striped-table'
function topOverallBookTable() {
    let metadataElement = document.getElementById('standalone-metadata');
    let metadataObject = topBook;
    delete metadataObject.book_image;
    const reorderedKeys = ['book_title', 'author_name', 'book_description',  'list_name', 'publisher_name', 'imprint_name','weeks_on_list'];
    // clear old info
    if (metadataObject) {
      metadataElement.innerHTML = '';
      // set up table
      let table = document.createElement('table2');
      table.className = 'striped-table2';
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
  }
  topOverallBookTable();
});


// top book OVERALL ACROSS ALL LISTS metadata table
// metadata baby
fetch('http://127.0.0.1:5000/api/v1.0/books')
  .then(response => response.json())
  .then(booksData => {
    console.log(booksData);
    const standAloneBooksData = booksData.filter(item => item.list_name !== "Series Books");
// console.log(recentData);
// set constant of top instance in ordered data
const topBookStandAlone = standAloneBooksData[0]
// console.log(topBook)
// set up function to give a metadata striped table in 'sample-metadata'
// class 'striped-table'
function topOverallStandAloneBookTable() {
    let metadataElement = document.getElementById('sample-metadata');
    let metadataObject = topBookStandAlone;
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
  }
  topOverallStandAloneBookTable();
});