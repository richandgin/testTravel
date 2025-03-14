function cmdSearch() {
    var searchStr = document.getElementById('conditionInput').value;
    /*lcSearchStr = searchStr.toLowerCase();*/
    alert('Search for: ' + searchStr);

    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        // Access the array of places
        /*console.log ('data = ', data);*/
        const places = data[0].countries;
        /*console.log ('Data 0:',data[0].countries[1])*/
        
        const allcountries = data[0].countries;
        console.log ('All Countries:',allcountries);
        
        const alltemples = data[0].temples;
        console.log ('All Temples:',alltemples);

        const allbeaches = data[0].beaches;
        console.log ('All Beaches:',allbeaches);

        /*const foundcities = allcountries
            .filter(city => city.name === 'Japan');
        console.log ('Searched City =', foundcities);*/

        const location = data.filter (place => {
            return place.toLowerCase().includes(searchStr.toLowerCase())
        });
        console.log('Found Place: ', location);

        const foundCountry = allcountries
            .filter(country => {return country.name.toLowerCase().includes(searchStr.toLowerCase())});
        console.log ('Found Country: ', foundCountry)

        // Loop through the places and log their names
        console.log('Countries =', places);
        places.forEach(place => {
        console.log(`Place: ${place.name}, Country: ${place.cities}`);
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
};