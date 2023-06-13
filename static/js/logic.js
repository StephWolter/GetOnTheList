fetch('http://127.0.0.1:5000/api/v1.0/books') 
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // // console.log(typeof data[0].published_date);

    // let all_results = data;
    // let most_recent = [];
    // let mrd = data[0].published_date;
    // // let mrd_str = mrd.toDateString();

    // // console.log(mrd);
    // // console.log(data[0].published_date);

    // for (i = 0; i < data.length; i++) {
      
    //   // console.log(data[i].published_date);

    //   if (data[i].published_date === mrd) {
    //     var entry = Object(data[i])
    //     most_recent.push(entry)
    //   };
      
    // };

    // console.log(most_recent);


    // function getNumber1Count(title) {
    //   let count = 0
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].book_title == title) and (data[i].rank == 1) {
    //       count += 1
    //     };
    //   }
    //   return count;
    // };

    // let titles = [];
    // let number1_counts = [];

    // for (let i = 0; i < data.length; i++) {
    //   if (!titles.includes(data[i].book_title)) {
    //     titles.push(data[i].book_title)
    //     number1_counts.push(getNumber1Count(data[i].book_title))
    //   };
    // };

    // console.log(titles);
    // console.log(number1_counts);
    // let book_results = {
    //   'Title': titles,
    //   'Number 1 Appearances': number1_counts
    // };

    // console.log(book_results);
    
  });


// // Create a Leaflet map instance
// let map = L.map('map').setView([40, -95], 4);

// // Add the base tile layer (e.g., OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data © OpenStreetMap contributors'
// }).addTo(map);

// // Access the locations array from the window object
// let locations = window.locations;

// // Loop through the locations array and add markers to the map
// locations.forEach(function (location) {
//     let marker = L.marker(location.coordinates).addTo(map);
//     marker.bindPopup('<b>' + location.name + '</b><br>' + location.location);
// });

// let book = new BookBlock('#myBook', {
//     speed: 1000, // Animation speed in milliseconds
//     shadowSides: 0.8, // Shadow opacity for the sides of the book (0 to 1)
//     shadowFlip: 0.4 // Shadow opacity for the flipping pages (0 to 1)
//   });

//   // Load content for each page using AJAX
//   function loadPageContent(pageNumber, pageId, fileName) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', fileName, true);
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         document.getElementById(pageId).innerHTML = xhr.responseText;
//       }
//     };
//     xhr.send();
//   }
  
//   // Load content for each page when the BookBlock is initialized
//   book.on('bookblock:init', function() {
//     loadPageContent(1, 'page1', 'index.html');
//     loadPageContent(2, 'page2', 'about.html');
//     loadPageContent(3, 'page3', 'charts.html');
//     loadPageContent(3, 'page4', 'top-rated.html');
//     loadPageContent(3, 'page5', 'team.html');
//     loadPageContent(3, 'page6', 'genrestats.html');
//   });
// // 

// // Create a Leaflet map instance
// let map = L.map('map').setView([40, -95], 4);

// // Add the base tile layer (e.g., OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data © OpenStreetMap contributors'
// }).addTo(map);

// // Retrieve your data points and their coordinates from the data.js file
// let dataPoints = window.locations;
// let coordinates = dataPoints.map(point => point.coordinates);

// // Create a Heatmap layer
// let heatmapLayer = L.heatLayer(coordinates, {
//   radius: 25, // Adjust the radius of the heatmap points
//   blur: 15, // Adjust the blur of the heatmap layer
//   maxZoom: 10 // Maximum zoom level to show the heatmap
// }).addTo(map);

// // Calculate the bounds based on the coordinates array
// let bounds = L.latLngBounds(coordinates);

// // Fit the map bounds to show all data points
// map.fitBounds(bounds);


// specify amount!!

// // Retrieve coordinates from the data.js file
// let dataPoints = window.locations;
// let coordinates = dataPoints.map(point => point.coordinates);

// // Prepare the data for the density map
// let data = [{
//   type: 'densitymapbox',
//   lon: coordinates.map(coord => coord[1]), // Swap longitude and latitude
//   lat: coordinates.map(coord => coord[0]), // Swap longitude and latitude
//   radius: 10, // Adjust the radius as needed
//   colorscale: 'YlOrRd', // Specify the color scale
//   showscale: true
// }];

// // Configure the layout for the density map
// let layout = {
//   title: 'Density Map with OpenStreetMap',
//   mapbox: {
//     center: { lon: -95, lat: 40 }, // Set the initial map center
//     zoom: 4, // Set the initial map zoom level
//     style: 'open-street-map' // Specify OpenStreetMap as the map style
//   }
// };

// // Create the density map using Plotly
// Plotly.newPlot('map', data, layout);


// using three.js-- watch more vids!!!!

// Initialize the scene
// const scene = new THREE.Scene();

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 10);

// // Create a renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('map').appendChild(renderer.domElement);

// // Create an ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// // Create a directional light
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(5, 3, 5);
// scene.add(directionalLight);

// // Load the map geometry
// const loader = new THREE.OBJLoader();
// loader.load('map.obj', function (mapGeometry) {
//     // Assign density values to map vertices based on your data
//     // Adjust vertex positions, colors, or other visual properties based on density

//     // Create a material and mesh for the map geometry
//     const material = new THREE.MeshPhongMaterial({ color: 0x3366ff, specular: 0x111111, shininess: 10 });
//     const mesh = new THREE.Mesh(mapGeometry, material);
//     scene.add(mesh);
// });

// // Render loop
// function animate() {
//     requestAnimationFrame(animate);

//     // Perform any necessary updates to the scene, camera, and objects
//     // Update camera position, control camera movement, etc.

//     renderer.render(scene, camera);
// }
// animate();
