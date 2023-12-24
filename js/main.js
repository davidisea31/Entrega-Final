// Define your products data directly in your JavaScript file
var products = [
    {
        "id": "product1",
        "name": "Xbox Series S",
        "price": 300,
        "image": "image/Xbox.avif",
        "description": "Xbox Series S es la consola de nueva generación más elegante y compacta de Microsoft, con velocidades y rendimiento de nueva generación en un formato 60% más pequeño que la Xbox Series X.",
        "maxQuantity": 30
    },
    {
        "id": "product2",
        "name": "PlayStation 5",
        "price": 700,
        "image": "image/PS5.jpeg",
        "description": "La PlayStation 5 de Sony es la última generación de consolas de juegos, ofreciendo gráficos impresionantes, velocidades de carga increíblemente rápidas y una impresionante biblioteca de juegos.",
        "maxQuantity": 30
    },
    {
        "id": "product3",
        "name": "3D Virtual Reality Glasses",
        "price": 500,
        "image": "image/3DRVH.jpeg",
        "description": "Las gafas de realidad virtual 3D te permiten sumergirte en mundos virtuales, ofreciendo una experiencia de juego inmersiva como ninguna otra.",
        "maxQuantity": 30
    }
];

// Loop through the array of products
$.each(products, function(i, product) {
    // Create the product elements
    var productLabel = $('<label>').attr('for', product.id).addClass('sub').text(product.name);
    var productPrice = $('<p>').addClass('price').text('$' + product.price);
    var productImage = $('<img>').attr('src', product.image).attr('alt', product.name).css('width', '200px'); // Set the image width
    var productInput = $('<input>').attr('type', 'number').attr('id', product.id + 'Quantity').attr('min', 0).attr('max', product.maxQuantity).val(0);

    // Append the product elements to the form
    $('#productForm').append(productLabel, productPrice, productImage, productInput);
});

// Function to calculate and display total cost
function calculateTotal() {
    let totalCost = 0;

    for (let i = 0; i < products.length; i++) {
        let quantity = Number($('#' + products[i].id + 'Quantity').val());
        totalCost += products[i].price * quantity;
    }

    // Save quantities and total cost to local storage
    localStorage.setItem('quantities', JSON.stringify(products.map(product => $('#' + product.id + 'Quantity').val())));
    localStorage.setItem('totalCost', totalCost);

    // Display total cost
    $('#totalCost').text('Total Cost: $' + totalCost);
}

// Make calculateTotal available globally
window.calculateTotal = calculateTotal;

// Load quantities and total cost from local storage when the page loads
window.addEventListener('load', function() {
    let savedQuantities = JSON.parse(localStorage.getItem('quantities'));
    let savedTotalCost = localStorage.getItem('totalCost');

    if (savedQuantities) {
        products.forEach((product, index) => $('#' + product.id + 'Quantity').val(savedQuantities[index]));
    }

    if (savedTotalCost) {
        $('#totalCost').text('Total Cost: $' + savedTotalCost);
    }
});





