document.getElementById('submitBtn').addEventListener('click', async () => {
    const query = document.getElementById('queryInput').value;

    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const baseEndpoint = 'https://text-emotion-detection-klcmkfphca-uc.a.run.app/?text=';

    if (query) {
      const responseDiv = document.getElementById('response');
      responseDiv.textContent = 'Loading...';
  
      try {
        // https://us-central1-just-well-429210-n7.cloudfunctions.net/text-emotion-detection
        const encodedquery = encodeURIComponent(query);
        const endpoint = `https://us-central1-just-well-429210-n7.cloudfunctions.net/text-emotion-detection?text=${encodedquery}`;

        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            // 'Authorization': 'Bearer AIzaSyAGB9ZOLj-mnf0RVSboFHEa4FhbkImOOho'
          },
        //   body: JSON.stringify({ query: query })
        });
  
        if (response.ok) {
          const data = await response.text();
          console.log("response ", response);
          responseDiv.textContent = data;  // Adjust based on the actual response structure
        } else {
          responseDiv.textContent = 'Error: ' + response.statusText;
        }
      } catch (error) {
        responseDiv.textContent = 'Error: ' + error.message;
      }
    }
  });
  