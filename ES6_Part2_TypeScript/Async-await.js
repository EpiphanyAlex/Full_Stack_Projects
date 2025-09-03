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

// Refactor the code to use async/await to fetch data and handle errors.
// Create an async function named loadData that calls fetchData 
async function loadData(url) {
    try {
        const data = await fetchData(url);
        console.log('Received:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
} 

loadData("https://api.example.com/users");
// loadData(""); // Error fetching data: Error: Invalid URL