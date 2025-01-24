const express = require('express');
const fs = require('fs');
const app = express();

// app.get('/', (req, res) => {
//     // Read the CSV file
//     fs.readFile('mydata.csv', 'UTF-8', (err, data) => {
//         res.send(`
//             <pre>${data}</pre>
//             <button onclick="window.location.href='/delete'">Delete Data</button>
//         `);
//     });
// });

// Add data
app.get('/add', (req, res) => {
    fs.appendFile('mydata.csv', '2,126,Rockey Bhai,7021569569,22-01-2025\n', (err) => {
        res.send('Data Added Successfully');
    });
});

// deleting the file
app.get('/delete', (req, res) => {
    fs.unlink('mydata.csv', (err) => {
        res.send('<p>Data Deleted Successfully</p>');
    });
});

// update the file
app.get('/update', (req, res) => {
    fs.appendFile('mydata.csv', '2,126,Rockey Bhai,7021569569,0201-2025\n', (err) => {
        res.send('Data Updated Successfully');
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
