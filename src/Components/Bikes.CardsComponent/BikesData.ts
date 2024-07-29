export async function fetchBikesData() {
    try {
      const response = await fetch('https://challenges.brainster.tech/ajax_data/data.json');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Re-throw the error for the caller to handle
    }
  }