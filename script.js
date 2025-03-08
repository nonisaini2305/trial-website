fetch('products.json')
  .then(response => response.json())
  .then(products => {
    let productContainer = document.getElementById('product-list');
    productContainer.innerHTML = products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `).join('');
  })
  .catch(error => console.error("Error loading products:", error));
