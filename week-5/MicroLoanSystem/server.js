const express = require('express');
const path = require('path');
const accountRoutes = require('./routes/accounts');
const loanRoutes = require('./routes/loans');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Routes
app.use('/api/accounts', accountRoutes);
app.use('/api/loans', loanRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        services: ['account', 'loan'] 
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource was not found on this server',
        path: req.path
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: 'Something went wrong on our end'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Microservices API Server running on port ${PORT}`);
    console.log(`📊 Account Service: http://localhost:${PORT}/api/accounts/{number}`);
    console.log(`💰 Loan Service: http://localhost:${PORT}/api/loans/{number}`);
    console.log(`🌐 Web Interface: http://localhost:${PORT}`);
    console.log(`❤️ Health Check: http://localhost:${PORT}/health`);
});
