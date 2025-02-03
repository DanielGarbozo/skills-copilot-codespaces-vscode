// Create web server
// Create an API that sends back comments
// Create an API that creates new comments

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create an API that sends back comments
app.get('/comments', (req, res) => {
    res.send('Comments will be sent here');
});

// 3. Create an API that creates new comments
app.post('/comments', (req, res) => {
    res.send('Comments will be created here');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
