// Pizza Maker App
class PizzaMaker {
    constructor() {
        this.currentPizza = { ...PizzaData.defaultPizza };
        this.cart = [];
        this.total = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderPizzaBuilder();
        this.renderSpecialtyPizzas();
        this.updatePizzaPreview();
        this.updateOrderSummary();
        this.addAnimations();
    }

    setupEventListeners() {
        // Navigation smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // CTA button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                document.querySelector('#builder').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }

        // Window scroll for header effects
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = 'var(--shadow-lg)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    }

    renderPizzaBuilder() {
        const builderControls = document.querySelector('.ingredient-categories');
        if (!builderControls) return;

        builderControls.innerHTML = `
            <h3>Customize Your Pizza</h3>
            
            <!-- Size Selection -->
            <div class="category-section">
                <h4>Size</h4>
                <div class="options-grid">
                    ${PizzaData.sizes.map(size => `
                        <label class="option-card ${this.currentPizza.size === size.id ? 'selected' : ''}">
                            <input type="radio" name="size" value="${size.id}" ${this.currentPizza.size === size.id ? 'checked' : ''}>
                            <div class="option-content">
                                <span class="option-name">${size.name}</span>
                                <span class="option-price">$${size.price.toFixed(2)}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Crust Selection -->
            <div class="category-section">
                <h4>Crust</h4>
                <div class="options-grid">
                    ${PizzaData.crusts.map(crust => `
                        <label class="option-card ${this.currentPizza.crust === crust.id ? 'selected' : ''}">
                            <input type="radio" name="crust" value="${crust.id}" ${this.currentPizza.crust === crust.id ? 'checked' : ''}>
                            <div class="option-content">
                                <span class="option-name">${crust.name}</span>
                                <span class="option-price">${crust.price > 0 ? '+$' + crust.price.toFixed(2) : 'Free'}</span>
                                <span class="option-description">${crust.description}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Sauce Selection -->
            <div class="category-section">
                <h4>Sauce</h4>
                <div class="options-grid">
                    ${PizzaData.sauces.map(sauce => `
                        <label class="option-card ${this.currentPizza.sauce === sauce.id ? 'selected' : ''}">
                            <input type="radio" name="sauce" value="${sauce.id}" ${this.currentPizza.sauce === sauce.id ? 'checked' : ''}>
                            <div class="option-content">
                                <span class="option-name">${sauce.name}</span>
                                <span class="option-price">${sauce.price > 0 ? '+$' + sauce.price.toFixed(2) : 'Free'}</span>
                                <span class="option-description">${sauce.description}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Cheese Selection -->
            <div class="category-section">
                <h4>Cheese</h4>
                <div class="options-grid checkbox-grid">
                    ${PizzaData.cheeses.map(cheese => `
                        <label class="option-card ${this.currentPizza.cheese.includes(cheese.id) ? 'selected' : ''}">
                            <input type="checkbox" name="cheese" value="${cheese.id}" ${this.currentPizza.cheese.includes(cheese.id) ? 'checked' : ''}>
                            <div class="option-content">
                                <span class="option-name">${cheese.name}</span>
                                <span class="option-price">${cheese.price > 0 ? '+$' + cheese.price.toFixed(2) : 'Free'}</span>
                                <span class="option-description">${cheese.description}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Meat Toppings -->
            <div class="category-section">
                <h4>Meat Toppings</h4>
                <div class="options-grid checkbox-grid">
                    ${PizzaData.meats.map(meat => `
                        <label class="option-card ${this.currentPizza.meats.includes(meat.id) ? 'selected' : ''}">
                            <input type="checkbox" name="meats" value="${meat.id}" ${this.currentPizza.meats.includes(meat.id) ? 'checked' : ''}>
                            <div class="option-content">
                                <span class="option-name">${meat.name}</span>
                                <span class="option-price">+$${meat.price.toFixed(2)}</span>
                                <span class="option-description">${meat.description}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Vegetable Toppings -->
            <div class="category-section">
                <h4>Vegetable Toppings</h4>
                <div class="options-grid checkbox-grid">
                    ${PizzaData.vegetables.map(veggie => `
                        <label class="option-card ${this.currentPizza.vegetables.includes(veggie.id) ? 'selected' : ''}">
                            <input type="checkbox" name="vegetables" value="${veggie.id}" ${this.currentPizza.vegetables.includes(veggie.id) ? 'checked' : ''}>
                            <div class="option-content">
                                <span class="option-name">${veggie.name}</span>
                                <span class="option-price">+$${veggie.price.toFixed(2)}</span>
                                <span class="option-description">${veggie.description}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Add to Cart Button -->
            <div class="add-to-cart-section">
                <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                <button class="btn btn-secondary reset-btn">Reset Pizza</button>
            </div>
        `;

        this.addBuilderEventListeners();
    }

    addBuilderEventListeners() {
        const builderControls = document.querySelector('.ingredient-categories');
        
        // Size selection
        builderControls.querySelectorAll('input[name="size"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.currentPizza.size = e.target.value;
                this.updateSelections();
                this.updatePizzaPreview();
                this.updateOrderSummary();
            });
        });

        // Crust selection
        builderControls.querySelectorAll('input[name="crust"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.currentPizza.crust = e.target.value;
                this.updateSelections();
                this.updatePizzaPreview();
                this.updateOrderSummary();
            });
        });

        // Sauce selection
        builderControls.querySelectorAll('input[name="sauce"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.currentPizza.sauce = e.target.value;
                this.updateSelections();
                this.updatePizzaPreview();
                this.updateOrderSummary();
            });
        });

        // Cheese selection
        builderControls.querySelectorAll('input[name="cheese"]').forEach(input => {
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.currentPizza.cheese.push(e.target.value);
                } else {
                    this.currentPizza.cheese = this.currentPizza.cheese.filter(id => id !== e.target.value);
                }
                this.updateSelections();
                this.updatePizzaPreview();
                this.updateOrderSummary();
            });
        });

        // Meat toppings
        builderControls.querySelectorAll('input[name="meats"]').forEach(input => {
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.currentPizza.meats.push(e.target.value);
                } else {
                    this.currentPizza.meats = this.currentPizza.meats.filter(id => id !== e.target.value);
                }
                this.updateSelections();
                this.updatePizzaPreview();
                this.updateOrderSummary();
            });
        });

        // Vegetable toppings
        builderControls.querySelectorAll('input[name="vegetables"]').forEach(input => {
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.currentPizza.vegetables.push(e.target.value);
                } else {
                    this.currentPizza.vegetables = this.currentPizza.vegetables.filter(id => id !== e.target.value);
                }
                this.updateSelections();
                this.updatePizzaPreview();
                this.updateOrderSummary();
            });
        });

        // Add to cart button
        const addToCartBtn = builderControls.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => {
            this.addToCart();
        });

        // Reset button
        const resetBtn = builderControls.querySelector('.reset-btn');
        resetBtn.addEventListener('click', () => {
            this.resetPizza();
        });
    }

    updateSelections() {
        const builderControls = document.querySelector('.ingredient-categories');
        
        // Update radio button selections
        builderControls.querySelectorAll('.option-card').forEach(card => {
            const input = card.querySelector('input');
            if (input.type === 'radio') {
                card.classList.toggle('selected', input.checked);
            } else if (input.type === 'checkbox') {
                card.classList.toggle('selected', input.checked);
            }
        });
    }

    updatePizzaPreview() {
        const pizzaBase = document.querySelector('.pizza-base');
        if (!pizzaBase) return;

        // Clear existing toppings
        pizzaBase.querySelectorAll('.topping').forEach(topping => topping.remove());

        // Add sauce layer
        if (this.currentPizza.sauce !== 'white') {
            const sauceLayer = document.createElement('div');
            sauceLayer.className = 'topping sauce-layer';
            sauceLayer.style.cssText = `
                position: absolute;
                top: 10%;
                left: 10%;
                right: 10%;
                bottom: 10%;
                background: radial-gradient(circle, #D32F2F 20%, #C62828 80%);
                border-radius: 50%;
                opacity: 0.6;
            `;
            pizzaBase.appendChild(sauceLayer);
        }

        // Add cheese layer
        if (this.currentPizza.cheese.length > 0) {
            const cheeseLayer = document.createElement('div');
            cheeseLayer.className = 'topping cheese-layer';
            cheeseLayer.style.cssText = `
                position: absolute;
                top: 15%;
                left: 15%;
                right: 15%;
                bottom: 15%;
                background: radial-gradient(circle, #FFF9C4 30%, #FFEB3B 70%);
                border-radius: 50%;
                opacity: 0.7;
            `;
            pizzaBase.appendChild(cheeseLayer);
        }

        // Add toppings visualization
        const allToppings = [...this.currentPizza.meats, ...this.currentPizza.vegetables];
        allToppings.forEach((toppingId, index) => {
            const topping = document.createElement('div');
            topping.className = `topping topping-${toppingId}`;
            
            // Random positioning
            const angle = (index * 45) % 360;
            const radius = 20 + (index % 3) * 15;
            const x = 50 + radius * Math.cos(angle * Math.PI / 180);
            const y = 50 + radius * Math.sin(angle * Math.PI / 180);
            
            topping.style.cssText = `
                position: absolute;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                left: ${x}%;
                top: ${y}%;
                transform: translate(-50%, -50%);
                z-index: ${10 + index};
            `;

            // Set color based on topping type
            const colors = {
                'pepperoni': '#B71C1C',
                'sausage': '#8D6E63',
                'ham': '#FF8A65',
                'bacon': '#5D4037',
                'chicken': '#FFCC02',
                'beef': '#6D4C41',
                'mushrooms': '#8BC34A',
                'peppers': '#4CAF50',
                'onions': '#9C27B0',
                'olives': '#1A1A1A',
                'tomatoes': '#F44336',
                'spinach': '#2E7D32',
                'pineapple': '#FFC107'
            };

            topping.style.backgroundColor = colors[toppingId] || '#666';
            pizzaBase.appendChild(topping);
        });

        // Add animation
        pizzaBase.style.animation = 'none';
        setTimeout(() => {
            pizzaBase.style.animation = 'fadeIn 0.5s ease-out';
        }, 10);
    }

    calculatePizzaPrice() {
        const size = PizzaData.sizes.find(s => s.id === this.currentPizza.size);
        const crust = PizzaData.crusts.find(c => c.id === this.currentPizza.crust);
        const sauce = PizzaData.sauces.find(s => s.id === this.currentPizza.sauce);
        
        let total = size.price + crust.price + sauce.price;

        // Add cheese prices
        this.currentPizza.cheese.forEach(cheeseId => {
            const cheese = PizzaData.cheeses.find(c => c.id === cheeseId);
            if (cheese) total += cheese.price;
        });

        // Add meat prices
        this.currentPizza.meats.forEach(meatId => {
            const meat = PizzaData.meats.find(m => m.id === meatId);
            if (meat) total += meat.price;
        });

        // Add vegetable prices
        this.currentPizza.vegetables.forEach(veggieId => {
            const veggie = PizzaData.vegetables.find(v => v.id === veggieId);
            if (veggie) total += veggie.price;
        });

        return total;
    }

    updateOrderSummary() {
        const summaryContent = document.querySelector('.summary-content');
        if (!summaryContent) return;

        const price = this.calculatePizzaPrice();
        const size = PizzaData.sizes.find(s => s.id === this.currentPizza.size);
        const crust = PizzaData.crusts.find(c => c.id === this.currentPizza.crust);
        const sauce = PizzaData.sauces.find(s => s.id === this.currentPizza.sauce);

        summaryContent.innerHTML = `
            <div class="summary-item">
                <span class="item-name">${size.name} ${crust.name}</span>
                <span class="item-price">$${(size.price + crust.price).toFixed(2)}</span>
            </div>
            <div class="summary-item">
                <span class="item-name">${sauce.name}</span>
                <span class="item-price">${sauce.price > 0 ? '$' + sauce.price.toFixed(2) : 'Free'}</span>
            </div>
            ${this.currentPizza.cheese.map(cheeseId => {
                const cheese = PizzaData.cheeses.find(c => c.id === cheeseId);
                return `<div class="summary-item">
                    <span class="item-name">${cheese.name}</span>
                    <span class="item-price">${cheese.price > 0 ? '$' + cheese.price.toFixed(2) : 'Free'}</span>
                </div>`;
            }).join('')}
            ${this.currentPizza.meats.map(meatId => {
                const meat = PizzaData.meats.find(m => m.id === meatId);
                return `<div class="summary-item">
                    <span class="item-name">${meat.name}</span>
                    <span class="item-price">$${meat.price.toFixed(2)}</span>
                </div>`;
            }).join('')}
            ${this.currentPizza.vegetables.map(veggieId => {
                const veggie = PizzaData.vegetables.find(v => v.id === veggieId);
                return `<div class="summary-item">
                    <span class="item-name">${veggie.name}</span>
                    <span class="item-price">$${veggie.price.toFixed(2)}</span>
                </div>`;
            }).join('')}
            <div class="summary-total">
                <span class="total-label">Total:</span>
                <span class="total-price">$${price.toFixed(2)}</span>
            </div>
        `;
    }

    renderSpecialtyPizzas() {
        const pizzaGrid = document.querySelector('.pizza-grid');
        if (!pizzaGrid) return;

        pizzaGrid.innerHTML = PizzaData.specialtyPizzas.map(pizza => `
            <div class="pizza-card card">
                <div class="pizza-image">
                    <div class="pizza-placeholder">🍕</div>
                </div>
                <div class="pizza-info">
                    <h3>${pizza.name}</h3>
                    <p class="pizza-description">${pizza.description}</p>
                    <div class="pizza-price">$${pizza.price.toFixed(2)}</div>
                    <button class="btn btn-primary add-specialty-btn" data-pizza-id="${pizza.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');

        // Add event listeners for specialty pizzas
        pizzaGrid.querySelectorAll('.add-specialty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const pizzaId = e.target.dataset.pizzaId;
                this.addSpecialtyPizzaToCart(pizzaId);
            });
        });
    }

    addToCart() {
        const pizza = { ...this.currentPizza };
        pizza.price = this.calculatePizzaPrice();
        pizza.id = Date.now(); // Simple ID generation
        
        this.cart.push(pizza);
        this.showNotification('Pizza added to cart!');
        this.resetPizza();
    }

    addSpecialtyPizzaToCart(pizzaId) {
        const specialtyPizza = PizzaData.specialtyPizzas.find(p => p.id === pizzaId);
        if (specialtyPizza) {
            const pizza = {
                ...specialtyPizza,
                id: Date.now(),
                isSpecialty: true
            };
            this.cart.push(pizza);
            this.showNotification(`${specialtyPizza.name} added to cart!`);
        }
    }

    resetPizza() {
        this.currentPizza = { ...PizzaData.defaultPizza };
        this.renderPizzaBuilder();
        this.updatePizzaPreview();
        this.updateOrderSummary();
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    addAnimations() {
        // Add intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        // Observe sections for animation
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                animation: slideIn 0.3s ease-out;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }

            .category-section {
                margin-bottom: var(--spacing-lg);
                padding-bottom: var(--spacing-lg);
                border-bottom: 1px solid var(--border-color);
            }

            .category-section:last-child {
                border-bottom: none;
            }

            .category-section h4 {
                color: var(--primary-color);
                margin-bottom: var(--spacing-md);
                font-size: var(--font-size-lg);
            }

            .options-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: var(--spacing-sm);
            }

            .option-card {
                display: block;
                background: var(--card-bg);
                border: 2px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--spacing-sm);
                cursor: pointer;
                transition: all var(--transition-base);
            }

            .option-card:hover {
                border-color: var(--primary-color);
                box-shadow: var(--shadow-md);
            }

            .option-card.selected {
                border-color: var(--primary-color);
                background-color: var(--accent-color);
            }

            .option-card input {
                display: none;
            }

            .option-content {
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            .option-name {
                font-weight: 600;
                color: var(--text-dark);
            }

            .option-price {
                color: var(--primary-color);
                font-weight: 700;
            }

            .option-description {
                font-size: var(--font-size-xs);
                color: var(--text-medium);
            }

            .summary-item {
                display: flex;
                justify-content: space-between;
                margin-bottom: var(--spacing-xs);
                padding: var(--spacing-xs) 0;
                border-bottom: 1px solid var(--border-color);
            }

            .summary-total {
                display: flex;
                justify-content: space-between;
                margin-top: var(--spacing-sm);
                padding-top: var(--spacing-sm);
                border-top: 2px solid var(--primary-color);
                font-weight: 700;
                font-size: var(--font-size-lg);
            }

            .add-to-cart-section {
                margin-top: var(--spacing-lg);
                display: flex;
                gap: var(--spacing-sm);
            }

            .pizza-card {
                text-align: center;
            }

            .pizza-image {
                height: 200px;
                background: var(--accent-color);
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: var(--spacing-md);
                font-size: 4rem;
            }

            .pizza-description {
                margin-bottom: var(--spacing-md);
                min-height: 40px;
            }

            .pizza-price {
                font-size: var(--font-size-xl);
                font-weight: 700;
                color: var(--primary-color);
                margin-bottom: var(--spacing-md);
            }
        `;
        document.head.appendChild(style);
    }
}

