const API_URL = "https://fakestoreapi.com/products";

// GET
async function getProducts() {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log("All Products:");
    console.log(data);
}

// POST
async function addProduct() {
    const product = {
        title: "Wireless Headphones",
        price: 1999,
        category: "electronics"
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    const data = await response.json();

    console.log("Added Product:");
    console.log(data);
}

// PUT
async function updateProduct() {
    const product = {
        title: "Updated Product",
        price: 2500,
        category: "electronics"
    };

    const response = await fetch(`${API_URL}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    const data = await response.json();

    console.log("Updated Product:");
    console.log(data);
}

// PATCH
async function updatePrice() {
    const product = {
        price: 3000
    };

    const response = await fetch(`${API_URL}/1`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    const data = await response.json();

    console.log("Updated Product Price:");
    console.log(data);
}

// DELETE
async function deleteProduct() {
    const response = await fetch(`${API_URL}/1`, {
        method: "DELETE"
    });

    const data = await response.json();

    console.log("Deleted Product:");
    console.log(data);
}