// Pizza Maker Data
const PizzaData = {
    // Pizza sizes with prices
    sizes: [
        {
            id: 'small',
            name: 'Small (10")',
            price: 12.99,
            multiplier: 1
        },
        {
            id: 'medium',
            name: 'Medium (12")',
            price: 15.99,
            multiplier: 1.3
        },
        {
            id: 'large',
            name: 'Large (14")',
            price: 18.99,
            multiplier: 1.6
        },
        {
            id: 'xlarge',
            name: 'X-Large (16")',
            price: 22.99,
            multiplier: 2
        }
    ],

    // Pizza crust types
    crusts: [
        {
            id: 'thin',
            name: 'Thin Crust',
            price: 0,
            description: 'Crispy and light'
        },
        {
            id: 'regular',
            name: 'Regular Crust',
            price: 0,
            description: 'Classic hand-tossed'
        },
        {
            id: 'thick',
            name: 'Thick Crust',
            price: 1.50,
            description: 'Deep dish style'
        },
        {
            id: 'stuffed',
            name: 'Stuffed Crust',
            price: 2.99,
            description: 'Cheese-filled edge'
        }
    ],

    // Pizza sauces
    sauces: [
        {
            id: 'tomato',
            name: 'Tomato Sauce',
            price: 0,
            description: 'Classic marinara'
        },
        {
            id: 'white',
            name: 'White Sauce',
            price: 0.50,
            description: 'Creamy garlic base'
        },
        {
            id: 'bbq',
            name: 'BBQ Sauce',
            price: 0.75,
            description: 'Sweet and tangy'
        },
        {
            id: 'pesto',
            name: 'Pesto Sauce',
            price: 1.00,
            description: 'Basil and herb blend'
        },
        {
            id: 'buffalo',
            name: 'Buffalo Sauce',
            price: 0.75,
            description: 'Spicy hot sauce'
        }
    ],

    // Cheese options
    cheeses: [
        {
            id: 'mozzarella',
            name: 'Mozzarella',
            price: 0,
            description: 'Classic pizza cheese'
        },
        {
            id: 'cheddar',
            name: 'Cheddar',
            price: 1.00,
            description: 'Sharp and rich'
        },
        {
            id: 'parmesan',
            name: 'Parmesan',
            price: 1.50,
            description: 'Aged and nutty'
        },
        {
            id: 'goat',
            name: 'Goat Cheese',
            price: 2.00,
            description: 'Creamy and tangy'
        },
        {
            id: 'feta',
            name: 'Feta',
            price: 1.75,
            description: 'Mediterranean style'
        }
    ],

    // Meat toppings
    meats: [
        {
            id: 'pepperoni',
            name: 'Pepperoni',
            price: 1.50,
            description: 'Classic spicy salami'
        },
        {
            id: 'sausage',
            name: 'Italian Sausage',
            price: 1.75,
            description: 'Seasoned ground pork'
        },
        {
            id: 'ham',
            name: 'Ham',
            price: 1.50,
            description: 'Honey glazed ham'
        },
        {
            id: 'bacon',
            name: 'Bacon',
            price: 2.00,
            description: 'Crispy smoked bacon'
        },
        {
            id: 'chicken',
            name: 'Grilled Chicken',
            price: 2.25,
            description: 'Tender chicken breast'
        },
        {
            id: 'beef',
            name: 'Ground Beef',
            price: 1.75,
            description: 'Seasoned lean beef'
        },
        {
            id: 'salami',
            name: 'Salami',
            price: 1.75,
            description: 'Italian dry salami'
        },
        {
            id: 'prosciutto',
            name: 'Prosciutto',
            price: 3.00,
            description: 'Dry-cured Italian ham'
        }
    ],

    // Vegetable toppings
    vegetables: [
        {
            id: 'mushrooms',
            name: 'Mushrooms',
            price: 1.00,
            description: 'Fresh button mushrooms'
        },
        {
            id: 'peppers',
            name: 'Bell Peppers',
            price: 1.00,
            description: 'Red, green, yellow mix'
        },
        {
            id: 'onions',
            name: 'Red Onions',
            price: 0.75,
            description: 'Sweet red onions'
        },
        {
            id: 'olives',
            name: 'Black Olives',
            price: 1.25,
            description: 'Mediterranean olives'
        },
        {
            id: 'tomatoes',
            name: 'Fresh Tomatoes',
            price: 1.00,
            description: 'Ripe cherry tomatoes'
        },
        {
            id: 'spinach',
            name: 'Fresh Spinach',
            price: 1.25,
            description: 'Baby spinach leaves'
        },
        {
            id: 'jalapenos',
            name: 'Jalapeños',
            price: 0.75,
            description: 'Spicy pepper rings'
        },
        {
            id: 'pineapple',
            name: 'Pineapple',
            price: 1.50,
            description: 'Sweet tropical fruit'
        },
        {
            id: 'artichokes',
            name: 'Artichoke Hearts',
            price: 2.00,
            description: 'Marinated artichokes'
        },
        {
            id: 'sun-dried-tomatoes',
            name: 'Sun-Dried Tomatoes',
            price: 1.75,
            description: 'Concentrated tomato flavor'
        }
    ],

    // Specialty pizzas
    specialtyPizzas: [
        {
            id: 'margherita',
            name: 'Margherita',
            description: 'Fresh mozzarella, tomatoes, basil, olive oil',
            price: 16.99,
            image: 'margherita.jpg',
            ingredients: ['mozzarella', 'tomatoes', 'basil']
        },
        {
            id: 'pepperoni-classic',
            name: 'Pepperoni Classic',
            description: 'Pepperoni, mozzarella, tomato sauce',
            price: 18.99,
            image: 'pepperoni.jpg',
            ingredients: ['pepperoni', 'mozzarella']
        },
        {
            id: 'meat-lovers',
            name: 'Meat Lovers',
            description: 'Pepperoni, sausage, ham, bacon, ground beef',
            price: 24.99,
            image: 'meat-lovers.jpg',
            ingredients: ['pepperoni', 'sausage', 'ham', 'bacon', 'beef']
        },
        {
            id: 'veggie-supreme',
            name: 'Veggie Supreme',
            description: 'Mushrooms, bell peppers, onions, olives, tomatoes',
            price: 20.99,
            image: 'veggie-supreme.jpg',
            ingredients: ['mushrooms', 'peppers', 'onions', 'olives', 'tomatoes']
        },
        {
            id: 'hawaiian',
            name: 'Hawaiian',
            description: 'Ham, pineapple, mozzarella, tomato sauce',
            price: 19.99,
            image: 'hawaiian.jpg',
            ingredients: ['ham', 'pineapple', 'mozzarella']
        },
        {
            id: 'bbq-chicken',
            name: 'BBQ Chicken',
            description: 'Grilled chicken, BBQ sauce, red onions, cheddar',
            price: 22.99,
            image: 'bbq-chicken.jpg',
            ingredients: ['chicken', 'onions', 'cheddar']
        },
        {
            id: 'white-pizza',
            name: 'White Pizza',
            description: 'White sauce, mozzarella, parmesan, spinach, garlic',
            price: 19.99,
            image: 'white-pizza.jpg',
            ingredients: ['mozzarella', 'parmesan', 'spinach']
        },
        {
            id: 'buffalo-chicken',
            name: 'Buffalo Chicken',
            description: 'Buffalo chicken, blue cheese, celery, mozzarella',
            price: 23.99,
            image: 'buffalo-chicken.jpg',
            ingredients: ['chicken', 'mozzarella']
        }
    ],

    // Pizza builder default configuration
    defaultPizza: {
        size: 'medium',
        crust: 'regular',
        sauce: 'tomato',
        cheese: ['mozzarella'],
        meats: [],
        vegetables: [],
        specialInstructions: ''
    },

    // Nutritional information (per slice, medium pizza)
    nutrition: {
        calories: {
            thin: 180,
            regular: 220,
            thick: 280,
            stuffed: 320
        },
        baseNutrition: {
            protein: 12,
            carbs: 28,
            fat: 8,
            fiber: 2,
            sodium: 450
        }
    },

    // Store information
    storeInfo: {
        name: 'Pizza Maker',
        phone: '(555) 123-4567',
        email: 'info@pizzamaker.com',
        address: '123 Pizza Street, Food City, FC 12345',
        hours: {
            'monday': '11:00 AM - 10:00 PM',
            'tuesday': '11:00 AM - 10:00 PM',
            'wednesday': '11:00 AM - 10:00 PM',
            'thursday': '11:00 AM - 10:00 PM',
            'friday': '11:00 AM - 11:00 PM',
            'saturday': '11:00 AM - 11:00 PM',
            'sunday': '12:00 PM - 9:00 PM'
        },
        deliveryFee: 2.99,
        minimumOrder: 15.00,
        taxRate: 0.0875 // 8.75%
    },

    // Promotional offers
    promotions: [
        {
            id: 'family-deal',
            name: 'Family Deal',
            description: '2 Large Pizzas + 2L Soda + Garlic Bread',
            price: 34.99,
            savings: 12.00
        },
        {
            id: 'lunch-special',
            name: 'Lunch Special',
            description: 'Personal Pizza + Drink',
            price: 8.99,
            savings: 3.00,
            timeRestriction: '11:00 AM - 3:00 PM'
        }
    ],

    // Pizza Recipes with detailed preparation instructions
    pizzaRecipes: [
        {
            id: 'margherita',
            name: 'Margherita',
            nameCN: '玛格丽特',
            description: 'Classic Italian pizza with tomato, mozzarella, and basil',
            descriptionCN: '经典意式披萨，番茄酱、马苏里拉奶酪和新鲜罗勒',
            image: '🍕',
            preparationTime: '45 minutes',
            difficulty: 'Easy',
            difficultyLevel: 1,
            servings: '2-4',
            ingredients: [
                {
                    name: 'Pizza Dough',
                    nameCN: '披萨面饼',
                    category: 'base',
                    categoryCN: '面饼',
                    amount: '500g',
                    icon: '🍞'
                },
                {
                    name: 'Tomato Sauce',
                    nameCN: '番茄酱',
                    category: 'sauce',
                    categoryCN: '酱料',
                    amount: '120ml',
                    icon: '🍅'
                },
                {
                    name: 'Fresh Mozzarella',
                    nameCN: '新鲜马苏里拉',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '200g',
                    icon: '🧀'
                },
                {
                    name: 'Fresh Basil',
                    nameCN: '新鲜罗勒',
                    category: 'other',
                    categoryCN: '其他',
                    amount: '15g',
                    icon: '🌿'
                },
                {
                    name: 'Extra Virgin Olive Oil',
                    nameCN: '特级初榨橄榄油',
                    category: 'other',
                    categoryCN: '其他',
                    amount: '2 tbsp',
                    icon: '🫒'
                },
                {
                    name: 'Sea Salt',
                    nameCN: '海盐',
                    category: 'other',
                    categoryCN: '其他',
                    amount: '1 tsp',
                    icon: '🧂'
                }
            ],
            preparationSteps: [
                {
                    stepNumber: 1,
                    title: 'Prepare the dough',
                    titleCN: '准备面团',
                    description: 'Roll out the pizza dough on a floured surface to desired thickness.',
                    descriptionCN: '在撒了面粉的台面上将披萨面团擀至所需厚度。',
                    estimatedTime: '10 minutes',
                    category: 'preparation',
                    icon: '🥖'
                },
                {
                    stepNumber: 2,
                    title: 'Apply tomato sauce',
                    titleCN: '涂抹番茄酱',
                    description: 'Spread tomato sauce evenly over the dough, leaving a 2cm border for the crust.',
                    descriptionCN: '将番茄酱均匀涂抹在面团上，边缘留2厘米做饼边。',
                    estimatedTime: '5 minutes',
                    category: 'assembly',
                    icon: '🥄'
                },
                {
                    stepNumber: 3,
                    title: 'Add mozzarella',
                    titleCN: '添加马苏里拉',
                    description: 'Tear mozzarella into pieces and distribute evenly over the sauce.',
                    descriptionCN: '将马苏里拉撕成小块，均匀分布在番茄酱上。',
                    estimatedTime: '3 minutes',
                    category: 'assembly',
                    icon: '🧀'
                },
                {
                    stepNumber: 4,
                    title: 'Bake the pizza',
                    titleCN: '烘烤披萨',
                    description: 'Bake in preheated oven at 250°C for 10-12 minutes until crust is golden.',
                    descriptionCN: '在250°C预热烤箱中烘烤10-12分钟，直到饼边呈金黄色。',
                    estimatedTime: '12 minutes',
                    category: 'cooking',
                    icon: '🔥'
                },
                {
                    stepNumber: 5,
                    title: 'Add fresh basil and serve',
                    titleCN: '添加新鲜罗勒并享用',
                    description: 'Remove from oven, drizzle with olive oil, add fresh basil leaves and serve immediately.',
                    descriptionCN: '出炉后淋上橄榄油，放上新鲜罗勒叶，立即享用。',
                    estimatedTime: '2 minutes',
                    category: 'finishing',
                    icon: '🌿'
                }
            ]
        },
        {
            id: 'pepperoni',
            name: 'Pepperoni',
            nameCN: '意式辣肠',
            description: 'Classic American-style pizza with tomato sauce, mozzarella, and pepperoni',
            descriptionCN: '经典美式披萨，番茄酱、马苏里拉奶酪和意式辣肠',
            image: '🍕',
            preparationTime: '40 minutes',
            difficulty: 'Easy',
            difficultyLevel: 1,
            servings: '2-4',
            ingredients: [
                {
                    name: 'Pizza Dough',
                    nameCN: '披萨面饼',
                    category: 'base',
                    categoryCN: '面饼',
                    amount: '500g',
                    icon: '🍞'
                },
                {
                    name: 'Tomato Sauce',
                    nameCN: '番茄酱',
                    category: 'sauce',
                    categoryCN: '酱料',
                    amount: '120ml',
                    icon: '🍅'
                },
                {
                    name: 'Mozzarella Cheese',
                    nameCN: '马苏里拉奶酪',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '250g',
                    icon: '🧀'
                },
                {
                    name: 'Pepperoni Slices',
                    nameCN: '意式辣肠片',
                    category: 'meat',
                    categoryCN: '肉类',
                    amount: '100g',
                    icon: '🥩'
                },
                {
                    name: 'Dried Oregano',
                    nameCN: '干牛至',
                    category: 'other',
                    categoryCN: '其他',
                    amount: '1 tsp',
                    icon: '🌿'
                },
                {
                    name: 'Olive Oil',
                    nameCN: '橄榄油',
                    category: 'other',
                    categoryCN: '其他',
                    amount: '1 tbsp',
                    icon: '🫒'
                }
            ],
            preparationSteps: [
                {
                    stepNumber: 1,
                    title: 'Prepare the dough',
                    titleCN: '准备面团',
                    description: 'Roll out the pizza dough on a floured surface to desired thickness.',
                    descriptionCN: '在撒了面粉的台面上将披萨面团擀至所需厚度。',
                    estimatedTime: '10 minutes',
                    category: 'preparation',
                    icon: '🥖'
                },
                {
                    stepNumber: 2,
                    title: 'Add sauce and cheese',
                    titleCN: '添加酱料和奶酪',
                    description: 'Spread tomato sauce evenly, then sprinkle mozzarella cheese over the surface.',
                    descriptionCN: '均匀涂抹番茄酱，然后在表面撒上马苏里拉奶酪。',
                    estimatedTime: '5 minutes',
                    category: 'assembly',
                    icon: '🥄'
                },
                {
                    stepNumber: 3,
                    title: 'Arrange pepperoni',
                    titleCN: '摆放意式辣肠',
                    description: 'Place pepperoni slices evenly across the pizza, slightly overlapping.',
                    descriptionCN: '将意式辣肠片均匀摆放在披萨上，稍微重叠。',
                    estimatedTime: '3 minutes',
                    category: 'assembly',
                    icon: '🥩'
                },
                {
                    stepNumber: 4,
                    title: 'Season and bake',
                    titleCN: '调味并烘烤',
                    description: 'Sprinkle oregano, drizzle with olive oil, and bake at 250°C for 10-12 minutes.',
                    descriptionCN: '撒上牛至，淋上橄榄油，在250°C烤箱中烘烤10-12分钟。',
                    estimatedTime: '12 minutes',
                    category: 'cooking',
                    icon: '🔥'
                }
            ]
        },
        {
            id: 'hawaiian',
            name: 'Hawaiian',
            nameCN: '夏威夷',
            description: 'Tropical pizza with tomato sauce, mozzarella, ham, and pineapple',
            descriptionCN: '热带风味披萨，番茄酱、马苏里拉奶酪、火腿和菠萝',
            image: '🍕',
            preparationTime: '45 minutes',
            difficulty: 'Easy',
            difficultyLevel: 1,
            servings: '2-4',
            ingredients: [
                {
                    name: 'Pizza Dough',
                    nameCN: '披萨面饼',
                    category: 'base',
                    categoryCN: '面饼',
                    amount: '500g',
                    icon: '🍞'
                },
                {
                    name: 'Tomato Sauce',
                    nameCN: '番茄酱',
                    category: 'sauce',
                    categoryCN: '酱料',
                    amount: '120ml',
                    icon: '🍅'
                },
                {
                    name: 'Mozzarella Cheese',
                    nameCN: '马苏里拉奶酪',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '200g',
                    icon: '🧀'
                },
                {
                    name: 'Ham Slices',
                    nameCN: '火腿片',
                    category: 'meat',
                    categoryCN: '肉类',
                    amount: '150g',
                    icon: '🍖'
                },
                {
                    name: 'Fresh Pineapple',
                    nameCN: '新鲜菠萝',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '200g',
                    icon: '🍍'
                },
                {
                    name: 'Red Bell Pepper',
                    nameCN: '红甜椒',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '1 medium',
                    icon: '🫑'
                },
                {
                    name: 'Red Onion',
                    nameCN: '红洋葱',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '1/2 medium',
                    icon: '🧅'
                }
            ],
            preparationSteps: [
                {
                    stepNumber: 1,
                    title: 'Prepare ingredients',
                    titleCN: '准备配料',
                    description: 'Cut pineapple into chunks, slice bell pepper and onion into strips.',
                    descriptionCN: '将菠萝切成块，甜椒和洋葱切成条。',
                    estimatedTime: '10 minutes',
                    category: 'preparation',
                    icon: '🔪'
                },
                {
                    stepNumber: 2,
                    title: 'Roll out dough',
                    titleCN: '擀面团',
                    description: 'Roll the pizza dough to desired thickness on a floured surface.',
                    descriptionCN: '在撒了面粉的台面上将披萨面团擀至所需厚度。',
                    estimatedTime: '8 minutes',
                    category: 'preparation',
                    icon: '🥖'
                },
                {
                    stepNumber: 3,
                    title: 'Add base layers',
                    titleCN: '添加基础层',
                    description: 'Spread tomato sauce and sprinkle mozzarella cheese evenly.',
                    descriptionCN: '均匀涂抹番茄酱，撒上马苏里拉奶酪。',
                    estimatedTime: '5 minutes',
                    category: 'assembly',
                    icon: '🥄'
                },
                {
                    stepNumber: 4,
                    title: 'Add toppings',
                    titleCN: '添加配菜',
                    description: 'Distribute ham pieces, pineapple chunks, bell pepper, and onion evenly.',
                    descriptionCN: '均匀分布火腿片、菠萝块、甜椒和洋葱。',
                    estimatedTime: '7 minutes',
                    category: 'assembly',
                    icon: '🍍'
                },
                {
                    stepNumber: 5,
                    title: 'Bake and serve',
                    titleCN: '烘烤并享用',
                    description: 'Bake at 250°C for 12-15 minutes until crust is golden and cheese bubbles.',
                    descriptionCN: '在250°C烤箱中烘烤12-15分钟，直到饼边金黄，奶酪起泡。',
                    estimatedTime: '15 minutes',
                    category: 'cooking',
                    icon: '🔥'
                }
            ]
        },
        {
            id: 'quattro-formaggi',
            name: 'Quattro Formaggi',
            nameCN: '四种奶酪',
            description: 'Rich white pizza with four different types of Italian cheese',
            descriptionCN: '丰富的白披萨，配有四种不同的意大利奶酪',
            image: '🍕',
            preparationTime: '50 minutes',
            difficulty: 'Medium',
            difficultyLevel: 2,
            servings: '2-4',
            ingredients: [
                {
                    name: 'Pizza Dough',
                    nameCN: '披萨面饼',
                    category: 'base',
                    categoryCN: '面饼',
                    amount: '500g',
                    icon: '🍞'
                },
                {
                    name: 'White Sauce (Béchamel)',
                    nameCN: '白酱（贝夏美尔酱）',
                    category: 'sauce',
                    categoryCN: '酱料',
                    amount: '100ml',
                    icon: '🥛'
                },
                {
                    name: 'Mozzarella Cheese',
                    nameCN: '马苏里拉奶酪',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '150g',
                    icon: '🧀'
                },
                {
                    name: 'Parmesan Cheese',
                    nameCN: '帕玛森奶酪',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '80g',
                    icon: '🧀'
                },
                {
                    name: 'Gorgonzola Cheese',
                    nameCN: '戈贡佐拉奶酪',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '100g',
                    icon: '🧀'
                },
                {
                    name: 'Ricotta Cheese',
                    nameCN: '瑞科塔奶酪',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '120g',
                    icon: '🧀'
                },
                {
                    name: 'Fresh Black Pepper',
                    nameCN: '新鲜黑胡椒',
                    category: 'other',
                    categoryCN: '其他',
                    amount: '1/2 tsp',
                    icon: '⚫'
                },
                {
                    name: 'Fresh Thyme',
                    nameCN: '新鲜百里香',
                    category: 'other',
                    categoryCN: '其他',
                    amount: '1 tsp',
                    icon: '🌿'
                }
            ],
            preparationSteps: [
                {
                    stepNumber: 1,
                    title: 'Prepare white sauce',
                    titleCN: '准备白酱',
                    description: 'Make a light béchamel sauce with butter, flour, and milk. Season with salt and nutmeg.',
                    descriptionCN: '用黄油、面粉和牛奶制作清淡的贝夏美尔酱，用盐和肉豆蔻调味。',
                    estimatedTime: '15 minutes',
                    category: 'preparation',
                    icon: '🥛'
                },
                {
                    stepNumber: 2,
                    title: 'Prepare cheeses',
                    titleCN: '准备奶酪',
                    description: 'Grate parmesan, crumble gorgonzola, and prepare ricotta and mozzarella.',
                    descriptionCN: '磨碎帕玛森奶酪，捏碎戈贡佐拉，准备瑞科塔和马苏里拉奶酪。',
                    estimatedTime: '10 minutes',
                    category: 'preparation',
                    icon: '🧀'
                },
                {
                    stepNumber: 3,
                    title: 'Roll and sauce',
                    titleCN: '擀面涂酱',
                    description: 'Roll out dough and spread white sauce evenly, leaving border for crust.',
                    descriptionCN: '擀开面团，均匀涂抹白酱，边缘留作饼边。',
                    estimatedTime: '8 minutes',
                    category: 'assembly',
                    icon: '🥄'
                },
                {
                    stepNumber: 4,
                    title: 'Add four cheeses',
                    titleCN: '添加四种奶酪',
                    description: 'Distribute each cheese in quarters: mozzarella, parmesan, gorgonzola, and ricotta.',
                    descriptionCN: '将四种奶酪分四个区域分布：马苏里拉、帕玛森、戈贡佐拉和瑞科塔。',
                    estimatedTime: '8 minutes',
                    category: 'assembly',
                    icon: '🧀'
                },
                {
                    stepNumber: 5,
                    title: 'Season and bake',
                    titleCN: '调味并烘烤',
                    description: 'Sprinkle with black pepper and thyme. Bake at 240°C for 12-14 minutes.',
                    descriptionCN: '撒上黑胡椒和百里香。在240°C烤箱中烘烤12-14分钟。',
                    estimatedTime: '14 minutes',
                    category: 'cooking',
                    icon: '🔥'
                }
            ]
        },
        {
            id: 'vegetarian',
            name: 'Vegetarian Supreme',
            nameCN: '蔬菜至尊',
            description: 'Garden-fresh pizza loaded with colorful vegetables and herbs',
            descriptionCN: '新鲜花园披萨，满载各色蔬菜和香草',
            image: '🍕',
            preparationTime: '55 minutes',
            difficulty: 'Medium',
            difficultyLevel: 2,
            servings: '2-4',
            ingredients: [
                {
                    name: 'Pizza Dough',
                    nameCN: '披萨面饼',
                    category: 'base',
                    categoryCN: '面饼',
                    amount: '500g',
                    icon: '🍞'
                },
                {
                    name: 'Tomato Sauce',
                    nameCN: '番茄酱',
                    category: 'sauce',
                    categoryCN: '酱料',
                    amount: '120ml',
                    icon: '🍅'
                },
                {
                    name: 'Mozzarella Cheese',
                    nameCN: '马苏里拉奶酪',
                    category: 'cheese',
                    categoryCN: '奶酪',
                    amount: '200g',
                    icon: '🧀'
                },
                {
                    name: 'Bell Peppers (Mixed)',
                    nameCN: '彩椒（混合）',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '2 medium',
                    icon: '🫑'
                },
                {
                    name: 'Fresh Mushrooms',
                    nameCN: '新鲜蘑菇',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '200g',
                    icon: '🍄'
                },
                {
                    name: 'Red Onion',
                    nameCN: '红洋葱',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '1 medium',
                    icon: '🧅'
                },
                {
                    name: 'Cherry Tomatoes',
                    nameCN: '樱桃番茄',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '150g',
                    icon: '🍅'
                },
                {
                    name: 'Black Olives',
                    nameCN: '黑橄榄',
                    category: 'vegetable',
                    categoryCN: '蔬菜',
                    amount: '80g',
                    icon: '🫒'
                }
            ],
            preparationSteps: [
                {
                    stepNumber: 1,
                    title: 'Prepare vegetables',
                    titleCN: '准备蔬菜',
                    description: 'Slice bell peppers, mushrooms, and onions. Halve cherry tomatoes. Drain olives.',
                    descriptionCN: '切片彩椒、蘑菇和洋葱。樱桃番茄切半。沥干橄榄。',
                    estimatedTime: '15 minutes',
                    category: 'preparation',
                    icon: '🔪'
                },
                {
                    stepNumber: 2,
                    title: 'Sauté vegetables',
                    titleCN: '炒制蔬菜',
                    description: 'Lightly sauté mushrooms and onions until slightly softened. Set aside to cool.',
                    descriptionCN: '轻炒蘑菇和洋葱至稍软。放置一旁晾凉。',
                    estimatedTime: '8 minutes',
                    category: 'preparation',
                    icon: '🍳'
                },
                {
                    stepNumber: 3,
                    title: 'Prepare pizza base',
                    titleCN: '准备披萨底',
                    description: 'Roll out dough and spread tomato sauce evenly, then add mozzarella cheese.',
                    descriptionCN: '擀开面团，均匀涂抹番茄酱，然后加上马苏里拉奶酪。',
                    estimatedTime: '10 minutes',
                    category: 'assembly',
                    icon: '🥄'
                },
                {
                    stepNumber: 4,
                    title: 'Add vegetables',
                    titleCN: '添加蔬菜',
                    description: 'Arrange all vegetables evenly: peppers, mushrooms, onions, tomatoes, and olives.',
                    descriptionCN: '均匀摆放所有蔬菜：彩椒、蘑菇、洋葱、番茄和橄榄。',
                    estimatedTime: '10 minutes',
                    category: 'assembly',
                    icon: '🥗'
                },
                {
                    stepNumber: 5,
                    title: 'Bake to perfection',
                    titleCN: '烘烤至完美',
                    description: 'Bake at 245°C for 14-16 minutes until vegetables are tender and crust is golden.',
                    descriptionCN: '在245°C烤箱中烘烤14-16分钟，直到蔬菜软嫩，饼边金黄。',
                    estimatedTime: '16 minutes',
                    category: 'cooking',
                    icon: '🔥'
                },
                {
                    stepNumber: 6,
                    title: 'Rest and serve',
                    titleCN: '静置并享用',
                    description: 'Let pizza rest for 2-3 minutes before slicing. Garnish with fresh herbs if desired.',
                    descriptionCN: '披萨静置2-3分钟后切片。如需要可用新鲜香草装饰。',
                    estimatedTime: '3 minutes',
                    category: 'finishing',
                    icon: '🍽️'
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PizzaData;
}