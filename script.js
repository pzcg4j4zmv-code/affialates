const products = [
  {
    id: 1,
    title: "Tips Business & Formation Complète",
    category: "business",
    price: "7.00 €",
    // Image représentative de Business / Formation
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    affiliateUrl: "https://buy.stripe.com/8x26ozazn1KTaer73y8og04",
    status: "available"
  },
  {
    id: 2,
    title: "Sélection Produit Amazon #1",
    category: "amazon",
    price: "En attente",
    // Image neutre style Amazon / Colis
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&q=80",
    affiliateUrl: "javascript:void(0)",
    status: "pending"
  },
  {
    id: 3,
    title: "Sélection Produit Amazon #2",
    category: "amazon",
    price: "En attente",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
    affiliateUrl: "javascript:void(0)",
    status: "pending"
  },
  {
    id: 4,
    title: "Sélection Produit Amazon #3",
    category: "amazon",
    price: "En attente",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&q=80",
    affiliateUrl: "javascript:void(0)",
    status: "pending"
  },
  {
    id: 5,
    title: "Sélection Produit Amazon #4",
    category: "amazon",
    price: "En attente",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
    affiliateUrl: "javascript:void(0)",
    status: "pending"
  }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");

function displayProducts(items) {
  grid.innerHTML = items.map(product => {
    const isAvailable = product.status === "available";
    const btnText = isAvailable ? "Accéder à la formation" : "En attente";
    const btnClass = isAvailable ? "buy-btn" : "buy-btn disabled";
    const iconClass = isAvailable ? "fa-graduation-cap" : "fa-clock";
    const targetAttr = isAvailable ? 'target="_blank" rel="noopener noreferrer"' : '';

    return `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <div class="card-info">
          <div class="card-title">${product.title}</div>
          <div class="card-price">${product.price}</div>
          <a href="${product.affiliateUrl}" ${targetAttr} class="${btnClass}">
            <i class="fa-solid ${iconClass}"></i> ${btnText}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

displayProducts(products);

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    
    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});