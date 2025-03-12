fetch('./travel_recommendation_api2.json')
  .then(response => response.json())
  .then(data => {
    // Access the array of places
    console.log ('data = ', data);
    const places = data[1].cities[0].name[0];

    // Loop through the places and log their names
    console.log('Countries =', places);
    places.forEach(place => {
      console.log(`Place: ${place.name}, Country: ${place.description}`);
    });
  })
  .catch(error => console.error('Error fetching the JSON file:', error));