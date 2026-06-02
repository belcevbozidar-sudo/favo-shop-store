// --- PREMIUM FAVO-SHOP PRODUCTS DATASET ---
const PRODUCTS = [
  {
    id: 1,
    name: "Алуминиева маса FAVO 2S ALU PRO (2 метра)",
    category: "tables",
    categoryBg: "Сгъваеми маси",
    price: 70.02,
    oldPrice: null,
    image: "assets/table_alu_2m.png",
    rating: 5,
    tag: "СОБСТВЕНО ПРОИЗВОДСТВО",
    description: "Професионална сгъваема алуминиева маса с дължина 2 метра. Изключително лека, стабилна и удобна за бита, събития и улични продажби. Плот от висококачествен водоустойчив шперплат с подсилен алуминиев кант. Лесна за пренасяне и сгъване за секунди.",
    specs: {
      metal: "Алуминий & Водоустойчив шперплат",
      weight: "2000 x 600 x 750 мм (Разгъната)",
      stone: "FAVO Trade (България)",
      packaging: "Транспортен кашон с бърза доставка до 2 работни дни"
    }
  },
  {
    id: 2,
    name: "Алуминиева маса FAVO 3S ALU PRO (+ подарък отвертки)",
    category: "tables",
    categoryBg: "Сгъваеми маси",
    price: 92.12,
    oldPrice: 110.00,
    image: "assets/table_alu_3m.png",
    rating: 5,
    tag: "ПРОМО ПАКЕТ",
    description: "Премиум сгъваема маса с дължина 3 метра, окомплектована с подарък висококачествен комплект отвертки. Перфектният избор за пазари, търговия на открито и домашни ремонти. Здрава конструкция с висока товароносимост.",
    specs: {
      metal: "Алуминий & Усилен шперплат плот",
      weight: "3000 x 600 x 750 мм (Разгъната)",
      stone: "FAVO Trade (България)",
      packaging: "Защитен кашон, комплект отвертки като подарък"
    }
  },
  {
    id: 3,
    name: "Дървена маса FAVO 2S PRO (Сгъваема)",
    category: "tables",
    categoryBg: "Сгъваеми маси",
    price: 50.07,
    oldPrice: 60.30,
    rating: 5,
    tag: "-17% НАМАЛЕНИЕ",
    image: "assets/table_wood.png",
    description: "Класическа дървена сгъваема маса собствено производство, изработена от подбран иглолистен материал и технически шперплат. Компактна, здрава и изключително икономична. Идеална за тераси, градини и къмпинг.",
    specs: {
      metal: "Иглолистна дървесина & Тополов шперплат",
      weight: "2000 x 600 x 750 мм",
      stone: "FAVO Trade (България)",
      packaging: "Кашон, инструкции за експлоатация"
    }
  },
  {
    id: 4,
    name: "Сертифициран шперплат топола 3 мм (A3 формат)",
    category: "plywood",
    categoryBg: "Шперплат",
    price: 4.50,
    oldPrice: null,
    image: "assets/plywood_sheet.png",
    rating: 5,
    tag: "НАЙ-ПРОДАВАН",
    description: "Шперплат от топола с дебелина 3 мм, нарязан във формат А3 (297х420 мм). Идеален за лазерно рязане, гравиране, моделизъм и училищни хоби проекти. FAVO е единственият производител в България на висококачествен шперплат с дебелина 2 и 3 мм.",
    specs: {
      metal: "100% Българска топола (Сертифициран)",
      weight: "Формат А3 (420 x 297 мм), Дебелина 3 мм",
      stone: "FAVO Trade (България)",
      packaging: "Защитен пакет против влага при транспорт"
    }
  },
  {
    id: 5,
    name: "Дървена луксозна кутия за вино",
    category: "souvenirs",
    categoryBg: "Сувенири",
    price: 29.34,
    oldPrice: null,
    image: "assets/wood_wine_box.png",
    rating: 5,
    tag: "УНИКАЛЕН ПОДАРЪК",
    description: "Луксозна дървена кутия за бутилка вино с индивидуален дизайн и прецизно лазерно гравиране. Подходяща за юбилеи, сватби, лични празници или корпоративни подаръци. Здраво и фино затваряне с месингов обков.",
    specs: {
      metal: "Липа шперплат & Месингови елементи",
      weight: "350 x 100 x 100 мм",
      stone: "Лазерно изрязано в Свищов",
      packaging: "Опакована в предпазно фолио за сигурност"
    }
  },
  {
    id: 6,
    name: "Вечен календар от дърво на стойка",
    category: "souvenirs",
    categoryBg: "Сувенири",
    price: 29.34,
    oldPrice: 39.12,
    image: "assets/wood_calendar.png",
    rating: 5,
    tag: "ХИТ СУВЕНИР",
    description: "Стилен и екологичен вечен календар на стойка, изработен от естествена липа. Прекрасен подарък за офис или дом. Позволява лесно нагласяне на деня и месеца чрез завъртане на ринговете. Възможност за персонализирано гравиране по Ваш дизайн.",
    specs: {
      metal: "Премиум шперплат липа 4 мм",
      weight: "200 x 180 x 60 мм",
      stone: "Ръчно сглобено в Свищов",
      packaging: "Кутия от крафт картон"
    }
  },
  {
    id: 7,
    name: "Комплект бояджийски валяци FAVO PRO",
    category: "tools",
    categoryBg: "Инструменти",
    price: 15.80,
    oldPrice: null,
    image: "assets/paint_brushes.png",
    rating: 4,
    tag: "НОВО",
    description: "Професионален комплект за боядисване, включващ два валяка от микрофибър с различна дължина и ергономична дръжка. Осигурява идеално гладко разпределение на боята без капане и разплискване. Подходящ за латекс, акрилни и алкидни бои.",
    specs: {
      metal: "Микрофибърни влакна & Олекотена пластмаса",
      weight: "Ширина 180 мм / 250 мм",
      stone: "FAVO Trade Дистрибуция",
      packaging: "Полиетиленов предпазен плик"
    }
  },
  {
    id: 8,
    name: "Коледен венец голям (Дърво)",
    category: "souvenirs",
    categoryBg: "Сувенири",
    price: 18.19,
    oldPrice: 25.00,
    image: "assets/christmas_wreath.png",
    rating: 5,
    tag: "СЕЗОННА КОЛЕКЦИЯ",
    description: "Ръчно декориран голям коледен венец с прецизни детайли, изрязани с лазер. Прекрасна украса за входна врата или трапезария, която носи празнично настроение и топлина. Направен изцяло от екологични биоразградими материали.",
    specs: {
      metal: "Техническа липа & Еко бои",
      weight: "Диаметър 300 мм",
      stone: "Ръчна изработка от FAVO",
      packaging: "Транспортна кутия от велпапе"
    }
  }
];

