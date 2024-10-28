// Task 1: Setup HTML Structure for Order Form

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('order-summary');

// Task 2: Add Event Listener for Product Selection

productSelector.addEventListener('change' , updateTotalPrice);
quantityInput.addEventListener('input' , updateTotalPrice);

// Task 3: Calculate Total Price Dynamically

function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// 