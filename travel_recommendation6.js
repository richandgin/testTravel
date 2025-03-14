fetch('./travel_recommendation_api2.json')
  .then(response => response.json())
  .then(data => {
    // Access the array of places
    console.log ('data = ', data);
    const places = data[0].cities;
    const all = data;
    console.log ('Data 0:',data[0].cities[1])

    const foundcities = data
        .filter(city => city.name === 'Japan');
    console.log ('City =', foundcities);

    // Loop through the places and log their names
    console.log('Countries =', places);
    places.forEach(place => {
      console.log(`Place: ${place.name}, Country: ${place.description}`);
    });
  })
  .catch(error => console.error('Error fetching the JSON file:', error));