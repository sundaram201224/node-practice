const express = require('express');
const app = express();
const PORT = 3000; 

app.use(express.json()); 

// GET method
app.get('/sundar', (req, res) => {
    res.send('Hi Sundar');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});