const products = [
  {
    id: 1,
    title: "Bandes d'Élastiques de Résistance",
    category: "amazon",
    price: "15,99 €",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=600&auto=format&fit=crop",
    link: "https://link.amazon/B0cdgbFh8"
  },
  {
    id: 2,
    title: "Sac de Sport & Voyage Polyvalent",
    category: "amazon",
    price: "29,99 €",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    link: "https://link.amazon/B0aUhAze0"
  },
  {
    id: 3,
    title: "Gourde Air Up (Hydratation & Goût)",
    category: "amazon",
    price: "34,99 €",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop",
    link: "https://link.amazon/B0f6tJnn5"
  },
  {
    id: 4,
    title: "Créatine Monohydrate - Bulk",
    category: "amazon",
    price: "19,99 €",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop",
    link: "https://link.amazon/B0ikU36B0"
  }
];

function displayProducts(itemsToDisplay) {
  const container = document.getElementById('productGrid');
  if (!container) return;

  container.innerHTML = itemsToDisplay.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.title}">
      <div class="card-info">
        <h3 class="card-title">${product.title}</h3>
        <p class="card-price">${product.price}</p>
        <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="buy-btn">Voir sur Amazon</a>
      </div>
    </div>
  `).join('');
}

// Filtres par catégorie
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

  // Barre de recherche
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
