// Refactor the fetchData function to return a promise instead of using a callback.
function fetchData(url) {
    return new Promise((resolve, reject) => {
        // If the url is empty or not provided, reject the promise with an error message: "Invalid URL"
        if (!url || url.trim() === "") {
            reject(new Error("Invalid URL"));
            return;
        }
        console.log(`Fetching data from ${url}`);
        // Simulate a 2-second delay before resolving the promise with the data
        setTimeout(() => {
            const data = `Data from ${url}`;
            resolve(data);
        }, 2000);
    });
}

fetchData("https://api.example.com/users")
    .then(data => {
        console.log('Received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

fetchData("")
    .then(data => {
        console.log('Received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });