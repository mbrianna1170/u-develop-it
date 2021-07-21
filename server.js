const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// // Get route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World!'
//     });
// });

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        //your mysql password
        password: 'Miso',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});