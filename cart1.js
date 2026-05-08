

function showCategory(categoryName) {

    document.getElementById('Main-courses-section').style.display = 'none';
    document.getElementById('Appetizers-section').style.display = 'none';
    document.getElementById('Desserts-section').style.display = 'none';
document.getElementById('Beverages-section').style.display = 'none';

   
    document.getElementById(categoryName + '-section').style.display = 'block';
}
var cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(itemName, price) {

    let found = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === itemName) {
            cart[i].qty++;
            found = true;
            break;
        }
    }

    if (!found) {
        cart.push({
            name: itemName,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
}
function loadCart() {

    let output = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let itemTotal = cart[i].price * cart[i].qty;
        total += itemTotal;

        output += "<p>"
            + cart[i].name +
            " | Qty: " + cart[i].qty +
            " | Price: " + itemTotal + " SAR"
            + "</p>";
    }

    document.getElementById("cart-items").innerHTML = output;
    document.getElementById("total").innerHTML = "Total: " + total + " SAR";
}

