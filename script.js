// Product Data
const products = [
   {
       id: 1,
       name: "Royal Pine Christmas Tree",
       description: "Premium 7.5ft artificial Christmas tree with pre-lit LED lights and realistic pine needles. Perfect for elegant holiday displays.",
       price: 899.99,
       image: "https://images.unsplash.com/photo-1763817418516-ee6ba45b604c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBDaHJpc3RtYXMlMjB0cmVlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQzNjI1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Trees",
   },
   {
       id: 2,
       name: "Gold & Burgundy Wreath",
       description: "Handcrafted 24-inch wreath featuring premium silk ribbons, gold ornaments, and natural pine cones. A stunning entrance statement.",
       price: 249.99,
       image: "https://images.unsplash.com/photo-1735216642730-bbfad89198d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3RtYXMlMjB3cmVhdGglMjBkb29yfGVufDF8fHx8MTc2NDM2MzExM3ww&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Wreaths",
   },
   {
       id: 3,
       name: "Crystal Cascade Lights",
       description: "Elegant warm white LED string lights with crystal droplets. 50ft of sophisticated illumination for indoor and outdoor use.",
       price: 159.99,
       image: "https://images.unsplash.com/photo-1764054335193-ef28c0ab2260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3RtYXMlMjBsaWdodHMlMjBlbGVnYW50JTIwZ29sZHxlbnwxfHx8fDE3NjQzNjI2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Lights",
   },
   {
       id: 4,
       name: "Heritage Glass Ornament Set",
       description: "Collection of 12 hand-blown glass ornaments in wine red and gold. Each piece is unique with intricate detailing.",
       price: 189.99,
       image: "https://images.unsplash.com/photo-1639772004902-e2237d349abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3RtYXMlMjBvcm5hbWVudHMlMjBiYXVibGVzfGVufDF8fHx8MTc2NDM2MzExM3ww&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Ornaments",
   },
   {
       id: 5,
       name: "Victorian Table Centerpiece",
       description: "Luxurious table arrangement with fresh evergreen, burgundy roses, gold candles, and seasonal berries. Makes a statement.",
       price: 299.99,
       image: "https://images.unsplash.com/photo-1759496330502-3965f119abbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3RtYXMlMjBjZW50ZXJwaWVjZSUyMHRhYmxlfGVufDF8fHx8MTc2NDM2MzExNHww&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Centerpieces",
   },
   {
       id: 6,
       name: "Luxury Garland - 9ft",
       description: "Premium pre-lit garland with mixed greenery, pinecones, red berries, and warm LED lights. Perfect for mantels and staircases.",
       price: 179.99,
       image: "https://images.unsplash.com/photo-1638374499705-0de97ad45f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3RtYXMlMjBnYXJsYW5kJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NjQzNjMxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Garlands",
   },
   {
       id: 7,
       name: "Deluxe Tree Topper - Gold Star",
       description: "Stunning 14-inch illuminated tree topper with gold finish and crystal accents. Battery operated with timer function.",
       price: 129.99,
       image: "https://images.unsplash.com/photo-1543260264-2ffb2b0044dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3RtYXMlMjB0cmVlJTIwdG9wcGVyJTIwc3RhcnxlbnwxfHx8fDE3NjQzNjMxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Tree Toppers",
   },
   {
       id: 8,
       name: "Platinum Snowflake Collection",
       description: "Set of 24 elegant silver and white snowflake ornaments in varying sizes. Shatterproof and perfect for modern decor.",
       price: 149.99,
       image: "https://images.unsplash.com/photo-1764147547807-193b1c61a433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93Zmxha2UlMjBvcm5hbWVudCUyMHdoaXRlfGVufDF8fHx8MTc2NDM2MzExNXww&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Ornaments",
   },
   {
       id: 9,
       name: "Elegant Door Swag",
       description: "Premium 30-inch door swag with mixed evergreens, burgundy velvet bow, and gold accents. Weather-resistant for outdoor use.",
       price: 199.99,
       image: "https://images.unsplash.com/photo-1763887713698-fca552c57f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwQ2hyaXN0bWFzJTIwd3JlYXRoJTIwZ29sZHxlbnwxfHx8fDE3NjQzNjI2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
       category: "Wreaths",
   },
];


// Initialize app
document.addEventListener('DOMContentLoaded', function() {
   // Initialize Lucide icons
   lucide.createIcons();
  
   // Setup Christmas Lights
   setupChristmasLights();
  
   // Setup Snowfall
   setupSnowfall();
  
   // Show welcome banner
   showWelcomeBanner();
  
   // Setup navigation
   setupNavigation();
  
   // Setup mobile menu
   setupMobileMenu();
  
   // Load products
   loadProducts();
  
   // Setup product filters
   setupProductFilters();
  
   // Setup contact form
   setupContactForm();
  
   // Setup smooth scrolling for internal links
   setupSmoothScroll();
});


