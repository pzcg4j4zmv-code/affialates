const products = [
  // --- SECTION PRODUITS AMAZON RÉELS ---
  {
    id: 1,
    title: "Ensemble de Bandes de Résistance Fokky (5 Niveaux)",
    category: "amazon",
    price: "15,99 €",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=600&auto=format&fit=crop",
    link: "https://link.amazon/B0cdgbFh8"
  },
  {
    id: 2,
    title: "Sac de Sport Tactique & Voyage Camouflage",
    category: "amazon",
    price: "29,99 €",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    link: "https://link.amazon/B0aUhAze0"
  },
  {
    id: 3,
    title: "Gourde Air Up Anthracite + Pods Saveur",
    category: "amazon",
    price: "34,99 €",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop",
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

  // --- SECTION BUSINESS & EBOOKS ---
  {
    id: 5,
    title: "Guide Ultime : Prise de Muscle Sec & Nutrition",
    category: "business",
    price: "7,00 €",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    link: "https://buy.stripe.com/TON_LIEN_STRIPE" // Remplace par ton lien Stripe
  },
  {
    id: 6,
    title: "Programme Perte de Gras Rapide & Sèche",
    category: "business",
    price: "7,00 €",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    link: "https://buy.stripe.com/TON_LIEN_STRIPE"
  },

  // --- SÉLECTIONS À VENIR (POUR REMPLIR LA GRILLE) ---
  {
    id: 7,
    title: "Sélection Amazon #5 : Tapis de Sol Renforcé",
    category: "amazon",
    price: "Bientôt disponible",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 8,
    title: "Sélection Amazon #6 : Ceinture de Lest Gym",
    category: "amazon",
    price: "Bientôt disponible",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=600&auto=format&fit=crop",
    link: "#"
  }
];

function displayProducts(itemsToDisplay) {
  const container = document.getElementById('productGrid');
  if (!container) return;

  container.innerHTML = itemsToDisplay.map(product => {
    const isBusiness = product.category === 'business';
    const btnText = isBusiness ? "Accéder à la formation" : "Voir sur Amazon";
    const btnClass = product.link === '#' ? "buy-btn disabled" : "buy-btn";

    return `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <div class="card-info">
          <h3 class="card-title">${product.title}</h3>
          <p class="card-price">${product.price}</p>
          <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="${btnClass}">
            ${btnText}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Gestion des filtres et de la recherche
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