// Pizza Recipe Browser App
class PizzaMakerApp {
    constructor() {
        try {
            // Get pizza recipes from data
            this.pizzaRecipes = PizzaData.pizzaRecipes || [];
            
            // Set default pizza (first one in the list)
            this.currentPizza = this.pizzaRecipes.length > 0 ? this.pizzaRecipes[0] : null;
            
            // DOM elements
            this.pizzaListContainer = null;
            this.pizzaDetailsContainer = null;
            
            // Initialize the app
            this.init();
        } catch (error) {
            console.error('Error initializing PizzaMakerApp:', error);
            this.showError('Failed to initialize pizza recipes app');
        }
    }

    /**
     * Initialize the application
     */
    init() {
        try {
            this.cacheDOM();
            this.renderPizzaList();
            this.renderPizzaDetails();
            this.bindEvents();
            this.addAnimations();
        } catch (error) {
            console.error('Error during app initialization:', error);
            this.showError('Failed to load pizza recipes');
        }
    }

    /**
     * Cache DOM elements for better performance
     */
    cacheDOM() {
        this.pizzaListContainer = document.querySelector('.pizza-list-items');
        this.pizzaDetailsContainer = document.querySelector('.pizza-details');
        this.recipeHeader = document.querySelector('.recipe-header');
        this.ingredientsList = document.querySelector('.ingredients-list');
        this.stepsList = document.querySelector('.steps-list');
        
        if (!this.pizzaListContainer || !this.pizzaDetailsContainer) {
            throw new Error('Required DOM elements not found');
        }
    }

