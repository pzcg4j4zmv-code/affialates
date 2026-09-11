const products = [
  // --- PRODUITS AMAZON ---
  {
    id: 1,
    title: "Ensemble de Bandes de Résistance Fokky (5 Niveaux)",
    category: "amazon",
    price: "15,99 €",
    image: "./elastique.jpeg",
    link: "https://link.amazon/B0cdgbFh8"
  },
  {
    id: 2,
    title: "Sac de Sport Tactique Camouflage",
    category: "amazon",
    price: "29,99 €",
    image: "./sac.jpeg",
    link: "https://link.amazon/B0aUhAze0"
  },
  {
    id: 3,
    title: "Gourde Air Up Anthracite + Pods",
    category: "amazon",
    price: "34,99 €",
    image: "./airup.png",
    link: "https://link.amazon/B0f6tJnn5"
  },
  {
    id: 4,
    title: "Créatine Monohydrate Pure - Bulk",
    category: "amazon",
    price: "19,99 €",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop",
    link: "https://link.amazon/B0ikU36B0"
  },

  // --- BUSINESS & FORMATIONS (STRIPE 7 €) ---
  {
    id: 5,
    title: "Guide & Tips Business Fitness - Prise de Muscle & Nutrition",
    category: "business",
    price: "7,00 €",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    link: "https://buy.stripe.com/8x26ozazn1KTaer73y8og04"
  }
];

function displayProducts(itemsToDisplay) {
  const container = document.getElementById('productGrid');
  if (!container) return;

  container.innerHTML = itemsToDisplay.map(product => {
    const isBusiness = product.category === 'business';
    const btnText = isBusiness ? "Obtenir le guide (7€)" : "Voir sur Amazon";

    return `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <div class="card-info">
          <h3 class="card-title">${product.title}</h3>
          <p class="card-price">${product.price}</p>
          <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="buy-btn">
            ${btnText}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  displayProducts(products);

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const category = e.target.getAttribute('data-category');
      if (category === 'all') {
        displayProducts(products);
      } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
      }
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = products.filter(p => 
        p.title.toLowerCase().includes(searchTerm)
      );
      displayProducts(filtered);
    });
  }
});
