// Declare product prices
var prices = [300, 700, 500];

// Get references to quantity input elements
var quantities = [
    document.getElementById('product1Quantity'),
    document.getElementById('product2Quantity'),
    document.getElementById('product3Quantity')
];

// Get reference to total cost element
var totalCostElement = document.getElementById('totalCost');

// Function to calculate and display total cost
function calculateTotal() {
    var totalCost = 0;

    for (var i = 0; i < prices.length; i++) {
        var quantity = Number(quantities[i].value);
        totalCost += prices[i] * quantity;
    }

    totalCostElement.textContent = 'Total Cost: $' + totalCost;
}

// Event listener for button click event
document.querySelector('button').addEventListener('click', calculateTotal);

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
});