    /**
     * Render the pizza list on the left side
     */
    renderPizzaList() {
        if (!this.pizzaListContainer || !this.pizzaRecipes.length) {
            console.warn('No pizza list container or recipes found');
            return;
        }

        try {
            this.pizzaListContainer.innerHTML = '';

            this.pizzaRecipes.forEach((pizza, index) => {
                const pizzaItem = this.createPizzaListItem(pizza, index);
                this.pizzaListContainer.appendChild(pizzaItem);
            });

            // Highlight the first pizza as selected
            if (this.currentPizza) {
                this.highlightSelectedPizza(this.currentPizza.id);
            }
        } catch (error) {
            console.error('Error rendering pizza list:', error);
            this.showError('Failed to load pizza list');
        }
    }

    /**
     * Create a single pizza list item
     * @param {Object} pizza - Pizza data object
     * @param {number} index - Pizza index
     * @returns {HTMLElement} - Pizza list item element
     */
    createPizzaListItem(pizza, index) {
        const item = document.createElement('div');
        item.className = 'pizza-item';
        item.dataset.pizzaId = pizza.id;
        item.dataset.pizzaIndex = index;

        // Determine difficulty class
        const difficultyClass = pizza.difficultyLevel <= 1 ? 'easy' : 'medium';

        item.innerHTML = `
            <div class="pizza-item-content">
                <div class="pizza-icon">${pizza.image}</div>
                <div class="pizza-info">
                    <h4 class="pizza-name">
                        <span class="name-en">${pizza.name}</span>
                        <span class="name-cn">${pizza.nameCN}</span>
                    </h4>
                    <p class="pizza-description">${pizza.description}</p>
                    <div class="pizza-meta">
                        <span class="difficulty ${difficultyClass}">
                            <span class="difficulty-icon">${pizza.difficultyLevel <= 1 ? '⭐' : '⭐⭐'}</span>
                            ${pizza.difficulty}
                        </span>
                        <span class="time">
                            <span class="time-icon">🕐</span>
                            ${pizza.preparationTime}
                        </span>
                    </div>
                </div>
            </div>
        `;

        return item;
    }

