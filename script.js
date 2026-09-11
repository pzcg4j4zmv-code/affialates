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
const products = [
    {
        id: 1,
        title: "Bandes d'Élastiques de Résistance",
        category: "Équipement",
        price: "15,99 €",
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=600&auto=format&fit=crop",
        description: "Idéal pour l'échauffement, le renforcement musculaire, l'étirement et l'assistance aux tractions. Un indispensable pour débutants et avancés.",
        link: "https://link.amazon/B0cdgbFh8"
    },
    {
        id: 2,
        title: "Sac de Sport & Voyage Polyvalent",
        category: "Accessoires",
        price: "29,99 €",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
        description: "Sac spacieux et résistant avec compartiments séparés. Parfait pour vos séances de gym au quotidien ou vos déplacements.",
        link: "https://link.amazon/B0aUhAze0"
    },
    {
        id: 3,
        title: "Gourde Air Up (Hydratation & Goût)",
        category: "Nutrition & Gourdes",
        price: "34,99 €",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop",
        description: "Restez hydraté pendant vos entraînements grâce au système de rétro-olfaction d'Air Up. Hydratez-vous plus facilement sans sucre ajouté.",
        link: "https://link.amazon/B0f6tJnn5"
    },
    {
        id: 4,
        title: "Créatine Monohydrate - Bulk",
        category: "Compléments",
        price: "19,99 €",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop",
        description: "Augmentez vos performances physiques, votre force et votre récupération musculaire avec la créatine monohydrate pure de chez Bulk.",
        link: "https://link.amazon/B0ikU36B0"
    }
];

function displayProducts() {
    const container = document.getElementById('product-grid') || document.getElementById('products-container') || document.body;
    
    // Si une grille existe dans le HTML
    const grid = document.querySelector('.product-grid') || document.querySelector('.grid');
    
    if (grid) {
        grid.innerHTML = products.map(product => `
            <div class="product-card" style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin: 12px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: space-between;">
                <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
                <div style="margin-top: 12px;">
                    <span style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase;">${product.category}</span>
                    <h3 style="font-size: 18px; margin: 6px 0; color: #1e293b;">${product.title}</h3>
                    <p style="font-size: 14px; color: #475569; margin-bottom: 12px;">${product.description}</p>
                </div>
                <div>
                    <p style="font-size: 20px; font-weight: bold; color: #0f172a; margin-bottom: 12px;">${product.price}</p>
                    <a href="${product.link}" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; background: #ff9900; color: #ffffff; text-decoration: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; transition: background 0.2s;">Voir sur Amazon</a>
                </div>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', displayProducts);