// Christmas Lights
function setupChristmasLights() {
   const container = document.getElementById('christmas-lights');
   const colors = ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'];
  
   for (let i = 0; i < 50; i++) {
       const light = document.createElement('div');
       light.className = 'light';
       light.style.animationDelay = `${i * 0.1}s`;
       light.style.animationDuration = `${1 + Math.random()}s`;
      
       const wire = document.createElement('div');
       wire.className = 'light-wire';
      
       const bulb = document.createElement('div');
       bulb.className = 'light-bulb';
       bulb.style.backgroundColor = colors[i % 5];
       bulb.style.boxShadow = `0 0 10px ${colors[i % 5]}`;
      
       light.appendChild(wire);
       light.appendChild(bulb);
       container.appendChild(light);
   }
}


// Snowfall Effect
function setupSnowfall() {
   const canvas = document.getElementById('snowfall-canvas');
   const ctx = canvas.getContext('2d');
  
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
  
   const snowflakes = [];
   const numberOfSnowflakes = 100;
  
   // Create snowflakes
   for (let i = 0; i < numberOfSnowflakes; i++) {
       snowflakes.push({
           x: Math.random() * canvas.width,
           y: Math.random() * canvas.height,
           radius: Math.random() * 3 + 1,
           speed: Math.random() * 1 + 0.5,
           wind: Math.random() * 0.5 - 0.25,
       });
   }
  
   function animate() {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
       snowflakes.forEach((flake) => {
           ctx.beginPath();
           ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
           ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
           ctx.fill();
          
           // Update position
           flake.y += flake.speed;
           flake.x += flake.wind;
          
           // Reset snowflake when it goes off screen
           if (flake.y > canvas.height) {
               flake.y = -10;
               flake.x = Math.random() * canvas.width;
           }
          
           if (flake.x > canvas.width) {
               flake.x = 0;
           } else if (flake.x < 0) {
               flake.x = canvas.width;
           }
       });
      
       requestAnimationFrame(animate);
   }
  
   animate();
  
   // Handle window resize
   window.addEventListener('resize', function() {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
   });
}


// Welcome Banner
function showWelcomeBanner() {
   const banner = document.getElementById('welcome-banner');
   const closeBtn = document.getElementById('close-banner');
  
   setTimeout(() => {
       banner.classList.remove('hidden');
       lucide.createIcons();
   }, 500);
  
   setTimeout(() => {
       banner.classList.add('hidden');
   }, 5500);
  
   closeBtn.addEventListener('click', () => {
       banner.classList.add('hidden');
   });
}


// Navigation
function setupNavigation() {
   const pages = document.querySelectorAll('.page');
   const navLinks = document.querySelectorAll('[data-page]');
  
   navLinks.forEach(link => {
       link.addEventListener('click', (e) => {
           e.preventDefault();
           const targetPage = link.getAttribute('data-page');
          
           // Hide all pages
           pages.forEach(page => page.classList.remove('active'));
          
           // Show target page
           const targetElement = document.getElementById(`${targetPage}-page`);
           if (targetElement) {
               targetElement.classList.add('active');
           }
          
           // Update active nav link
           document.querySelectorAll('.nav-link').forEach(navLink => {
               navLink.classList.remove('active');
           });
          
           const activeNavLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
           if (activeNavLink) {
               activeNavLink.classList.add('active');
           }
          
           // Scroll to top
           window.scrollTo({ top: 0, behavior: 'smooth' });
          
           // Close mobile menu if open
           const navLinksContainer = document.getElementById('nav-links');
           navLinksContainer.classList.remove('active');
          
           // Reinitialize icons
           setTimeout(() => lucide.createIcons(), 100);
       });
   });
}


// Mobile Menu
function setupMobileMenu() {
   const toggle = document.getElementById('mobile-menu-toggle');
   const navLinks = document.getElementById('nav-links');
  
   toggle.addEventListener('click', () => {
       navLinks.classList.toggle('active');
   });
}


// Load Products
function loadProducts(category = 'All') {
   const grid = document.getElementById('products-grid');
   const filteredProducts = category === 'All'
       ? products
       : products.filter(p => p.category === category);
  
   grid.innerHTML = '';
  
   filteredProducts.forEach((product, index) => {
       const card = createProductCard(product, index);
       grid.appendChild(card);
   });
  
   // Update product count
   document.getElementById('product-count').textContent = filteredProducts.length;
  
   // Reinitialize icons
   lucide.createIcons();
}


