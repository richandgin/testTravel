function cmdSearch() {
    alert('Entered Function');
    fetch('./travel_recommendation_api.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })

    .then(data => {
        // Convert the search keyword to lowercase
        const searchKeyword = 'japan'.toLowerCase();
        const beachRecommendations = [];

        // Filter the data for entries related to beaches    
        for (let item of data) {
            if (item.name.toLowerCase().includes(searchKeyword) || 
                item.description.toLowerCase().includes(searchKeyword)) {
            beachRecommendations.push(item);
            }
        }

        // Display the recommendations
        console.log(beachRecommendations);
        });
    };





