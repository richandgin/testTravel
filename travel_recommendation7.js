function cmdSearch() {
    var searchStr = document.getElementById('conditionInput').value;
    /*lcSearchStr = searchStr.toLowerCase();*/
    var locationFound = false;

     /*let containsBeaches = searchStr.toLowerCase().includes('beach');
    alert('Contains Beaches: ', containsBeaches);  */

    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        // Access the array of places
        /*console.log ('data = ', data);
        const places = data.countries;*/
        /*console.log ('Data 0:',data[0].countries[1])*/

        /*The next phase is to create statement classifies the search
        by Beach, Temple, or Country or any variations and then populate
        the results with the appropriate data. The data shown will be displayed
        by some variation of the following data retrievals */

        if (searchStr.toLowerCase().includes('beach')) {
            locationFound = true;
            const allbeaches = data.beaches;

            /*alert('Location Type entered: ' + location);
            console.log ('All Beaches:', allbeaches); */

            // Loop through the beaches and log their names
            allbeaches.forEach(beach => {
                console.log(`Beach: ${beach.name}, Picture: ${beach.imageUrl}, Description: ${beach.description}`);
                
                var beachDiv = document.createElement('div');
                /*beachDiv.classList.add('beach');  */
                beachDiv.classList = "card-info"; 
                beachDiv.style = "width:100%";
                var beachName = document.createElement('H2');
                beachName.textContent = beach.name;
                beachDiv.appendChild(beachName);
                beachDiv.appendChild(beachDiv);
            });
        }; 

        if (searchStr.toLowerCase().includes('temple')) {
            locationFound = true;
            const alltemples = data.temples;
    
            /*alert('Location Type entered: ' + location);
            console.log ('All Temples:', alltemples);*/

            // Loop through the temples and log their names
            alltemples.forEach(temple => {
                console.log(`Temple: ${temple.name}, Picture: ${temple.imageUrl}, Description: ${temple.description}`);
                });
        };    

        if (searchStr.toLowerCase().includes('country')) {
            locationFound = true;
            const allcountries = data.countries;
            /*
            alert('Location Type entered: ' + location);
            console.log ('All Countries:', allcountries); */

            // Loop through the countries and log their cities
            allcountries.forEach(country => {
                console.log(`Country: ${country.name}`);
                  country.cities.forEach(city => {
                    console.log(`  City: ${city.name}, Picture: ${city.imageUrl}, Description: ${city.description}`);
                    });  
                }); 
        };
        
        if (locationFound === false) {
            alert('Sorry, the location you entered "' + searchStr + '" was not found. Please try the words "Beach", "Temples", or "Country".');
        };
       

    })
    .catch(error => console.error('Error fetching the JSON file:', error));
};