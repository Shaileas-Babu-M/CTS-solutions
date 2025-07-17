// API base URL
const API_BASE_URL = '';

// Show loading spinner
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('apiResponse').textContent = '';
}

// Hide loading spinner
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Display API response
function displayResponse(data, isError = false) {
    const responseContainer = document.getElementById('apiResponse');
    responseContainer.textContent = JSON.stringify(data, null, 2);
    
    // Update styling based on response type
    responseContainer.className = `response-container ${isError ? 'error' : 'success'}`;
}

// Handle API errors
function handleApiError(error) {
    console.error('API Error:', error);
    
    const errorResponse = {
        error: 'Request Failed',
        message: error.message || 'An unexpected error occurred',
        timestamp: new Date().toISOString()
    };
    
    displayResponse(errorResponse, true);
}

// Get account details
async function getAccountDetails() {
    const accountNumber = document.getElementById('accountNumber').value.trim();
    
    if (!accountNumber) {
        displayResponse({
            error: 'Validation Error',
            message: 'Please enter an account number'
        }, true);
        return;
    }
    
    showLoading();
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/accounts/${accountNumber}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || `HTTP ${response.status}`);
        }
        
        displayResponse(data);
    } catch (error) {
        handleApiError(error);
    } finally {
        hideLoading();
    }
}

// Get loan details
async function getLoanDetails() {
    const loanNumber = document.getElementById('loanNumber').value.trim();
    
    if (!loanNumber) {
        displayResponse({
            error: 'Validation Error',
            message: 'Please enter a loan number'
        }, true);
        return;
    }
    
    showLoading();
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/loans/${loanNumber}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || `HTTP ${response.status}`);
        }
        
        displayResponse(data);
    } catch (error) {
        handleApiError(error);
    } finally {
        hideLoading();
    }
}

// Handle Enter key press
document.getElementById('accountNumber').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getAccountDetails();
    }
});

document.getElementById('loanNumber').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getLoanDetails();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set default values for testing
    document.getElementById('accountNumber').value = '00987987973432';
    document.getElementById('loanNumber').value = 'H00987987972342';
    
    // Display initial message
    displayResponse({
        message: 'Microservices API is ready!',
        services: ['Account Service', 'Loan Service'],
        instructions: 'Enter an account number or loan number above and click the respective button to test the API endpoints.',
        endpoints: {
            accounts: '/api/accounts/{number}',
            loans: '/api/loans/{number}',
            health: '/health'
        }
    });
    
    console.log('🚀 Microservices API Client initialized');
    console.log('📊 Account Service: /api/accounts/{number}');
    console.log('💰 Loan Service: /api/loans/{number}');
});