// --- SHOPPING CART STATE ---
let cart = JSON.parse(localStorage.getItem('favoshop_cart')) || [];
let activeProduct = null;

// --- DYNAMIC RENDER FUNCTIONS ---
function renderCatalog(filter = "all") {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  const filteredProducts = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    // Star Rating HTML
    let ratingStars = "";
    for (let i = 1; i <= 5; i++) {
      ratingStars += `<i class="${i <= product.rating ? 'fas' : 'far'} fa-star"></i>`;
    }
    
    // Tag Badge HTML
    const tagHtml = product.tag ? `<span class="badge-tag ${product.tag.includes('ПРОМО') || product.tag.includes('НАМАЛЕНИЕ') ? 'sale' : ''}">${product.tag}</span>` : "";
    
    // Old price HTML
    const priceHtml = product.oldPrice 
      ? `<span class="product-price old-price">${product.oldPrice.toFixed(2)} лв.</span>
         <span class="product-price" style="color: var(--accent);">${product.price.toFixed(2)} лв.</span>`
      : `<span class="product-price">${product.price.toFixed(2)} лв.</span>`;

    card.innerHTML = `
      ${tagHtml}
      <div class="product-image-container" onclick="openProductPage(${product.id})">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-overlay-actions">
          <button class="action-icon-btn" title="Преглед на продукт">
            <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
      <div class="product-details">
        <span class="product-category">${product.categoryBg}</span>
        <h3 class="product-name" style="cursor: pointer;" onclick="openProductPage(${product.id})">${product.name}</h3>
        <div class="product-rating">${ratingStars}</div>
        <div class="product-price-box">
          ${priceHtml}
        </div>
        <button class="btn-card-buy" onclick="addToCart(${product.id}, 1)">Добави в количката</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- CART STATE SYNC & RENDERING ---
function updateCartCount() {
  const countElements = document.querySelectorAll(".cart-count");
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  countElements.forEach(el => {
    el.textContent = totalQty;
    el.style.display = totalQty > 0 ? "flex" : "none";
  });
}

function saveCart() {
  localStorage.setItem('favoshop_cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const existingItemIndex = cart.findIndex(item => item.id === productId);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  
  saveCart();
  openCartSidebar();
}

function updateCartItemQty(productId, newQty) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;
  
  if (newQty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = newQty;
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function renderCartItems() {
  const itemsContainer = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("cart-subtotal");
  const checkoutFormEl = document.getElementById("cart-checkout-form");
  
  if (!itemsContainer || !subtotalEl) return;
  
  if (cart.length === 0) {
    itemsContainer.innerHTML = `<div class="cart-empty-message">Вашата количка е празна.</div>`;
    subtotalEl.textContent = "0.00 лв.";
    if (checkoutFormEl) checkoutFormEl.classList.remove("active");
    return;
  }
  
  itemsContainer.innerHTML = "";
  let subtotal = 0;
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    
    const itemRow = document.createElement("div");
    itemRow.className = "cart-item";
    itemRow.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-price">${item.price.toFixed(2)} лв.</span>
        <div class="cart-item-qty-row">
          <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, ${item.quantity - 1})">-</button>
          <span class="cart-qty-val">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button class="cart-item-remove-btn" onclick="removeFromCart(${item.id})" title="Премахни">
        <svg style="width: 18px; height: 18px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      </button>
    `;
    itemsContainer.appendChild(itemRow);
  });
  
  subtotalEl.textContent = `${subtotal.toFixed(2)} лв.`;
  if (checkoutFormEl) checkoutFormEl.classList.add("active");
}

