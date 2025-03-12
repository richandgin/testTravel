// Function to fetch and parse JSON data
async function fetchAndParseJSON(url) {
  try {
    // Fetch the JSON file
    const response = await fetch(url);
    
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON data
    const data = await response.json();
    
    // Log the parsed data
    console.log(data);
    const countries = data.countries;
    console.log('Countries -', countries)

    const filteredCountry = data.find(locations => locations.name === 'Japan');
    console.log('Locations Name = ', filteredCountry);
    // Return the parsed data for further use
    return data;
  } catch (error) {
    console.error('Error fetching or parsing JSON:', error);
  }
}

// Example usage
fetchAndParseJSON('./travel_recommendation_api.json');