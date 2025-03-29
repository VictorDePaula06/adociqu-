
// Menu Data
const menuData = {
    ovosColherS: [
        {
            id: 1,
            name: 'Ovo de Colher Chocolate',
            description: 'Ovo de chocolate com brigadeiro 250g',
            price: 54.90,
            image: 'imgs/chocolate.jpg',
            discount: 0
        },
        {
            id: 2,
            name: 'Ovo de Colher de Beijinho',
            description: 'Ovo de colher sabor beijinho 250g',
            price: 54.90,
            image: 'imgs/beijinho.jpg',
            discount: 0
        },
        {
            id: 3,
            name: 'Ovo de Colher de Ninho',
            description: 'Ovo de colher sabor Ninho 250g',
            price: 54.90,
            image: 'imgs/ninho.jpeg',
            discount: 0
        },

        {
            id: 4,
            name: 'Ovo de Colher de Oreo',
            description: 'Ovo de colher sabor Oreo 250g',
            price: 54.90,
            image: 'imgs/oreo.jpeg',
            discount: 0
        },

        {
            id: 5,
            name: 'Ovo de Colher de Paçoca',
            description: 'Ovo de colher sabor Paçoca 250g',
            price: 28,
            image: 'imgs/paçoca.jpg',
            discount: 0
        },


    ],

    ovosColherP: [
        {

            id: 1,
            name: 'Ovo de colher Kinder 250g',
            description: 'Recheio de Ninho e Nutella e  decorado com pedaços de Kinder Bueno e docinhos de brigadeiro ',
            price: 70,
            image: 'imgs/bueno.jpg',
            discount: 0


        },
        {

            id: 2,
            name: 'Ovo de colher Ferrero Rocher 250g',
            description: 'Recheio de chocolate e Nutella e decorado com amendoim e Ferrero Rocher ',
            price: 70,
            image: 'imgs/Ferrero.jpg',
            discount: 0


        },
        {

            id: 3,
            name: 'Ovo de colher Brownie 250g',
            description: 'Recheio de sua preferencia e decorado com pedaços de brownie ',
            price: 70,
            image: 'imgs/brownie.jpg',
            discount: 0


        },


    ],


    bRecheadas: [
        {
            id: 1,
            name: 'Barra Recheada de Oreo',
            description: 'Barra Recheada sabor Oreo',
            price: 38.90,
            image: 'imgs/barraoreo.jpeg'
        },
        {
            id: 2,
            name: 'Barra Recheada de Paçoca',
            description: 'Barra Recheada sabor Paçoca',
            price: 38.90,
            image: 'imgs/barrapaçoca.jpeg'
        },
        {
            id: 3,
            name: 'Barra Recheada de chocolate',
            description: 'Barra Recheada sabor Chocolate',
            price: 38.90,
            image: 'imgs/barrachocolate.jpeg'
        },
        {
            id: 4,
            name: 'Barra Recheada de Ninho',
            description: 'Barra Recheada sabor Leite Ninho',
            price: 38.90,
            image: 'imgs/barraninho.jpeg'
        },
        {
            id: 5,
            name: 'Barra Recheada de Beijinho',
            description: 'Barra Recheada sabor Beijinho',
            price: 38.90,
            image: 'imgs/barrabeijinho.jpeg'
        },

    ],
    kits: [
        {
            id: 1,
            name: 'Kit ',
            description: 'kit infantil, 3 ovos 50g',
            price: 49.90,
            image: 'imgs/kit1.jpeg'
        },
        {
            id: 2,
            name: 'Kit infantil, 3 ovos 50g',
            description: 'Escolher Recheio e decoração<br><br>Recheios: Beijinho, Chocolate, Ninho<br>Decoração: Disquete, Granulado',
            price: 49.90,
            image: 'imgs/kit2.jpeg'
        },

    ],
    adicionais: [
        {
            id: 1,
            name: 'Oreo',
            description: 'Adicional de Oreo',
            price: 5,
            image: 'imgs/oreoadicional.jpg'
        },
        {
            id: 2,
            name: 'Nutella',
            description: 'Adicional de Nutella',
            price: 5,
            image: 'imgs/nutella.jpg'
        },
        {
            id: 3,
            name: 'Kit kat',
            description: 'Adicional de kit kat',
            price: 5,
            image: 'imgs/kitkat2.jpeg'
        },
        {
            id: 4,
            name: 'Brownie',
            description: 'Adicional de Brownie',
            price: 5,
            image: 'imgs/brownieadicional.jpeg'
        },
        {
            id: 1,
            name: 'Ferrero Rocher',
            description: 'Adicional de Ferrero Rocher',
            price: 5,
            image: 'imgs/ferreroadicional.jpeg'
        },
        {
            id: 1,
            name: 'Kinder Bueno',
            description: 'Adicional de Kinder Bueno',
            price: 5,
            image: 'imgs/buenoadicional.jpeg'
        },

    ],
  


    promocoes: [
        {
            id: 1,
            name: '2 Ovos de Colher 250g',
            description: 'Escolher sabores: <br>Chocolate, Beijinho, Ninho, Oreo, Paçoca',
            price: 100,
            image: 'imgs/chocolate.jpg',
         
        },
        {
            id: 2,
            name: 'Ovo de Colher 250g + Barra Recheada',
            description: 'Escolher sabores: <br>Chocolate, Beijinho, Ninho, Oreo, Paçoca',
            price: 85,
            image: 'imgs/barrachocolate.jpeg',
           
            
        },
        
       
    ]
    
};

