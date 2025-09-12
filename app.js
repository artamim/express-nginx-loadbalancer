const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/', (req, res) => {
    const containerName = process.env.CONTAINER_NAME || 'unknown';
    res.sendFile(path.join(__dirname, 'public/index.html'), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error serving index.html');
        }
    });
});

// Route to serve container name dynamically
app.get('/container-name', (req, res) => {
    const containerName = process.env.CONTAINER_NAME || 'unknown';
    res.json({ containerName });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});