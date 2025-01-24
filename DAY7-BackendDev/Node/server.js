const http = require('http');
const fetch = require('node-fetch'); // Ensure node-fetch is installed

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const ary = [1, 2, 3, 4, 5];

const server = http.createServer(async (req, res) => {
    console.log('Incoming request for:', req.url);

    // Set response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Fetch data from the external API
    try {
        console.log('Fetching products...');
        const response = await fetch('https://dummyjson.com/products');
        
        // Check if the response is OK (status 200)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        console.log('Products fetched successfully.');

        // Send response with basic info, array, and products
        res.write(`${obj.name}, ${obj.age}, ${obj.city}\n`);
        res.write(`Array is: ${ary[0]}, ${ary[1]}, ${ary[2]}\n`);
        res.write('Fetched Products:\n');
        res.write(JSON.stringify(products, null, 2)); // Convert products to a pretty JSON string
    } catch (error) {
        console.error('Error fetching products:', error);
        res.write('Error fetching product data.\n');
    }

    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

