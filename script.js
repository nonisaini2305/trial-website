document.addEventListener("DOMContentLoaded", () => {
    loadCart();
});

// Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart Function
function addToCart(productName, productPrice, productImage) {
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Load Cart on Page Load
function loadCart() {
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");

    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-img">
            <div class="cart-details">
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart('${item.name}')" class="remove-btn">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalPriceElement.innerText = `Total: ₹${total}`;
}

// Remove from Cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    saveCart();
    updateCartUI();
}

// Clear Cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}
