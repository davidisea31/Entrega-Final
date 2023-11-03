function calculateTotal() {
    var totalCost = 0;
    var form = document.getElementById('productForm');
    var prices = {product1: 300, product2: 700, product3: 500}; // Replace with actual prices

    for (var product in prices) {
        var quantity = form[product].value;
        if (quantity > 0) {
            totalCost += prices[product] * quantity;
        }
    }

    document.getElementById('totalCost').innerText = 'Total Cost: ' + totalCost;
}