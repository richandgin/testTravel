function cmdClearSearch() {
    //Set the input field to null
    document.getElementById('conditionInput').value = '';
    var locationDiv = document.getElementById('locationInfo');
        locationDiv.innerHTML = '';
}

function cmdSearch() {
    //Clear all previous searches

    var searchStr = document.getElementById('conditionInput').value;
    /*lcSearchStr = searchStr.toLowerCase();*/
    var locationFound = false;
    //Get page location for this section to update.

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

            var locationDiv = document.getElementById('locationInfo');
                locationDiv.innerHTML = '';
                /*locationDiv.classList = "split-copntent-right";*/
                locationDiv.style.width = "80%";
                locationDiv.style.background = "tranparent";
                locationDiv.style.padding = "10px";

            /*alert('Location Type entered: ' + location);
            console.log ('All Beaches:', allbeaches); */

            // Loop through the beaches and log their names
            allbeaches.forEach(beach => {
                console.log(`Beach: ${beach.name}, Picture: ${beach.imageUrl}, Description: ${beach.description}`);
                
                /*beachDiv.classList.add('beach');  */

                var locationCard = document.createElement('div');
                    locationCard.classList = "card-info";
                    locationCard.style = "width:100%";
                    locationCard.style.backgroundColor = 'white';

                var locationImage = document.createElement('img');
                    locationImage.src = beach.imageUrl;
                    locationImage.alt = beach.description;
                    locationImage.classList = "card-photo";
                    locationImage.style.borderTopLeftRadius = "10px"; 
                    locationImage.style.borderTopRightRadius = "10px";

                var locationTitle = document.createElement('h');
                    locationTitle.textContent = `Beach: ${beach.name}`;
                    locationTitle.style.fontWeight = 'bold';
                    locationTitle.style.color = 'black';
                    locationTitle.style.padding = '0px 10px';

                var locationName = document.createElement('p');
                    locationName.textContent = `Description: ${beach.description}`;
                    locationName.classList = 'card-description'

                locationCard.appendChild(locationImage);
                locationCard.appendChild(locationTitle);
                locationCard.appendChild(locationName);
                locationDiv.appendChild(locationCard);
            });
        }; 

        if (searchStr.toLowerCase().includes('temple')) {
            locationFound = true;
            const alltemples = data.temples;

            var locationDiv = document.getElementById('locationInfo');
                locationDiv.innerHTML = '';
                /*locationDiv.classList = "split-copntent-right";*/
                locationDiv.style.width = "80%";
                locationDiv.style.background = "tranparent";
                locationDiv.style.padding = "10px";
    
            /*alert('Location Type entered: ' + location);
            console.log ('All Temples:', alltemples);*/

            // Loop through the temples and log their names
            alltemples.forEach(temple => {
                console.log(`Temple: ${temple.name}, Picture: ${temple.imageUrl}, Description: ${temple.description}`);
            
                var locationCard = document.createElement('div');
                locationCard.classList = "card-info";
                locationCard.style = "width:100%";
                locationCard.style.backgroundColor = 'white';

            var locationImage = document.createElement('img');
                locationImage.src = temple.imageUrl;
                locationImage.alt = temple.description;
                locationImage.classList = "card-photo";
                locationImage.style.borderTopLeftRadius = "10px"; 
                locationImage.style.borderTopRightRadius = "10px";
            
            var locationTitle = document.createElement('h');
                locationTitle.textContent = `Temple: ${temple.name}`;
                locationTitle.style.fontWeight = 'bold';
                locationTitle.style.color = 'black';
                locationTitle.style.padding = '0px 10px';

            var locationName = document.createElement('p');
                locationName.textContent = `Description: ${temple.description}`;
                locationName.classList = 'card-description'

            locationCard.appendChild(locationImage);
            locationCard.appendChild(locationTitle);
            locationCard.appendChild(locationName);
            locationDiv.appendChild(locationCard);
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