
    const products = [
    {id: 1, name: "Pizza", price: 30 },
    {id: 2, name: "Hamburger", price: 15 },
    {id: 3, name: "Bread", price: 20 },
    {id: 4, name: "Cake", price: 10 }
    ];

    let cart = [];

    function renderProducts() {
    const listProduct = document.getElementById('list-product');
    listProduct.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
    div.className = 'media product';
    div.innerHTML = `
    <div class="media-left">
        <img class="media-object" src="images/${product.name.toLowerCase()}.jpg" alt="${product.name}" />
    </div>
    <div class="media-body">
        <h4 class="media-heading">${product.name}</h4>
        <span class="price">${product.price} USD</span>
        <button class="btn btn-success btn-sm" onclick="addToCart(${product.id})">Add to cart</button>
    </div>
    `;
    listProduct.appendChild(div);
    });
}

    function renderCart() {
    const cartBody = document.getElementById('my-cart-body');
    const cartFooter = document.getElementById('my-cart-footer');
    cartBody.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        total += item.price * item.quantity;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="row">${idx + 1}</th>
    <td>${item.name}</td>
    <td>${item.price} USD</td>
    <td>
        <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)" style="width:60px;" />
    </td>
    <td>
        <a class="label label-info update-cart-item" onclick="updateQuantity(${item.id}, ${item.quantity})">Update</a>
        <a class="label label-danger delete-cart-item" onclick="deleteCartItem(${item.id})">Delete</a>
    </td>
    `;
    cartBody.appendChild(tr);
    });
    cartFooter.innerHTML = `
    <tr>
        <td colspan="4">
            There are <b>${cart.length}</b> items in your shopping cart.
        </td>
        <td colspan="2" class="total-price text-left">${total} USD</td>
    </tr>
    `;
}

    function addToCart(id) {
    const product = products.find(p => p.id === id);
    const exist = cart.find(item => item.id === id);
    if (exist) {
        exist.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
    showNotification('Add to cart successfully');
}

    function updateQuantity(id, value) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, parseInt(value));
    renderCart();
    showNotification('Quantity updated');
    }
}

    function deleteCartItem(id) {
        cart = cart.filter(item => item.id !== id);
    renderCart();
    showNotification('Item deleted');
}

    function showNotification(msg) {
    const noti = document.getElementById('mnotification');
    noti.textContent = msg;
    noti.style.display = 'block';
    setTimeout(() => {
        noti.style.display = 'none';
    }, 1500);
}

    
    window.onload = function() {
        renderProducts();
    renderCart();
    document.getElementById('mnotification').style.display = 'none';
};