function openCartSidebar() {
  document.getElementById("cart-overlay").classList.add("active");
}

function closeCartSidebar() {
  document.getElementById("cart-overlay").classList.remove("active");
}

// --- DEDICATED PRODUCT PAGE CONTROLS ---
function openProductPage(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  activeProduct = product;
  window.location.hash = `product/${productId}`;
  
  document.getElementById("detail-cat").textContent = product.categoryBg;
  document.getElementById("detail-title").textContent = product.name;
  document.getElementById("detail-desc").textContent = product.description;
  document.getElementById("detail-image").src = product.image;
  document.getElementById("detail-image").alt = product.name;
  
  // Technical Specs
  document.getElementById("detail-spec-metal").textContent = product.specs.metal;
  document.getElementById("detail-spec-weight").textContent = product.specs.weight;
  document.getElementById("detail-spec-stone").textContent = product.specs.stone;
  document.getElementById("detail-spec-packaging").textContent = product.specs.packaging;
  
  // Stars Rating
  let ratingStars = "";
  for (let i = 1; i <= 5; i++) {
    ratingStars += `<i class="${i <= product.rating ? 'fas' : 'far'} fa-star"></i>`;
  }
  document.getElementById("detail-stars").innerHTML = ratingStars;
  
  // Price setup
  const priceBox = document.getElementById("detail-price-box");
  if (product.oldPrice) {
    priceBox.innerHTML = `
      <span style="font-size: 1.4rem; color: var(--text-muted); text-decoration: line-through; font-weight: 500;">${product.oldPrice.toFixed(2)} лв.</span>
      <span style="color: var(--accent);">${product.price.toFixed(2)} лв.</span>
    `;
  } else {
    priceBox.innerHTML = `<span>${product.price.toFixed(2)} лв.</span>`;
  }
  
  // Stepper Reset
  document.getElementById("detail-qty-val").textContent = "1";
  
  // Show / Hide Views
  document.getElementById("home-view").style.display = "none";
  document.getElementById("product-view").style.display = "block";
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToHome(event) {
  if (event) event.preventDefault();
  window.location.hash = "";
  document.getElementById("product-view").style.display = "none";
  document.getElementById("home-view").style.display = "block";
  activeProduct = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Router representation for Direct Hash Links
function handleHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith("#product/")) {
    const productId = parseInt(hash.replace("#product/", ""));
    if (productId) {
      openProductPage(productId);
    }
  } else {
    document.getElementById("product-view").style.display = "none";
    document.getElementById("home-view").style.display = "block";
    activeProduct = null;
  }
}

// --- INTERACTIVE CHECKOUT SIMULATION ---
function handleCheckout(event) {
  event.preventDefault();
  
  const name = document.getElementById("checkout-name").value.trim();
  const phone = document.getElementById("checkout-phone").value.trim();
  const address = document.getElementById("checkout-address").value.trim();
  
  if (!name || !phone || !address) {
    alert("Моля попълнете всички задължителни полета за бърза поръчка!");
    return;
  }
  
  const orderNum = "FAVO-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("order-tracking-id").textContent = orderNum;
  document.getElementById("success-screen").classList.add("active");
  
  cart = [];
  saveCart();
  closeCartSidebar();
}

function closeSuccessScreen() {
  document.getElementById("success-screen").classList.remove("active");
  document.getElementById("checkout-form-id").reset();
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog("all");
  updateCartCount();
  renderCartItems();
  
  // Route check
  handleHashRoute();
  window.addEventListener("hashchange", handleHashRoute);
  
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const category = e.target.getAttribute("data-filter");
      renderCatalog(category);
    });
  });
  
  // Steppers for Details View Page
  const detailDecBtn = document.getElementById("detail-qty-dec");
  const detailIncBtn = document.getElementById("detail-qty-inc");
  const detailQtyVal = document.getElementById("detail-qty-val");
  
  if (detailDecBtn && detailIncBtn && detailQtyVal) {
    detailDecBtn.addEventListener("click", () => {
      let currentVal = parseInt(detailQtyVal.textContent);
      if (currentVal > 1) {
        detailQtyVal.textContent = (currentVal - 1).toString();
      }
    });
    
    detailIncBtn.addEventListener("click", () => {
      let currentVal = parseInt(detailQtyVal.textContent);
      detailQtyVal.textContent = (currentVal + 1).toString();
    });
  }
  
  const detailAddBtn = document.getElementById("detail-add-btn");
  if (detailAddBtn) {
    detailAddBtn.addEventListener("click", () => {
      if (activeProduct) {
        const qty = parseInt(detailQtyVal.textContent);
        addToCart(activeProduct.id, qty);
      }
    });
  }
  
  const formElement = document.getElementById("checkout-form-id");
  if (formElement) {
    formElement.addEventListener("submit", handleCheckout);
  }
});
