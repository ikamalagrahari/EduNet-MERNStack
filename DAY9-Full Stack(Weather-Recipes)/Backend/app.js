const express = require("express");
const cors =  require("cors");

const app = express();
app.use(cors());
const port = 3000;

const weatherdata = [
  {
    id: 1,
    city: "Mumbai",
    tempreature: "27",
    preassure: "1012mb",
    wind: "5kmph",
    city_img:
      "https://www.mistay.in/travel-blog/content/images/2021/07/Roam-around-7-Historcial-Monuments-of-Mumbai--Gateway-of-India-I-Mistay.jpeg",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/weather-ios-logo-png-transparent.png",
  },
  {
    id: 2,
    city: "Osaka",
    tempreature: "25",
    preassure: "1020mb",
    wind: "5kmph",
    city_img:
      "https://a.cdn-hotels.com/gdcs/production3/d339/a08760c4-932d-4055-bd82-22b6339f99d5.jpg",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/weather-ios-logo-png-transparent.png",
  },
  {
    id: 3,
    city: "Tokyo",
    tempreature: "28",
    preassure: "1019mb",
    wind: "9kmph",
    city_img:
      "https://s.yimg.com/ny/api/res/1.2/jvkzkQLZ51wXmHswNTiktg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-07/59a4bc60-f23c-11eb-bf75-c38993010fb7",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/weather-ios-logo-png-transparent.png",
  },
];


// app.get("/city/:id", (req, res) => {
//     const cityData = weatherdata.find(c => c.id === parseInt(req.params.id));
//     if (cityData) {
//         res.json(cityData);
//     } else {
//         res.status(404).send("City not found");
//     }
// });


app.get("/", (req, res)=>{
    res.json(weatherdata);
})

app.listen(port, ()=>{
    console.log(`the server running at http: //localhost:${port}`);
})
