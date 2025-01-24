const express = require('express');
const { title } = require('process');
const app = express() ;
const PORT = 3000;
const cors = require('cors'); //Middeleware to whitelist domains(APIs) to access the server 
                              // npm i cors
app.use(express.json());                        

app.use(cors());

const products = [
    {   
        id :1,
        img : "https://th.bing.com/th?id=OPAC.amKcNTD%2fSJPA0w474C474&w=592&h=550&o=5&pid=21.1",
        title : 'boAt Rockerz 255 Pro',
        price : "999",
        rating : "4.2",
    },
    {   
        id : 2,
        img : "https://m.media-amazon.com/images/I/41549pixTSL._SX300_SY300_QL70_FMwebp_.jpg",
        title : 'boAt Airdopes 91 Prime',
        price : "1999",
        rating : "4.5",
    }
]

app.get('/', (req, res) => {
    res.send(products);
});


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost: ${PORT}`);
});

