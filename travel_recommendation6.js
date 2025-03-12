fetch('./travel_recommendation_api3.json')
  .then(response => response.json())
  .then(data => {
    // Access the array of places
    console.log ('data = ', data);
    const places = data.places;

    // Loop through the places and log their names
    console.log('Countries =', places);
    places.forEach(place => {
      console.log(`Place: ${place.name}, Country: ${place.country}`);
    });
  })
  .catch(error => console.error('Error fetching the JSON file:', error));