// Create Product Card
function createProductCard(product, index) {
   const card = document.createElement('div');
   card.className = 'product-card';
   card.style.animationDelay = `${index * 0.1}s`;
  
   card.innerHTML = `
       <div class="product-image">
           <img src="${product.image}" alt="${product.name}">
           <div class="product-category">${product.category}</div>
           <div class="product-sparkle">
               <i data-lucide="sparkles"></i>
           </div>
       </div>
       <div class="product-info">
           <h3 class="product-name">${product.name}</h3>
           <p class="product-description">${product.description}</p>
           <div class="product-footer">
               <div class="product-price-container">
                   <span class="price-label">Price</span>
                   <span class="product-price">
                       $${product.price.toFixed(2)}
                       <span class="price-currency">CAD</span>
                   </span>
               </div>
               <button class="btn btn-cart btn-full" onclick="addToCart('${product.name}', ${product.price})">
                   <i data-lucide="shopping-cart"></i>
                   Add to Cart
               </button>
           </div>
       </div>
   `;
  
   return card;
}


// Product Filters
function setupProductFilters() {
   const filterBtns = document.querySelectorAll('.filter-btn');
  
   filterBtns.forEach(btn => {
       btn.addEventListener('click', () => {
           // Remove active class from all buttons
           filterBtns.forEach(b => b.classList.remove('active'));
          
           // Add active class to clicked button
           btn.classList.add('active');
          
           // Load products for selected category
           const category = btn.getAttribute('data-category');
           loadProducts(category);
       });
   });
}


// Add to Cart
function addToCart(productName, price) {
   showToast(`${productName} added to cart!`, `CAD $${price.toFixed(2)}`, 'success');
}


// Toast Notification
function showToast(title, description, type = 'success') {
   const container = document.getElementById('toast-container');
   const toast = document.createElement('div');
   toast.className = `toast ${type}`;
  
   toast.innerHTML = `
       <div class="toast-title">${title}</div>
       <div class="toast-description">${description}</div>
   `;
  
   container.appendChild(toast);
  
   setTimeout(() => {
       toast.style.animation = 'slideInRight 0.3s ease-out reverse';
       setTimeout(() => {
           container.removeChild(toast);
       }, 300);
   }, 3000);
}


// Contact Form
function setupContactForm() {
   const form = document.getElementById('contact-form');
  
   if (!form) return;
  
   form.addEventListener('submit', (e) => {
       e.preventDefault();
      
       // Clear previous errors
       document.querySelectorAll('.error-message').forEach(el => {
           el.classList.remove('show');
           el.textContent = '';
       });
      
       document.querySelectorAll('.error').forEach(el => {
           el.classList.remove('error');
       });
      
       let isValid = true;
      
       // Validate name
       const name = document.getElementById('name');
       if (!name.value.trim()) {
           showError('name', 'Name is required');
           isValid = false;
       } else if (name.value.trim().length < 2) {
           showError('name', 'Name must be at least 2 characters');
           isValid = false;
       }
      
       // Validate email
       const email = document.getElementById('email');
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!email.value.trim()) {
           showError('email', 'Email is required');
           isValid = false;
       } else if (!emailRegex.test(email.value)) {
           showError('email', 'Please enter a valid email address');
           isValid = false;
       }
      
       // Validate message
       const message = document.getElementById('message');
       if (!message.value.trim()) {
           showError('message', 'Message is required');
           isValid = false;
       } else if (message.value.trim().length < 10) {
           showError('message', 'Message must be at least 10 characters');
           isValid = false;
       }
      
       if (isValid) {
           showToast('Thank you for contacting us!', "We'll get back to you within 24 hours.", 'success');
           form.reset();
       } else {
           showToast('Please fix the errors in the form', '', 'error');
       }
   });
  
   // Clear errors on input
   ['name', 'email', 'message'].forEach(fieldName => {
       const field = document.getElementById(fieldName);
       field.addEventListener('input', () => {
           field.classList.remove('error');
           document.getElementById(`${fieldName}-error`).classList.remove('show');
       });
   });
}


function showError(fieldName, message) {
   const field = document.getElementById(fieldName);
   const errorEl = document.getElementById(`${fieldName}-error`);
  
   field.classList.add('error');
   errorEl.textContent = message;
   errorEl.classList.add('show');
}


// Smooth Scroll
function setupSmoothScroll() {
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           const href = this.getAttribute('href');
           if (href === '#' || this.hasAttribute('data-page')) return;
          
           e.preventDefault();
           const target = document.querySelector(href);
           if (target) {
               target.scrollIntoView({
                   behavior: 'smooth',
                   block: 'start'
               });
           }
       });
   });
}



