const express = require('express')
const app = express()
const port = 5000
const fs = require("fs")

const obj = {
    id:1,
    title:"Cars",
}

const obj1=[
    {
        id:"25",
        title:"space"
    },
    {
        id:"21",
        title:"sea"
    }
]

//write the file
// app.get("/", (req,res)=>{
//     fs.writeFileSync("data.json",JSON.stringify(obj1))
//     res.send('File is Created')
// })

// READ THE FILE
app.get('/',(req,res) =>{
    const a = fs.readFile('data.json','utf-8',(err,data)=>{
        if (err){
            console.log(err)
        }
        else {
            res.send(data)
        }
    })
    
})

// UPDATE THE FILE
// app.get('/',(req,res) =>{
//     fs.appendFile('data.json',JSON.stringify(obj),(err,data) =>{
//         if (err){
//             console.log(err)
//         }
//         else{   
//             res.send("File Updated")
//         }
    
// })
// })

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
})
