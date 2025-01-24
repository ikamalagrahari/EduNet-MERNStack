const express = require('express');
const fs = require('fs');
// const cors = require('cors');
const app = express();

app.use(express.json());
// app.use(cors());

const kids = [
    {
        id :1,
        img : "https://m.media-amazon.com/images/I/41Q3xSjuwhL._SX300_SY300_QL70_FMwebp_.jpg",
        title : ' Jam & Honey Tusker Elephant Ride-On Rocker Toy for Kids',
        price : "1,299",
        rating : "4.3",
    },
]

app.get('/', (req, res) => {
    fs.writeFileSync('kids.json', JSON.stringify (kids));
    fs.readFile('kids.json', (err, data) => {
        res.send(data);
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});