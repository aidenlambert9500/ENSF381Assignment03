let cart = [];


function addToCart(productName, unitPrice) {

    const existingItem = cart.find(item => item.productName === productName);

    if (existingItem) {
   
        existingItem.quantity += 1;
    } else {

        cart.push({ productName, unitPrice, quantity: 1 });
    }


    alert(`${productName} has been added to the cart!`);


    updateCartDisplay();
}


function updateCartDisplay() {
    const cartTable = document.getElementById('cartTable');
   
    cartTable.innerHTML = '';

   
    cart.forEach(item => {
        const row = cartTable.insertRow();
        const cellProductName = row.insertCell(0);
        const cellUnitPrice = row.insertCell(1);
        const cellQuantity = row.insertCell(2);
        const cellRemove = row.insertCell(3);

        cellProductName.textContent = item.productName;
        cellUnitPrice.textContent = `$${item.unitPrice.toFixed(2)}`;
        cellQuantity.textContent = item.quantity;

 
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'add-to-cart';
        removeButton.onclick = function () {
            removeFromCart(item.productName);
        };
        cellRemove.appendChild(removeButton);
    });
}

function removeFromCart(productName) {

    const index = cart.findIndex(item => item.productName === productName);

    if (index !== -1) {

        cart[index].quantity -= 1;


        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }

       
        updateCartDisplay();
    }
}
