const express = require('express');
const router = express.Router();

// Loan service endpoint - GET /loans/{number}
router.get('/:number', (req, res) => {
    const { number } = req.params;
    
    // Validate loan number
    if (!number || number.trim() === '') {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Loan number is required'
        });
    }
    
    // Simulate loan validation
    if (number.length < 5) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Loan number must be at least 5 characters long'
        });
    }
    
    // Return loan details (matching the Spring Boot response structure)
    const loanDetails = {
        number: number,
        type: 'car',
        loan: 400000,
        emi: 3258,
        tenure: 18,
        currency: 'USD',
        interestRate: 8.5,
        borrower: 'Jane Smith',
        status: 'Active',
        nextPaymentDate: '2024-08-15',
        remainingBalance: 350000,
        startDate: '2023-02-01',
        endDate: '2024-08-01'
    };
    
    res.json(loanDetails);
});

// Get all loans (additional endpoint for testing)
router.get('/', (req, res) => {
    res.json({
        message: 'Loan service is running',
        service: 'loan',
        port: process.env.PORT || 5000,
        endpoints: [
            'GET /api/loans/{number} - Get loan details'
        ]
    });
});

module.exports = router;
