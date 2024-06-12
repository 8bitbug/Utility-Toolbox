const path = require('path');
const express = require('express');
const app = express();

const mysql = require('mysql');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'src')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'sign-up.html'));
});

app.post('/signup', async (req, res) => {
    const { email, username, password } = req.body;

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'myrootpassword',
        database: 'mydatabase'
    });

    connection.connect((err) => {
        if (err) {
            console.error("Error connecting to mysql");
            return;
        };
        console.log("Connected to mysql")
    });

    const userCredentials = {
        username: username,
        email: email,
        password: password
    };

    connection.query('INSERT INTO users SET ?', userCredentials, (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          return;
        }
        console.log('Data inserted successfully');
        
        connection.end((err) => {
          if (err) {
            console.error('Error closing connection:', err);
            return;
          }
          console.log('MySQL connection closed');
          return res.statusCode(200).json({ message: "Succesfully completed the request"})
        });
      });
})