// Gallery Data


// Cart state
let cart = [];

// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const cartBadges = document.querySelectorAll('.cart-badge');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            hamburger.style.background = 'transparent';
        } else {
            hamburger.style.background = 'var(--text)';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Initialize gallery
    renderGallery();

    // Initialize menu sections
    renderMenuSections();

    // Initialize promotions
    renderPromotions();

    // Menu navigation
    const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    menuNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            menuNavBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update active section
            menuSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === category) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Cart functions
    window.addToCart = function (category, itemId) {
        const item = menuData[category].find(i => i.id === parseInt(itemId));
        if (item) {
            const cartItem = cart.find(i => i.id === item.id && i.category === category);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({
                    ...item,
                    category,
                    quantity: 1
                });
            }
            updateCartBadge();
            showCartNotification();
        }
    };

    window.updateCartBadge = function () {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadges.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    };

    window.showCartNotification = function () {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = 'Item adicionado ao carrinho!';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    };

    window.openCart = function () {
        const cartModal = document.createElement('div');
        cartModal.className = 'cart-modal';

        let total = 0;
        const cartContent = cart.map(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity('${item.category}', ${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.category}', ${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            `;
        }).join('');

        cartModal.innerHTML = `
            <div class="cart-modal-content">
                <div class="cart-header">
                    <h2>Seu Pedido</h2>
                    <button onclick="closeCart()" class="close-cart">&times;</button>
                </div>
                <div class="cart-items">
                    ${cart.length > 0 ? cartContent : '<p class="empty-cart">Seu carrinho está vazio</p>'}
                </div>
                ${cart.length > 0 ? `
                    <div class="cart-footer">
                        <div class="cart-total">
                            <span>Total:</span>
                            <span>R$ ${total.toFixed(2)}</span>
                        </div>
                        <button onclick="checkout()" class="checkout-btn">Finalizar Pedido</button>
                    </div>
                ` : ''}
            </div>
        `;

        document.body.appendChild(cartModal);
        document.body.style.overflow = 'hidden';
    };

    window.closeCart = function () {
        const cartModal = document.querySelector('.cart-modal');
        if (cartModal) {
            cartModal.remove();
            document.body.style.overflow = 'auto';
        }
    };

    window.updateQuantity = function (category, itemId, newQuantity) {
        const itemIndex = cart.findIndex(i => i.id === itemId && i.category === category);
        if (itemIndex > -1) {
            if (newQuantity <= 0) {
                cart.splice(itemIndex, 1);
            } else {
                cart[itemIndex].quantity = newQuantity;
            }
            updateCartBadge();
            openCart(); // Refresh cart modal
        }
    };

    window.checkout = function () {
        const phone = '5521993609898'; // Substitua pelo número do WhatsApp do restaurante
        let message = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';

        cart.forEach(item => {
            message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        });

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `\nTotal: R$ ${total.toFixed(2)}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');

        // Clear cart after checkout
        cart = [];
        updateCartBadge();
        closeCart();
    };
});

// Render gallery
function renderGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.description}">
            <div class="gallery-overlay">
                <p>${item.description}</p>
            </div>
        `;

        galleryGrid.appendChild(galleryItem);
    });
}

// Render promotions
function renderPromotions() {
    const promotionsGrid = document.querySelector('.promotions-grid');
    if (!promotionsGrid) return;

    menuData.promocoes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';

        card.innerHTML = `
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}">
               
            </div>
            <div class="menu-content">
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <div class="menu-price">
                    <span class="current-price">R$ ${item.price.toFixed(2)}</span>
                    
                </div>
                <button onclick="addToCart('promocoes', ${item.id})" class="add-to-cart-btn">
                    Adicionar ao Pedido
                </button>
            </div>
        `;

        promotionsGrid.appendChild(card);
    });
}

// Render menu sections
function renderMenuSections() {
    Object.entries(menuData).forEach(([category, items]) => {
        const container = document.querySelector(`#${category} .menu-grid`) ||
            document.querySelector(`#${category} .specials-grid`);

        if (!container) return;

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = category === 'especiais' ? 'special-card' : 'menu-card';

            const discountPrice = item.discount
                ? (item.price * (1 - item.discount / 100)).toFixed(2)
                : item.price.toFixed(2);

            card.innerHTML = `
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.name}">
                    ${item.discount ? `
                        <div class="discount-badge">${item.discount}% OFF</div>
                    ` : ''}
                </div>
                <div class="menu-content">
                    <h3 class="menu-title">${item.name}</h3>
                    <p class="menu-description">${item.description}</p>
                    <div class="menu-price">
                        <span class="current-price">R$ ${discountPrice}</span>
                        ${item.discount ? `
                            <span class="original-price">R$ ${item.price.toFixed(2)}</span>
                        ` : ''}
                    </div>
                    <button onclick="addToCart('${category}', ${item.id})" class="add-to-cart-btn">
                        Adicionar ao Pedido
                    </button>
                </div>
            `;

            container.appendChild(card);
        });
    });
}
