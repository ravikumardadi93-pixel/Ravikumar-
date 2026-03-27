const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for FD Calculator AI integration
app.post('/fd-calculator', (req, res) => {
    const { principal, rate, time } = req.body;
    // Simple FD calculation logic
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    
    // Return response
    res.json({
        principal: principal,
        rate: rate,
        time: time,
        interest: interest,
        totalAmount: totalAmount
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});