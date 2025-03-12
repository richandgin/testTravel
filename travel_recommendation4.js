function cmdSearch() {
    alert ('Entered Function');
fetch('./travel_recommendation_api2.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
    const parsedData = response.json();
    console.log ('parsedData = ', parsedData);

  })
  .then(data => {
    // Convert the search keyword to lowercase
    const searchKeyword = 'Japan';
    console.log (searchKeyword);
    const testdata = data[0];
    console.log ('data[0] = ',testdata);
    const filteredCountry = data.filter(locations => locations.name === 'Japan');
    console.log ('filteredCountry = ',filteredCountry);
    const parsedData = data.json();
    console.log ('parsedData = ', parsedData);


    // Filter the data for entries related to beaches    
    /*const beachRecommendations = data.filter(item => {
      return item.name === searchKeyword}
    );*/
    /*const beachRecommendations = data.filter(item => {
        return[] item.cities.name === 'Tokyo, Japan'});*/

    const cities = filteredCountry.find(city => city.cities === 'Japan')
        if (cities) {
            const recommendations = cities.name.filter(city = city.name.includes('Japan'))
        };

    console.log ('Cities :',cities);

    /* const country = data.find(country => country.name === 'Japan')
    if (country) {
        beachRecommendations = country.cities.filter(city => city.name.includes('Japan'));
      }; */

   
    const testInfo = data;
    // Display the recommendations
    console.log('JSON data: ', data);   
    console.log('testdata data[0]: ', testdata);
    console.log('Temples: ', testInfo[0].temples);
    console.log('filtered Results: ', recommendations)
    // You can now use this data to display the recommendations on your website
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
};

/*/ Sample JSON data
const data = [
    {
      "id": 1,
      "name": "Australia",
      "cities": [
        {
          "name": "Sydney, Australia",
          "imageUrl": "Sydney.jpg",
          "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
        },
        {
          "name": "Melbourne, Australia",
          "imageUrl": "enter_your_image_for_melbourne.jpg",
          "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
        }
      ]
    },
    {
      "id": 2,
      "name": "Japan",
      "cities": [
        {
          "name": "Tokyo, Japan",
          "imageUrl": "enter_your_image_for_tokyo.jpg",
          "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
        },
        {
          "name": "Kyoto, Japan",
          "imageUrl": "enter_your_image_for_kyoto.jpg",
          "description": "Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses."
        }
      ]
    }
  ];*/
  
  // Function to filter cities by city name within a specific country
  function filterCitiesByCountryAndCityName(countryName, cityName) {
    const country = data.find(country => country.name === countryName);
    if (country) {
      return country.cities.filter(city => city.name.includes(cityName));
    }
    return [];
  }
  
  // Example usage
  const filteredCities = filterCitiesByCountryAndCityName("Australia", "Sydney");
  console.log(filteredCities);