    /**
     * Highlight the selected pizza in the list
     * @param {string} pizzaId - ID of the selected pizza
     */
    highlightSelectedPizza(pizzaId) {
        // Remove existing selection
        this.clearSelection();

        // Add selection to current pizza
        const selectedItem = this.pizzaListContainer.querySelector(`[data-pizza-id="${pizzaId}"]`);
        if (selectedItem) {
            selectedItem.classList.add('selected');
        }
    }

    /**
     * Clear all pizza selections
     */
    clearSelection() {
        const selectedItems = this.pizzaListContainer.querySelectorAll('.pizza-item.selected');
        selectedItems.forEach(item => item.classList.remove('selected'));
    }

    /**
     * Render pizza details on the right side
     */
    renderPizzaDetails() {
        if (!this.currentPizza) {
            this.showPlaceholder();
            return;
        }

        try {
            this.renderRecipeHeader();
            this.renderIngredients();
            this.renderPreparationSteps();
        } catch (error) {
            console.error('Error rendering pizza details:', error);
            this.showError('Failed to load pizza details');
        }
    }

    /**
     * Render the recipe header section
     */
    renderRecipeHeader() {
        if (!this.recipeHeader) return;

        const pizza = this.currentPizza;
        const difficultyStars = '⭐'.repeat(pizza.difficultyLevel);

        this.recipeHeader.innerHTML = `
            <div class="recipe-title">
                <div class="pizza-hero">
                    <span class="pizza-emoji">${pizza.image}</span>
                    <div class="title-content">
                        <h3 class="recipe-name">
                            <span class="name-en">${pizza.name}</span>
                            <span class="name-cn">${pizza.nameCN}</span>
                        </h3>
                        <p class="recipe-description">${pizza.descriptionCN}</p>
                    </div>
                </div>
                <div class="recipe-info">
                    <div class="info-item">
                        <span class="info-icon">🕐</span>
                        <span class="info-text">Time: ${pizza.preparationTime}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">${difficultyStars}</span>
                        <span class="info-text">Difficulty: ${pizza.difficulty}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">👥</span>
                        <span class="info-text">Serves: ${pizza.servings}</span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render the ingredients list grouped by category
     */
    renderIngredients() {
        if (!this.ingredientsList || !this.currentPizza) return;

        const pizza = this.currentPizza;
        
        // Group ingredients by category
        const groupedIngredients = this.groupIngredientsByCategory(pizza.ingredients);

        let ingredientsHTML = '';
        
        // Category colors for different ingredient types
        const categoryColors = {
            'base': '#8D6E63',
            'sauce': '#F44336', 
            'cheese': '#FFC107',
            'meat': '#E91E63',
            'vegetable': '#4CAF50',
            'other': '#9E9E9E'
        };

        Object.entries(groupedIngredients).forEach(([category, ingredients]) => {
            const categoryColor = categoryColors[category] || '#9E9E9E';
            const categoryName = ingredients[0]?.categoryCN || category;
            
            ingredientsHTML += `
                <div class="ingredient-category" data-category="${category}">
                    <h5 class="category-title" style="color: ${categoryColor}">
                        ${categoryName}
                    </h5>
                    <div class="category-ingredients">
                        ${ingredients.map(ingredient => `
                            <div class="ingredient-item">
                                <span class="ingredient-icon">${ingredient.icon}</span>
                                <span class="ingredient-name">${ingredient.nameCN}</span>
                                <span class="ingredient-amount">${ingredient.amount}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        this.ingredientsList.innerHTML = ingredientsHTML;
    }

    /**
     * Group ingredients by their category
     * @param {Array} ingredients - Array of ingredient objects
     * @returns {Object} - Grouped ingredients by category
     */
    groupIngredientsByCategory(ingredients) {
        return ingredients.reduce((groups, ingredient) => {
            const category = ingredient.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(ingredient);
            return groups;
        }, {});
    }

    /**
     * Render the preparation steps
     */
    renderPreparationSteps() {
        if (!this.stepsList || !this.currentPizza) return;

        const steps = this.currentPizza.preparationSteps;
        
        const stepsHTML = steps.map(step => `
            <div class="step-item" data-step="${step.stepNumber}">
                <div class="step-number">${step.stepNumber}</div>
                <div class="step-content-area">
                    <div class="step-header">
                        <span class="step-icon">${step.icon}</span>
                        <div class="step-title">
                            <h5>${step.titleCN}</h5>
                        </div>
                        <span class="step-time">${step.estimatedTime}</span>
                    </div>
                    <div class="step-content">
                        <p class="step-description">${step.descriptionCN}</p>
                        <span class="step-category">${step.category}</span>
                    </div>
                </div>
            </div>
        `).join('');

        this.stepsList.innerHTML = stepsHTML;
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        try {
            // Pizza selection events
            if (this.pizzaListContainer) {
                this.pizzaListContainer.addEventListener('click', this.handlePizzaSelection.bind(this));
            }

            // Keyboard navigation
            document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
        } catch (error) {
            console.error('Error binding events:', error);
        }
    }

    /**
     * Handle pizza selection from the list
     * @param {Event} event - Click event
     */
    handlePizzaSelection(event) {
        try {
            const pizzaItem = event.target.closest('.pizza-item');
            if (!pizzaItem) return;

            const pizzaId = pizzaItem.dataset.pizzaId;
            const selectedPizza = this.pizzaRecipes.find(pizza => pizza.id === pizzaId);

            if (selectedPizza && selectedPizza !== this.currentPizza) {
                this.selectPizza(selectedPizza);
            }
        } catch (error) {
            console.error('Error handling pizza selection:', error);
        }
    }

    /**
     * Select a pizza and update the display
     * @param {Object} pizza - Selected pizza object
     */
    selectPizza(pizza) {
        try {
            // Remove previous selection
            this.clearSelection();

            // Set new current pizza
            this.currentPizza = pizza;

            // Update display with animation
            this.animateDetailsChange(() => {
                this.renderPizzaDetails();
            });

            // Highlight selected pizza
            this.highlightSelectedPizza(pizza.id);

        } catch (error) {
            console.error('Error selecting pizza:', error);
            this.showError('Failed to select pizza');
        }
    }

    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} event - Keyboard event
     */
    handleKeyboardNavigation(event) {
        if (!this.currentPizza) return;

        const currentIndex = this.pizzaRecipes.findIndex(pizza => pizza.id === this.currentPizza.id);
        let newIndex = currentIndex;

        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                newIndex = currentIndex > 0 ? currentIndex - 1 : this.pizzaRecipes.length - 1;
                break;
            case 'ArrowDown':
                event.preventDefault();
                newIndex = currentIndex < this.pizzaRecipes.length - 1 ? currentIndex + 1 : 0;
                break;
            default:
                return;
        }

        if (newIndex !== currentIndex) {
            this.selectPizza(this.pizzaRecipes[newIndex]);
        }
    }

    /**
     * Add smooth animations for content updates
     */
    addAnimations() {
        // Add CSS for smooth transitions
        const style = document.createElement('style');
        style.textContent = `
            .pizza-details {
                transition: opacity 0.3s ease-in-out;
            }
            
            .pizza-item {
                transition: all 0.2s ease-in-out;
                cursor: pointer;
            }
            
            .pizza-item:hover {
                transform: translateX(5px);
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            .pizza-item.selected {
                background-color: var(--accent-color);
                border-left: 4px solid var(--primary-color);
            }
            
            .step-item {
                animation: slideInUp 0.3s ease-out;
            }
            
            .ingredient-category {
                animation: fadeInUp 0.4s ease-out;
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Animate details section change
     * @param {Function} callback - Function to execute during animation
     */
    animateDetailsChange(callback) {
        if (!this.pizzaDetailsContainer) return;

        // Fade out
        this.pizzaDetailsContainer.style.opacity = '0.3';
        
        // Update content
        setTimeout(() => {
            callback();
            
            // Fade in
            this.pizzaDetailsContainer.style.opacity = '1';
        }, 150);
    }

    /**
     * Show placeholder when no pizza is selected
     */
    showPlaceholder() {
        if (!this.recipeHeader || !this.ingredientsList || !this.stepsList) return;

        this.recipeHeader.innerHTML = `
            <div class="placeholder">
                <div class="placeholder-icon">🍕</div>
                <h3>Select a Pizza Recipe</h3>
                <p>Choose a recipe from the list to see ingredients and preparation steps.</p>
            </div>
        `;
        this.ingredientsList.innerHTML = '';
        this.stepsList.innerHTML = '';
    }

    /**
     * Show error message
     * @param {string} message - Error message to display
     */
    showError(message) {
        console.error(message);
        
        if (this.pizzaDetailsContainer) {
            this.pizzaDetailsContainer.innerHTML = `
                <div class="error-message">
                    <div class="error-icon">⚠️</div>
                    <h3>Oops! Something went wrong</h3>
                    <p>${message}</p>
                    <button onclick="location.reload()" class="btn btn-primary">Reload Page</button>
                </div>
            `;
        }
    }

    /**
     * Get current selected pizza
     * @returns {Object|null} - Current pizza object
     */
    getCurrentPizza() {
        return this.currentPizza;
    }

    /**
     * Get all available pizzas
     * @returns {Array} - Array of pizza objects
     */
    getAllPizzas() {
        return this.pizzaRecipes;
    }
}

// Initialize the apps when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize original pizza builder
    new PizzaMaker();
    
    // Initialize recipe browser
    new PizzaMakerApp();
});