
// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Product data (usually would come from backend)
const products = {
    1: { name: 'Product 1', price: 20 },
    2: { name: 'Product 2', price: 30 }
};

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.closest('.product').dataset.id;
        addToCart(productId);
    });
});

function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    
    if(existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: products[productId].name,
            price: products[productId].price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCart();
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    let total = 0;
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${itemTotal}</span>
        `;
        cartItems.appendChild(div);
    });
    
    totalElement.textContent = `Total: $${total}`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initial cart display
updateCartDisplay();