// Create a function fetchData that simulates fetching data from a server. 
// This function should take two arguments: a url (string) and a callback function. 
// Use setTimeout to simulate a delay of 2 seconds before calling the callback function with the fetched data.
function fetchData(url, callback) {
    console.log(`Fetching data from ${url}`);
    setTimeout(() => {
        // After the delay, the callback executes and creates a string
        const data = `Data from ${url}`;
        callback(data);
    }, 2000)
}

fetchData("https://api.example.com/users", (data) => {
    console.log(`Received: ${data}`);
});