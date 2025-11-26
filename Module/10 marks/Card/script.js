const products = [
    { name: "Smartphone", price: "₹15,000", category: "Electronics", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCImMlJRSvUkx8iuPxADtiz3tRrhb0PQMz0g&s" },
    { name: "Laptop", price: "₹50,000", category: "Electronics", img: "https://images.pexels.com/photos/7974/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7974.jpg&fm=jpg" },
    { name: "T-Shirt", price: "₹500", category: "Clothing", img: "https://teelabs.in/wp-content/uploads/2021/02/polo-blue-and-white-2-1.png" },
    { name: "Jeans", price: "₹1200", category: "Clothing", img: "https://cantabilshop.com/cdn/shop/products/MDNM00403_LTHILLIUM_1.jpg?v=1757052556" },
    { name: "Headphones", price: "₹2000", category: "Electronics", img: "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png" },
    { name: "Novel Book", price: "₹350", category: "Books", img: "https://img.freepik.com/premium-vector/cute-hand-drawn-book-with-novel-bookmark-reading-cozy-evening-full-relaxation-breathtaking-story-trendy-stylized-clipart-pastel-colors-vector-illustration-isolated-background_649043-509.jpg" },
    { name: "Story Book", price: "₹250", category: "Books", img: "https://marketplace.canva.com/EAGUhHGuQOg/1/0/1003w/canva-orange-and-blue-anime-cartoon-illustrative-novel-story-book-cover-WZE2VIj5AVQ.jpg" },
    { name: "Watch", price: "₹1000", category: "Electronics", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGLizkICzqDlnF9VpoNfXpx35syhMjxxmxQ&s" },
    { name: "Casual Shirt", price: "₹700", category: "Clothing", img: "https://www.textileinfomedia.com/img/enlo/new-collection-casual-shirt-for-men-full.jpg" },
    { name: "Textbook", price: "₹450", category: "Books", img: "https://plus.unsplash.com/premium_photo-1725408045441-caab8be43801?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dCUyMGJvb2t8ZW58MHx8MHx8fDA%3D" }
];

const productContainer = document.getElementById("productContainer");

function displayProducts(items) {
    productContainer.innerHTML = "";
    items.forEach(item => {
        productContainer.innerHTML += `
        <div class="product-card">
            <img src="${item.img}" alt="">
            <div class="product-name">${item.name}</div>
            <div class="price">${item.price}</div>
            <div class="category">${item.category}</div>
        </div>`;
    });
}

displayProducts(products);

function filterProducts(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(prod => prod.category === category);
        displayProducts(filtered);
    }
}

document.getElementById("searchInput").addEventListener("keyup", function () {
    const text = this.value.toLowerCase();
    const filtered = products.filter(prod =>
        prod.name.toLowerCase().includes(text)
    );
    displayProducts(filtered);
});
