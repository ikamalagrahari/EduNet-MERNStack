const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors'); //Middeleware to whitelist domains(APIs) to access the server 
                              // npm i cors
app.use(express.json());
app.use(cors());

const kids = [ 
    {
        id :1,
        img : "https://m.media-amazon.com/images/I/41Q3xSjuwhL._SX300_SY300_QL70_FMwebp_.jpg",
        title : ' Jam & Honey Tusker Elephant Ride-On Rocker Toy for Kids',
        price : "1,299",
        rating : "4.3",
    },
    {
        id :2,
        img : "https://m.media-amazon.com/images/I/41bO2nko34L._SX300_SY300_QL70_FMwebp_.jpg",
        title : 'Sunny Ride on & Car for Kids with Music & Horn Steering, ',
        price : "1,199",
        rating : "4.2",
    },
    {
        id :3,
        img : "https://m.media-amazon.com/images/I/41CTx0qDaiL._SX300_SY300_QL70_FMwebp_.jpg",
        title : 'Littles Junior Ring Stacking Toys for Kids 6 rings Multi-Colour Kids Toys',
        price : "999",
        rating : "4.2",
    },
    {
        id :4,
        img : "https://m.media-amazon.com/images/I/41cX7vTDtuL._SX300_SY300_QL70_FMwebp_.jpg",
        title : ' Colourful Activity Chain Links',
        price : "199",
        rating : "4.0",
    },
    {
        id :5,
        img : "https://m.media-amazon.com/images/I/61qTiRW6LHL._SY355_.jpg",
        title : 'Wembley Pull String Toys For Babies Montessori Toys For 4m+ Year Old|',
        price : "999",
        rating : "4.5",
    },
]

const men = [
    {
        id :1,
        img : "https://m.media-amazon.com/images/I/713n+TxyfCL._SY550_.jpg",
        title : 'Amazon Brand - Symbol Men Solid Cotton Rich Polo T Shirt ',
        price : "5999",
        rating : "4.2",
    },
    {
        id :2,
        img : "https://m.media-amazon.com/images/I/51iu3cuF7CL._SX522_.jpg",
        title : 'Fitness Mantra® Gym Winter Cap & Muffler for Men',
        price : "1999",
        rating : "4.1",
    },
    {
        id :3,
        img : "https://m.media-amazon.com/images/I/41KrxNrRlfL._SY300_SX300_QL70_FMwebp_.jpg",
        title : 'VALKYRIE Silicone Body Scrubber,Shower Scrubber for Nourishing Cleaning & Exfoliating Your Skin Lather Boosting Bristles with Ergonomic No-Slip Handle',
        price : "1299",
        rating : "4.8",
    },
    {
        id :4,
        img : "https://m.media-amazon.com/images/I/31Tw5PF8hlL._SX300_SY300_QL70_FMwebp_.jpg",
        title : ' Silicone Body Scrubber, Silicone Loofah, Body Wash Scrubber,',
        price : "999",
        rating : "4.5",
    },
    {
        id :5,
        img : "https://m.media-amazon.com/images/I/41j0kXXIkZL._SX300_SY300_QL70_FMwebp_.jpg",
        title : 'SNDYI Silicone Body Scrubber, Exfoliating Body Scrubber for Sensitive Skin, Soft Massage Body,',
        price : "599",
        rating : "4.2",
    },
]

const women =[
    {

        id :1,
        img : "https://m.media-amazon.com/images/I/41q8s3RHCQL._SX300_SY300_QL70_FMwebp_.jpg",
        title : 'Body Bathing Brush with Soft Bristle and Loofah Body Back Scrubber Brush Massage Brush',
        price : "699",
        rating : "4.2",
    },
    {
        id :2,
        img : "https://m.media-amazon.com/images/I/81f56tEEbJL._SY550_.jpg",
        title : 'Alan Jones Clothing Women Cotton Hooded Neck',
        price : "5999",
        rating : "3.2",

    },
    {
        id :3,
        img : "https://m.media-amazon.com/images/I/71bPlThj2KL._SY550_.jpg",
        title : 'Amazon Brand - Myx Women Solid Regular Embroidered Kurta Set',
        price : "9499",
        rating : "4.2",
    },
    {
        id :4,
        img : "https://m.media-amazon.com/images/I/71nQETUrreL._SX522_.jpg",
        title : 'SNMMIFER Silicone Nipple Covers Reusable for Women (2 Pair) with Double',
        price : "999",
        rating : "4.0",
    },
    {
        id :5,
        img : "https://m.media-amazon.com/images/I/51VyTkeXgLL._SY695_.jpg",
        title : 'ADISA Womens Girls Cross Body Sling Bag with Pouch',
        price : "1999",
        rating : "3.4",
    },   
]


app.get('/kids', (req, res) => {
    res.send(kids);
});

app.get('/men', (req, res) => {
    res.send(men);      
});

app.get('/women', (req, res) => {
    res.send(women);
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});