// Blog posts data
const blogPosts = [
  {
    title: 'Como a Memória Funciona?',
    excerpt: 'Entenda os diferentes tipos de memória e como elas trabalham em conjunto.',
    date: '2024-02-20',
    author: 'Dra. Maria Silva'
  },
  {
    title: 'Atenção e Produtividade',
    excerpt: 'Técnicas baseadas em evidências para melhorar seu foco e produtividade.',
    date: '2024-02-18',
    author: 'Dr. João Santos'
  }
];

// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('mobile-menu-active');
});

// Render blog posts
function renderBlogPosts() {
  const blogContainer = document.getElementById('blogPosts');
  
  blogPosts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'bg-white p-6 rounded-lg shadow-md';
    
    article.innerHTML = `
      <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
      <p class="text-gray-600 mb-4">${post.excerpt}</p>
      <div class="text-sm text-gray-500">
        <span>${post.date}</span> • <span>${post.author}</span>
      </div>
    `;
    
    blogContainer.appendChild(article);
  });
}

// Initialize the blog
document.addEventListener('DOMContentLoaded', () => {
  renderBlogPosts();
});