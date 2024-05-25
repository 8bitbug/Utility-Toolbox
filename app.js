const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server running on Port ${PORT}`)});

app.get('/', (req, res) => {
    res.sendFile(path.join(__filename, 'index.html'))
})