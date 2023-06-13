document.addEventListener('DOMContentLoaded', function() {
  // Get the button or link element that triggers the navigation
  let navigationButton = document.getElementById("navigationButton");
  
  // Attach an event listener to the button or link
  navigationButton.addEventListener("click", function() {
    // Add the "flip" class to the book element
    let book = document.querySelector(".book");
    book.classList.add("flip");
  });
  
  });
  // CREATE MAP
  // function initializeMap() {
  document.addEventListener('DOMContentLoaded', function() {
  // Create a Leaflet map instance
  let map = L.map('map').setView([40, -95], 4);
  
  // Add the base tile layer (e.g., OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
  }).addTo(map);
  
  // Access the locations array from the window object
  let locations = window.locations;
  
  // Loop through the locations array and add markers to the map
  locations.forEach(function (location) {
      let marker = L.marker(location.coordinates).addTo(map);
      marker.bindPopup('<b>' + location.name + '</b><br>' + location.location);
  });
  // }
  });