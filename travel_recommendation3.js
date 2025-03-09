    async function fetchDataAndFilter(url, filterFunction) {
        try {
          const response = await fetch(url);
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          const filteredData = data.filter(filterFunction);
          return filteredData;
        } catch (error) {
          console.error("Fetching or filtering error:", error);
          return [];
        }
      }
      
      // Example usage:
      const apiUrl = "./travel_recommendation_api.json";
      
      // Example filter: returns items where the 'age' property is greater than 25
      const nameFilter = (item) => item.name > "Japan";
      
      async function cmdSearch() {
        const filteredResults = await fetchDataAndFilter(apiUrl, nameFilter);
        console.log("Filtered Data:", filteredResults);
      }
      
      processData();