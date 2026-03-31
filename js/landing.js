// ===================================
// LANDING PAGE JS - Floreli Guadalajara
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
            {
                id: 1,
                name: "Ramo 50 Rosas Atadas",
                price: 1700,
                image: "../assets/foto1.webp",
                description: "Hermoso ramo de 50 rosas frescas cuidadosamente atadas. Un arreglo generoso y elegante perfecto para sorpresas especiales. Las rosas frescas se mantienen por días con los cuidados adecuados.",
                categories: ["rosas", "precio-medio"]
            },
            {
                id: 2,
                name: "Ramo 24 Rosas Atadas",
                price: 1000,
                image: "../assets/foto1.webp",
                description: "Delicado ramo de 24 rosas frescas atadas con elegancia. Un regalo clásico y romántico ideal para cualquier ocasión especial. Las rosas duran más tiempo con el tallo cortado en diagonal.",
                categories: ["rosas", "precio-medio"]
            },
            {
                id: 3,
                name: "Caja Floral 50 Rosas",
                price: 2050,
                image: "../assets/foto2.webp",
                description: "Elegante caja floral con 50 rosas rojas vibrantes presentadas en base de espuma floral. Arreglo premium que combina cantidad con sofisticación. Perfecto para expresar amor y admiración.",
                categories: ["rosas", "cajas", "precio-medio"]
            },
            {
                id: 4,
                name: "Caja Floral 100 Rosas y Orquídeas",
                price: 3500,
                image: "../assets/foto3.webp",
                description: "Espectacular caja floral que combina 100 rosas rojas intensas con elegantes orquídeas blancas en base de espuma. Arreglo de lujo con una presentación envolvente y sofisticada. Ideal para momentos memorables.",
                categories: ["rosas", "cajas", "premium", "precio-alto"]
            },
            {
                id: 5,
                name: "Corazón 50 Rosas Rojas",
                price: 2200,
                image: "../assets/foto4.webp",
                description: "Romántico corazón floral formado por 50 rosas rojas frescas en base de espuma. Diseño clásico de amor que expresa pasión y devoción. Presentación visual impactante para momentos inolvidables.",
                categories: ["rosas", "cajas", "precio-medio"]
            },
            {
                id: 6,
                name: "Jarrón 12 Rosas",
                price: 600,
                image: "../assets/foto5.webp",
                description: "Elegante jarrón con 12 rosas frescas en agua. Arreglo accesible y hermoso que añade calidez a cualquier espacio. Las rosas se mantienen frescas y brillantes durante la semana.",
                categories: ["rosas", "precio-bajo"]
            },
            {
                id: 7,
                name: "Jarrón 24 Rosas",
                price: 1000,
                image: "../assets/foto5.webp",
                description: "Generoso jarrón con 24 rosas frescas en agua cristalina. Arreglo elegante y duradero que llena de color y fragancia cualquier ambiente. Perfecto para decoración durable y económica.",
                categories: ["rosas", "precio-medio"]
            },
            {
                id: 8,
                name: "Ramo 6 Girasoles",
                price: 700,
                image: "../assets/foto6.webp",
                description: "Radiante ramo de 6 girasoles que irradian alegría y vitalidad. Flores frescas y brillantes que traen luz a cualquier espacio. Ideal para sorpresas económicas con mucho impacto visual.",
                categories: ["girasoles", "precio-bajo"]
            },
            {
                id: 9,
                name: "Ramo 12 Girasoles",
                price: 1050,
                image: "../assets/foto6.webp",
                description: "Abundante ramo de 12 girasoles frescos que capturan la esencia del verano. Flores doradas y brillantes que transmiten positivismo y energía. Perfecto para alegrar cualquier ambiente.",
                categories: ["girasoles", "precio-medio"]
            },
            {
                id: 10,
                name: "Ramo 12 Girasoles Soleados",
                price: 1050,
                image: "../assets/foto7.webp",
                description: "Espléndido ramo de 12 girasoles frescos presentados juntos. Las flores amarillas doradas simbolizan alegría y lealtad. Arreglo generoso ideal para expresar buenos deseos y optimismo.",
                categories: ["girasoles", "precio-medio"]
            },
            {
                id: 11,
                name: "Ramo 10 Tulipanes",
                price: 1400,
                image: "../assets/foto8.webp",
                description: "Elegante ramo de 10 tulipanes frescos en tonos vibrantes. Flores delicadas y refinadas que simbolizan elegancia y primavera. Perfecto para expresar amor y admiración con sofisticación.",
                categories: ["tulipanes", "precio-medio"]
            },
            {
                id: 12,
                name: "Ramo 30 Tulipanes Multicolores",
                price: 3600,
                image: "../assets/foto9.webp",
                description: "Exuberante ramo de 30 tulipanes frescos en variados colores. Flores premium que crean un efecto visual espectacular. Arreglo generoso y lujoso perfecto para ocasiones especiales.",
                categories: ["tulipanes", "premium", "precio-alto"]
            },
            {
                id: 13,
                name: "Ramo 20 Tulipanes",
                price: 2450,
                image: "../assets/foto10.webp",
                description: "Hermoso ramo de 20 tulipanes frescos en presentación elegante. Flores delicadas con pétalos suaves que duran más tiempo. Ideal para expresar sentimientos románticos con estilo.",
                categories: ["tulipanes", "precio-alto"]
            },
            {
                id: 14,
                name: "Ramo 12 Gerberas",
                price: 800,
                image: "../assets/foto11.webp",
                description: "Colorido ramo de 12 gerberas frescas en tonos variados. Flores grandes y vistosas que radiante alegría y vitalidad. Arreglo popular y duradero que embellece cualquier espacio.",
                categories: ["gerberas", "precio-bajo"]
            },
            {
                id: 15,
                name: "Ramo Mix Pequeño Flores Surtidas",
                price: 850,
                image: "../assets/foto12.webp",
                description: "Bonito ramo pequeño con 12 tallos de flores surtidas de temporada. Combinación multicolor que mezcla texturas y aromas. Arreglo económico y versátil perfecto para cualquier ocasión.",
                categories: ["mix", "bouquets", "precio-bajo"]
            },
            {
                id: 16,
                name: "Ramo Mix Mediano Flores Surtidas",
                price: 1400,
                image: "../assets/foto13.webp",
                description: "Vistoso ramo mediano con 18 tallos de flores surtidas de temporada. Combinación armoniosa que mezcla colores, aromas y texturas. Ideal para decoración y regalos con variedad.",
                categories: ["mix", "bouquets", "precio-medio"]
            },
            {
                id: 17,
                name: "Ramo Mix Grande Flores Temporada",
                price: 2100,
                image: "../assets/foto14.webp",
                description: "Exuberante ramo grande con 30 tallos de flores mixtas de temporada. Combinación premium que ofrece abundancia y variedad de colores. Perfecto para hacer una declaración floral impactante.",
                categories: ["mix", "bouquets", "precio-medio"]
            },
            {
                id: 18,
                name: "Caja Floral Mix Lisiantus y Orquídeas",
                price: 2900,
                image: "../assets/foto15.webp",
                description: "Sofisticada caja floral con mix de flores incluyendo lisiantus, rosas, mini rosas, hortensias y una vara de orquídea. Arreglo premium multifloral que combina elegancia y abundancia. Presentación impactante.",
                categories: ["cajas", "mix", "premium", "precio-alto"]
            },
            {
                id: 19,
                name: "Caja Floral Mix Flores Premium",
                price: 2600,
                image: "../assets/foto16.webp",
                description: "Hermosa caja floral con mix sofisticado: lisiantus, rosa, mini rosas y eucalipto. Combinación elegante de flores que crea una presentación refinada. Ideal para sorpresas especiales.",
                categories: ["cajas", "mix", "premium", "precio-alto"]
            },
            {
                id: 20,
                name: "Bouquet 24 Rosas Blanco y Rosa",
                price: 1000,
                image: "../assets/foto17.webp",
                description: "Delicado bouquet de 24 rosas en tonos blanco y rosa pastel. Combinación romántica y tierna que simboliza amor suave. Perfecto para expresar sentimientos con delicadeza y elegancia.",
                categories: ["rosas", "bouquets", "precio-medio"]
            },
            {
                id: 21,
                name: "Bouquet 24 Rosas Rojo y Rosa",
                price: 1000,
                image: "../assets/foto18.webp",
                description: "Pasional bouquet de 24 rosas combinando rojo intenso con rosa. Mezcla que expresa tanto pasión como romance. Presentación clásica y elegante para momentos significativos.",
                categories: ["rosas", "bouquets", "precio-medio"]
            },
            {
                id: 22,
                name: "Bouquet 24 Rosas con 20 Tulipanes",
                price: 3100,
                image: "../assets/foto19.webp",
                description: "Lujoso bouquet que combina 24 rosas con 20 tulipanes frescos. Mezcla premium que une dos flores clásicas del romance. Arreglo generoso y espectacular para ocasiones especiales.",
                categories: ["rosas", "tulipanes", "bouquets", "premium", "precio-alto"]
            },
            {
                id: 23,
                name: "Caja Floral Estilo Garden",
                price: 2200,
                image: "../assets/foto20.webp",
                description: "Elegante caja floral con diseño garden que imita un jardín natural. Combinación de flores frescas en presentación rústica y sofisticada. Perfecto para regalos premium que impresionen.",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 24,
                name: "Caja Floral Estilo Garden Deluxe",
                price: 2600,
                image: "../assets/foto21.webp",
                description: "Suntuosa caja floral garden con abundancia de flores en arreglo natural. Diseño premium que combina elementos rústicos con sofisticación. Ideal para ocasiones que merecen lo mejor.",
                categories: ["cajas", "premium", "precio-alto"]
            },
            {
                id: 25,
                name: "Ramo Mix Grande Flores Premium",
                price: 2300,
                image: "../assets/foto22.webp",
                description: "Abundante ramo grande con 30 tallos de flores mixtas de temporada en selección premium. Arreglo generoso que mezcla colores y texturas. Perfecto para regalos especiales con impacto visual.",
                categories: ["mix", "bouquets", "precio-alto"]
            }
        ];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- QUITAR TILDES para búsqueda ---
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.categories && p.categories.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- ACTUALIZAR CONTADOR DE RESULTADOS ---
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = count === 0 ? 'block' : 'none';
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    let productsToDisplay = products;

    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

    // Filtrar por categoría
    if (filters.length > 0 && filters[0] !== 'todos') {
        productsToDisplay = productsToDisplay.filter(p =>
            filters.some(f => p.categories && p.categories.includes(f))
        );
    }

    // Filtrar por búsqueda (sin tildes)
    if (currentSearchQuery) {
        const query = removeAccents(currentSearchQuery);
        productsToDisplay = productsToDisplay.filter(p => {
            const name = removeAccents(p.name);
            const desc = removeAccents(p.description);
            const cats = p.categories ? p.categories.map(c => removeAccents(c)).join(' ') : '';
            return name.includes(query) || desc.includes(query) || cats.includes(query);
        });
    }

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    // Intercalar productos para variedad visual (solo en vista general sin búsqueda)
    if ((!filters.length || filters[0] === 'todos') && !currentSearchQuery) {
        const funebre = productsToDisplay.filter(p => p.categories.includes('funebre'));
        const noFunebre = productsToDisplay.filter(p => !p.categories.includes('funebre'));

        const categoryGroups = {};
        const categoryOrder = ['bouquets', 'cajas', 'canastas', 'girasoles', 'gerberas', 'pompones', 'rosas-eternas', 'coreano', 'novia', 'chocolates', 'premium'];

        noFunebre.forEach(p => {
            const mainCat = categoryOrder.find(c => p.categories.includes(c)) || 'otros';
            if (!categoryGroups[mainCat]) categoryGroups[mainCat] = [];
            categoryGroups[mainCat].push(p);
        });

        Object.values(categoryGroups).forEach(group => {
            group.sort((a, b) => a.price - b.price);
            const temp = [];
            let lo = 0, hi = group.length - 1;
            let pickHigh = true;
            while (lo <= hi) {
                if (pickHigh) { temp.push(group[hi--]); }
                else { temp.push(group[lo++]); }
                pickHigh = !pickHigh;
            }
            group.length = 0;
            group.push(...temp);
        });

        const interleaved = [];
        const activeCats = categoryOrder.filter(c => categoryGroups[c] && categoryGroups[c].length > 0);
        if (categoryGroups['otros'] && categoryGroups['otros'].length > 0) activeCats.push('otros');

        let maxLen = Math.max(...activeCats.map(c => categoryGroups[c].length));
        for (let i = 0; i < maxLen; i++) {
            for (const cat of activeCats) {
                if (categoryGroups[cat] && i < categoryGroups[cat].length) {
                    interleaved.push(categoryGroups[cat][i]);
                }
            }
        }

        productsToDisplay = [...interleaved, ...funebre];
    }

    container.innerHTML = '';
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const productHTML = `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Guadalajara" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">${formatCOP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${escapedName}', '${product.price}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// --- FUNCIONES DE WHATSAPP ---
function contactWA() {
    const url = 'https://wa.me/5213331727333?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17949726049/eNHaCKmS7v4bELyX8PtC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price) {
    const message = `Hola, me interesa ${productName} (${formatCOP(parseFloat(price))}). ¿Podrías darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/5213331727333?text=${encodedMessage}`;
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17949726049/eNHaCKmS7v4bELyX8PtC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    currentLandingFilter = tag;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'todos') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// --- INICIALIZAR CATÁLOGO COMPLETO ---
function initCatalog() {
    window._catalogInitialized = true;
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value.trim();
            if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchQuery = '';
            this.style.display = 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }

    // Render inicial con todos los productos
    renderProducts();
}

// Inicializar automáticamente si no se define LANDING_PRIORITY_TAG manualmente
document.addEventListener('DOMContentLoaded', function() {
    // Solo inicializar si no hay un script en la página que lo haga
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
