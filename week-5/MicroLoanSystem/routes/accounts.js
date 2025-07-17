const express = require('express');
const router = express.Router();

// Account service endpoint - GET /accounts/{number}
router.get('/:number', (req, res) => {
    const { number } = req.params;
    
    // Validate account number
    if (!number || number.trim() === '') {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Account number is required'
        });
    }
    
    // Simulate account validation
    if (number.length < 5) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Account number must be at least 5 characters long'
        });
    }
    
    // Return account details (matching the Spring Boot response structure)
    const accountDetails = {
        number: number,
        type: 'savings',
        balance: 234343,
        currency: 'USD',
        accountHolder: 'John Doe',
        branch: 'Main Branch',
        status: 'Active',
        createdDate: '2023-01-15',
        lastActivity: new Date().toISOString()
    };
    
    res.json(accountDetails);
});

// Get all accounts (additional endpoint for testing)
router.get('/', (req, res) => {
    res.json({
        message: 'Account service is running',
        service: 'account',
        port: process.env.PORT || 5000,
        endpoints: [
            'GET /api/accounts/{number} - Get account details'
        ]
    });
});

module.exports = router;
