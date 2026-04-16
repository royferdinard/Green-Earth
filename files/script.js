
const SlideAmount = 320;
function loadSubcategories(categoryName) {
  const subcatList = document.getElementById('subcategory-list');
  const productList = document.getElementById('category-product');
  subcatList.innerHTML = '';
  productList.innerHTML = '';

  const category = subCategory.find(cat => cat.name === categoryName);
  if (!category) return;

  category.items.forEach(sub => {
    const btn = document.createElement('button');
    btn.textContent = sub;
    btn.addEventListener('click', () => filterProductsBySub(categoryName, sub));
    subcatList.appendChild(btn);
  });
}

// performSearch 
function performSearch() {
  const query = document.querySelector('.search-input').value.toLowerCase().trim();
  if (!query) return;

  // Hide all product sections and show filtered
  document.querySelectorAll('.officefurniture-display, .officeChair-display, .gameChairsDisplay, .fillingCabinate-display, .workStationDisplay, .sofaDisplay, .tablesDisplay, .standDisplay, .cabinetDisplay, .bed-Display, .wallDropDisplay, .DressersDisplay, .nightStand-Display, .VanitiesDisplay, .HeadboardsDisplay, .FootboardsDisplay, .BedFramesDisplay, .BedsideDisplay, .DiningDisplay, .DiningChairsDisplay, .SideboardsDisplay, .BuffetsDisplay').forEach(container => {
    Array.from(container.children).forEach(product => {
      const name = product.querySelector('h6 span')?.textContent.toLowerCase() || '';
      const desc = product.querySelector('.description')?.textContent.toLowerCase() || '';
      if (name.includes(query) || desc.includes(query)) {
        product.style.display = 'flex';
      } else {
        product.style.display = 'none';
      }
    });
  });

  document.querySelector('.search-popup').classList.remove('active');
}

function filterProductsBySub(category, subcategory) {
  console.log(`Filtering ${category} > ${subcategory}`);
  
}
window.onload = () => {
    appendDesk();
    renderChairs();
    renderGameChairs();
    renderFillingCabinet();
    renderWorkstation();
    renderSofa();
    renderTables();
    renderStand();
    renderCabinet();
    renderBed();
    renderWallDrop();
    rendernightstand();
    renderWallDrop();
    renderDressers();

}
    
    // Initialize slides interval and theme
    setInterval(() => showSlide(), 4000);
    initThemeToggle();
const searchToggle = document.querySelector(".searchtoggle");
const searchBar = document.querySelector(".searches");

searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("active");
});

//cart button grand price container
const CartbtnContainer = document.querySelector(".price");

//cart buttton number of items
const CartNumberItems= document.querySelector(".numberofitem");
 
//account codes 
const accountBtn = document.querySelector('.account-btn');
const accountDrop = document.querySelector('.account-drop');
const closeBtn = document.querySelector('.close');
accountBtn.addEventListener('click', () => {
    accountDrop.classList.toggle('active');
    if(accountDrop.classList.contains('active')) {
        accountBtn.style.background = 'lightgray';
    } else {
        accountBtn.style.background = 'transparent';
    }
});
//closeBtn.addEventListener('click', () => {
  //  accountDrop.classList.remove('active');
      //});

//help codes
const helpBtn = document.querySelector('.help-btn');
const helpDrop = document.querySelector('.help-drop');
helpBtn.addEventListener('click', () => {
    helpDrop.classList.toggle('active');
    if(helpDrop.classList.contains('active')) {
        helpBtn.style.background = 'lightgray';
    } else {
        helpBtn.style.background = 'transparent';
    }
});

const categoryBtn = document.querySelector('.category-btn');
const categoryDrop = document.querySelector('.category-drop');
categoryBtn.addEventListener('click', () => {
    categoryDrop.classList.toggle('active');    
    if(categoryDrop.classList.contains('active')) {
        categoryBtn.style.background = 'lightgray';
    } else {
        categoryBtn.style.background = 'transparent';
    }
});
//all page content
const allContent = document.querySelector(".allContent");
//logo
const logo = document.querySelector(".home");
//cart codes
const cartBtn = document.querySelector('.cart-btn');
const cartDrop = document.querySelector('.cartContainer');
cartBtn.addEventListener('click', () => {
   cartDrop.classList.toggle('active');
   if(cartDrop.classList.contains('active')) {
        cartBtn.style.background = 'lightgray';
        allContent.style.display = "none";
    } else {
        cartBtn.style.background = 'transparent';
        logo.click();
    }
});

//image slides
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let hero = document.querySelector(".hero");
let delay = 4000;

function showSlide(){
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
     slides[slideIndex].classList.add("active");
}

showSlide();

//categories codes

const categories = [
    {
        name:"Office Furniture",
        id:1,
        image:"images/1.webp",
    },
    {
        name:"Living Room Furniture",
        id:2,
        image:"images/2.webp",
    },
    {
        name:"Bedroom Furniture",
        id:3,
        image:"images/3.webp",
    },
    {
        name:"Dining Room Furniture",
        id:4,
        image:"images/4.webp",

    },
    {
        name:"Outdoor Furniture",
        id:5,
        image:"images/5.webp",
    },
    {
        name:"Storage Furniture",
        id:6,
        image:"images/6.webp",
    },
    {
        name:"Library Furniture",
        id:7,
        image:"images/7.webp",
    },
    {
        name:"Home Decor",
        id:8,
        image:"images/8.webp",
    },
    {
        name:"lighting",
        id:9,
        image:"images/9.webp",
    },
    {
        name:"sustainable furniture",
        id:10,
        image:"images/10.webp",
    },
    {
        name:"kitchen furniture",
        id:11,
        image:"images/11.jfif",
    },
    {
        name:"window treatments",
        id:12,
        image:"images/12.webp",
    },
    {
        name:"soft furnishings",
        id:13,
        image:"images/13.jfif",
    },
    {
        name:"Cleaning and Utility Furniture",
        id:14,
        image:"images/14.webp",
    },
    {
        name:"Bathroom Furniture",
        id:15,
        image:"images/15.webp",
    },
    {
        name:"Eco-friendly Furniture",
        id:16,
        image:"images/16.jfif",
    },
    {
        name: "Partitions and Room Dividers",
        id:17,
        image:"images/17.webp",
    },
    {
        name:"Kids and Teens Furniture",
        id:18,
        image:"images/18.jfif",
    },
    {
        name:"Work from Home Furniture",
        id:19,
        image:"images/19.webp",
    },
    {
        name:"Work accessories",
        id:20,
        image:"images/20.webp",
    }


];
const subCategory = [
    {
        name: "Office Furniture",
        items: [
            "Office Chairs",
            "Office Desks",
            "Game Chairs",
            "Filing Cabinets",
            "Workstations"
        ]
    },
    {
        name: "Living Room Furniture",
        items: [
            "Sofas",
            "Living Room Tables",
            "TV Stands",
            "Living room cabinets",
        ]
    },
    {
        name: "Bedroom Furniture",
        items: [
            "Beds",
            "Dressers",
            "Wardrobes",
            "Nightstands",
            "Vanities",
            "Headboards",
            "Footboards",
            "Bed Frames",
            "Bedside Tables",

        ]

    },
    {
        name: "Dining Room Furniture",
        items: [
            "Dining Tables",
            "Dining Chairs",
            "Sideboards",
            "Buffets"
        ]
    },
    {
        name: "Outdoor Furniture",
        items: [
            "Outdoor Seating",
            "Outdoor Dining",
            "Outdoor Lighting",
            "Outdoor Storage",
            "Garden Chairs",
            "Garden Tables",
            "Garden Benches",
            "Outdoor Sofas",
            "Outdoor Sectionals",
            "Outdoor Ottomans",
            "Outdoor Rugs",
            "Outdoor Umbrellas",
            "Hammocks",
            "Outdoor Fire Pits",
            "Outdoor Heaters",
            "Outdoor Planters",
            "Outdoor Decor"
        ]

    },
    {
        name: "Storage Furniture",
        items: [
            "Bookshelves",
            "Filing Cabinets",
            "Closets",
            "Storage Benches",
            "Storage Ottomans",
            "Storage Cabinets",
            "Storage Cubes",
            "Storage Racks",
            "Storage Shelves",
        ]

    },
    {
        name: "Library Furniture",
        items: [
            "Bookshelves",
            "Filing Cabinets",
            "Closets"
        ]

    },
    {
        name: "Home Decor",
        items: [
            "Wall Art",
            "Lighting",
            "Rugs",
            "Curtains",
            "Pillows",
            "Vases",
            "Clocks",
            "Mirrors",
            "Decorative Objects",
        ]

    },{
        name: "Lighting",
        items: [
            "Ceiling Lights",
            "Table Lights",
            "Floor Lights",
            "Wall Lights",
            "Outdoor Lights",
            "Pendant Lights",
            "Chandeliers",
            "Sconces",
            "String Lights",
            "Lanterns",
        ]

    },
    {
        name: "Sustainable Furniture",
        items: [
            "Recycled Furniture",
            "Eco-Friendly Furniture",
            "Sustainable Materials",
            "Upcycled Furniture",
            "Green Furniture",
            "Bamboo Furniture",
            "Cork Furniture",
            "Reclaimed Wood Furniture",
            "Biodegradable Furniture",
            "Low-Impact Furniture",
        ]

    },
    {
        name: "Kitchen Furniture",
        items: [
            "Kitchen Islands",
            "Kitchen Cabinets",
            "Kitchen Countertops",
            "Kitchen Sinks",
           "Pantry Cabinets",
            "Kitchen Carts",
            "Kitchen Stools",
            "Bar Stools",
            "Kitchen Tables",
            "Kitchen Chairs",
            "Kitchen Benches",
            "Kitchen Storage",
            "Wooden utensils",
            "Cutting Boards",
            "Cookware",
            "Bakeware",
            "Kitchen Gadgets",
        ]

    },
    {
        name: "Window Treatment",
        items: [
            "Curtains",
            "Blinds",
            "Shades"
        ]

    },
    {
        name: "Soft Furnishing",
        items: [
            "Rugs",
            "Curtains",
            "Pillows",
            "Throws"
        ]

    },{
        name: "Cleaning and Utility Furniture",
        items: [
            "Cleaning Carts",
        ]
        
    },
    {
        name: "Bathroom Furniture",
        items: [
            "Bathroom Vanities",
            "Bathroom Sinks",
            "Bathroom Storage",
            "Bathroom Stools",
            "Bathroom Mirrors"
        ]

    },
    {
        name: "Eco-friendly Furniture",
        items: [
            "Recycled Furniture",
            "Eco-Friendly Furniture",
            "Sustainable Materials",
            "Upcycled Furniture",
            "Green Furniture"
        ]

    },
    {
        name: "Partitions and Room Divider",
        items: [
            "Folding Screens",
            "Room Dividers"
        ]

    },
    {
        name: "Kids and Teens Furniture",
        items: [
            "Kids Beds",
            "Kids Desks",
            "Kids Chairs",
            "Kids Storage"
        ]
    },
    {
        name: "Work from Home Furniture",
        items: [
            "Office Chairs",
            "Office Desks",
            "Home Office Storage"
        ]

    },
    {
        name: "Work Accessory",
        items: [
            "Desk Organizers",
            "Monitor Stands",
            "Cable Management",
            "Desk Lamps",
            "Ergonomic Accessories",
            "Footrests",
            "Keyboard Trays",
            "Mouse Pads",
            "Laptop Stands",
            "Desk Mats",
        ]

    }
];

//cart container
const cartContainer = document.querySelector(".cart");

const msg = document.querySelector(".pop-msg span");
const popupContainer = document.querySelector(".item-popup");
const categoriesContainer = document.querySelector('.category-drop');

categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'category';
    categoryElement.innerHTML = `
       <div><img src="${category.image}" alt="${category.name}"></div>
        <p>${category.name}</p>
    `;
     const pageContent = document.querySelector(".pageContent");
     categoryElement.addEventListener("click", () => {
        pageContent.style.display = "none";
          cartDrop.style.display = "none";
         filterDisplayer.classList.add("active");
        loadSubcategories(category.name);
    });
    categoriesContainer.appendChild(categoryElement);
    
});


//category shopping codes
const categoryDisplay = document.querySelector('.category-list');
const filterDisplayer = document.querySelector(".categori-view");
categories.forEach(category => {
    const categoryItem = document.createElement('button');
    categoryItem.className = 'category-item';
    categoryItem.innerHTML = `
        <div><img src="${category.image}" alt="${category.name}"></div>
        <p>${category.name}</p>
    `;
     const pageContent = document.querySelector(".pageContent");
     categoryItem.addEventListener("click", () => {
        pageContent.style.display = "none";
         cartDrop.style.display = "none";
         filterDisplayer.classList.add("active");

        loadSubcategories(category.name);
    });
    categoryDisplay.appendChild(categoryItem);
});


//scroll categories
const categoryList = document.querySelector('.category-list');
const card = categoryList.querySelector('.category-item');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const gap = parseInt(getComputedStyle(categoryList).gap);
const scrollAmount = card.offsetWidth + gap;

leftBtn.addEventListener('click', () => {
    categoryList.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    categoryList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

//see all categories
const seeAllBtn = document.querySelector('.seeAll');
seeAllBtn.addEventListener('click', () => {
    categoryDrop.classList.toggle('active');
});

const discount = 0.1;
//office furniture codes
const officeDesk = [
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d1.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d2.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d3.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d 5.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d5.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d6.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d7.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d8.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d9.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d10.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d11.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d12.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d13.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d14.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d15.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d16.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d17.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d18.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d19.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d20.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d21.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d22.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d23.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d24.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d25.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d26.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d27.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d28.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d29.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
    {
        name:"Ofice Desk 1",
        description:" Single user wooden luxury desk for first class offices",
        price: 120000,
        image: "images/d30.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[1]
    },
   
];

//cart item container
const cartproductContainer = document.querySelector(".cart-product");
//cart total container
const cartTotal = document.querySelector(".totalAmount");
// cart item quantity containner
const totalItems =document.querySelector(".totalItems");
//delivery fee container
const deliveryFee = document.querySelector(".DeliveryCharges");
//cart array
const cartArray =[];
//office desk container
const officeContainer = document.querySelector(".officefurniture-display");
//check out prices
const chekPrice= document.querySelector(".totalbtnAmount");
//checkout container
const checkoutBtn = document.querySelector(".checkoutBtn");
//checkout container
const checkoutContainer = document.querySelector(".Cartcheckout");
//cntainer for closing other content
const checkClose = document.querySelector(".chekoutSuceedWrapper");
//close chek out btn
const closeCheckOut = document.querySelector(".cancelCheckout");
//check total amount
const checkAmount = document.querySelector(".checkAmount");
//ChecktotalItem
const ChecktotalItem = document.querySelector("#totalItems");
//checkDeliveryCharges
const checkDeliveryCharges = document.querySelector(".checkDeliveryCharges");

//online payment button
const online = document.querySelector(".online");

//cash payment
const cashDelivery = document.querySelector(".cashDelivery");
//paymentMethod
const paymentMethod = document.querySelector("#paymentMethod");
//orderId
const orderId = document.querySelector("#orderId");
//order all section hidden
const Allcontent = document.querySelector(".all");

//order view buttons
const viewOrderbtn = document.querySelector("#orders");
//order container page
const orderbox = document.querySelector(".orderbox");

//display order page
viewOrderbtn.addEventListener("click",()=>{
    orderbox.classList.toggle("active");
   if(orderbox.classList.contains("active")){
        Allcontent.style.display = "none";
    }else{
        // logo.click();
          Allcontent.style.display = "block";
    }
});

//custName order container
const custName = document.querySelector("#custName");
//custPhone
const custPhone = document.querySelector("#custPhone");
//custLocation
const custLocation = document.querySelector("#custLocation");
//custome email in order page
const custEmail = document.querySelector("#custEmail");
//oreder total
const orderTotal = document.querySelector("#checkAmount");
//order number of items
const orderItems = document.querySelector(".totalorderItems");
//order delivery charges
const orderDeliveryCharges = document.querySelector("#checkDeliveryCharges");
//ordered items container
const orderedItem = document.querySelector(".orderItems");
const ordersContainer = document.querySelector(".orders");
let savedCart = [];

function updateCartTotals() {
    const totalQuantity = savedCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartTotal.innerHTML = ` Ksh.${totalAmount.toFixed(2)}`;
    totalItems.innerHTML = totalQuantity;
    chekPrice.textContent = ` Ksh.${totalAmount.toFixed(2)}`;
    deliveryFee.innerHTML = totalAmount > 25000 ? "Free" : ` Ksh.${(totalAmount * discount).toFixed(2)}`;
}

function createCartCard(item) {
    const cartCard = document.createElement("div");
    cartCard.className = "cartCard";
    cartCard.dataset.cartId = item.id;
    cartCard.innerHTML = `
    <div class="cartOutline">
      <div class="cartImage">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <p>${item.description}</p>
      <h6 class="grandPrice">Ksh.${(item.price * item.quantity).toFixed(2)}</h6>
      <div class="icreament-Button">
        <button class="decreasebtn">-</button>
        <span class="cartQuantity">${item.quantity}</span>
        <button class="increasebtn">+</button>
      </div>
      <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;

    const quantitySpan = cartCard.querySelector(".cartQuantity");
    const increaseBtn = cartCard.querySelector(".increasebtn");
    const decreaseBtn = cartCard.querySelector(".decreasebtn");
    const trashBtn = cartCard.querySelector(".trash");
    const grandPrice = cartCard.querySelector(".grandPrice");

    increaseBtn.addEventListener("click", () => {
        item.quantity++;
        quantitySpan.textContent = item.quantity;
        grandPrice.textContent = `Ksh.${(item.price * item.quantity).toFixed(2)}`;
        updateCartTotals();
        msg.textContent = "Item quantity updated";
    });

    decreaseBtn.addEventListener("click", () => {
        if (item.quantity > 1) {
            item.quantity--;
            quantitySpan.textContent = item.quantity;
            grandPrice.textContent = `Ksh.${(item.price * item.quantity).toFixed(2)}`;
            updateCartTotals();
            msg.textContent = "Item quantity updated";
        }
    });

    trashBtn.addEventListener("click", () => {
        savedCart = savedCart.filter(cartItem => cartItem.id !== item.id);
        renderCart();
        msg.textContent = "Item removed from cart";
    });

    return cartCard;
}

function renderCart() {
    cartproductContainer.innerHTML = "";
    savedCart.forEach(item => {
        cartproductContainer.appendChild(createCartCard(item));
    });
    updateCartTotals();
}

function addToCartItem(desk, quantity) {
    const cartItem = {
        id: `${desk.name}-${Date.now()}`,
        name: desk.name,
        description: desk.description,
        image: desk.image,
        price: desk.price,
        quantity,
    };
    savedCart.push(cartItem);
    renderCart();
}

function renderOrderCard(order) {
    const newOrderCard = document.createElement("div");
    newOrderCard.className = "orderDetails";
    newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${order.id}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${order.customer.name}</span></p>
  <p><strong>Email:</strong> <span>${order.customer.email}</span></p>
  <p><strong>Phone:</strong> <span>${order.customer.contact}</span></p>
  <p><strong>Location:</strong> <span>${order.customer.adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>${order.paymentMethod}</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${order.totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${order.itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${order.deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>
`;
    const orderItemsList = document.createElement("div");
    orderItemsList.className = "orderItemsList";

    order.items.forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.className = "ordercartCard";
        itemCard.innerHTML = `
        <div class="cartOutline">
            <div class="cartImage">
                <img src="${item.image}" alt="${item.description}">
            </div>
            <p>${item.description}</p>
            <h6 class="grandPrice">Ksh.${parseFloat(item.price).toFixed(2)}</h6>
        </div>
        `;
        orderItemsList.appendChild(itemCard);
    });

    newOrderCard.appendChild(orderItemsList);
    ordersContainer.appendChild(newOrderCard);
}


// Search popup elements
const searchPopup = document.querySelector('.search-popup');
const searchBtn = document.querySelector('.searchtoggle');
const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('.search-input');
const searchSubmitBtn = document.querySelector('.search-submit-btn');
  const searchinput = document.querySelector(".search-pop-container");

searchClose.addEventListener('click', () => {
    searchPopup.classList.remove('active');
  });


if (searchPopup && searchBtn) {

  // OPEN POPUP
  searchBtn.addEventListener('click', () => {
    searchPopup.classList.add('active');
    searchInput?.focus();
  });

  // CLOSE BUTTON
  searchClose.addEventListener('click', () => {
    searchPopup.classList.remove('active');
    searchInput.value = '';
  });

  // CLICK OUTSIDE
  searchPopup.addEventListener('click', (e) => {
    if (e.target === searchPopup) {
      searchPopup.classList.remove('active');
      searchInput.value = '';
    }
  });

  // ESC KEY
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchPopup.classList.remove('active');
      searchInput.value = '';
    }
  });

  // SEARCH BUTTON
  searchSubmitBtn?.addEventListener('click', performSearch);

  // ENTER KEY
  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}
// Dark mode toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
    icon.classList.add('fa-moon');

    function setTheme(theme) {
        html.dataset.theme = theme;
        html.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeToggle.classList.add('active');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            themeToggle.classList.remove('active');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Toggle event
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.dataset.theme || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

//appending desks function
function appendDesk(){
    officeDesk.forEach(desk=>{
    const deskContainer = document.createElement("div");
    deskContainer.className = "deskContainer";
    deskContainer.innerHTML = `
    <div class="deskOutline">
     <div class="deskImage"><img src="${desk.image}" alt="${desk.name}"></div>
        <h6><span>${desk.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${desk.description}</p>
        <p class="itemCategory"><span>${subCategory[0].items[1]}</span><span><s>Ksh.${parseFloat(((desk.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(desk.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
    </div>
    `;
officeContainer.appendChild(deskContainer);

deskContainer.addEventListener("click",()=>{
searchPopup.classList.add("active");

searchinput.innerHTML= `
<div class="popOutline">
<div class="popItem">
<!--<button class="closePopUp">&times;</button>-->
       <section class="imageScetion">
       <section class="images active"  id="img1">
            <div class="popImage"><img src="${desk.image}" alt="${desk.name}"></div>
       </section>
       <section class="images"  id="img2">
            <div class="dpopImage"><img src="images/d3.png" alt="${desk.name}"></div>
       </section>
       <section class="images"  id="img3">
            <div class="popImage"><img src="images/d23.png" alt="${desk.name}"></div>
       </section>
       <section class="images"  id="img4">
            <div class="popImage"><img src="images/d30.png" alt="${desk.name}"></div>
       </section>
       <section class="images"  id="img5">
            <div class="popImage"><img src="images/d13.png" alt="${desk.name}"></div>
       </section>
       <section class="images"  id="img6">
            <div class="popImage"><img src="images/d21.png" alt="${desk.name}"></div>
       </section>
       <section class="images"  id="img7">
            <div class="popImage"><img src="images/d10.png" alt="${desk.name}"></div>
       </section>
       <div class="tabs-next-prev">
       <a class="left">&laquo;</a>
       <div class="filterTabs">
       <button onclick="showImage('img1')"><div class="deskImage"><img src="${desk.image}" alt="${desk.name}"></div></button>
        <button  onclick="showImage('img2')"><div class="deskImage"><img src="images/d3.png" alt="${desk.name}"></div></button>
        <button  onclick="showImage('img3')"><div class="deskImage"><img src="images/d23.png" alt="${desk.name}"></div></button>
        <button onclick="showImage('img4')"><div class="deskImage"><img src="images/d30.png" alt="${desk.name}"></div></button>
        <button onclick="showImage('img5')"><div class="deskImage"><img src="images/d13.png" alt="${desk.name}"></div></button>
        <button  onclick="showImage('img6')"><div class="deskImage"><img src="images/d21.png" alt="${desk.name}"></div></button>
        <button onclick="showImage('img7')"><div class="deskImage"><img src="images/d10.png" alt="${desk.name}"></div></button>
       </div>
      <a class="right">&raquo;</a>
       </div>
       </section>
       <div class="productDetail">
        <h6><span>${desk.name}</span> <!--<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span>--></h6>
        <p class="popdescription">${desk.description}</p>
        <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[1]}</span></span></p>
        <div class="discount">Discount:<span><s>Ksh.${parseFloat(((desk.price)*discount)).toFixed(2)}</s></span></div>
      <div class="popPrice">Price:<span>Ksh.${(desk.price).toFixed(2)}</span></div>
        <div class="increase-decrease">
       <div class="icreament-Button">
        <button class="decreasebtn">-</button>
        <span class="Quantitycounter">1</span>
        <button class="increasebtn">+</button>
       </div>
       <div class="increasePrice"><span>= Ksh.${(desk.price).toFixed(2)}</span></div>
        </div>
        <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
       </div>
    </div>
    </div>
`;
const nextFilter= document.querySelector(".left");
const prevFilter = document.querySelector(".right");
const filterContainer = document.querySelector(".filterTabs");

nextFilter.addEventListener("click",()=>{
    filterContainer.scrollBy({
        left:-200,
        behavior:"smooth"
    });
});
prevFilter.addEventListener("click",()=>{
    filterContainer.scrollBy({
        left:200,
        behavior:"smooth"
    });
});
    let counter;
    let quantityContainer;
    let  increaseBtn=document.querySelector(".increasebtn");
    let  decreaseBtn=document.querySelector(".decreasebtn");
    let priceDisplay = document.querySelector(".increasePrice span");
    quantityContainer = document.querySelector(".Quantitycounter");
    counter=1;

    increaseBtn.addEventListener("click", () => {
        counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(desk.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = `${(desk.price * counter).toFixed(2)}`;
    });
     decreaseBtn.addEventListener("click", () => {
        if(counter>1){
            counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(desk.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(desk.price * counter).toFixed(2)}`;
        }
    });

   /* const closePopUp = document.querySelector(".closePopUp");
    closePopUp.addEventListener("click",()=>{
        popupContainer.classList.remove("active");
    });*/


    //pop short msg

const popbtnContainer = document.querySelector(".pop-cartbtn")
const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

addToCartbtn.addEventListener("click",()=>{
   
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${desk.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(desk.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(desk.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(desk.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);


});

//append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${desk.image}" alt="${desk.name}">
    </div>
    <p>${desk.description}</p>
    <h6 class="grandPrice">Ksh.${desk.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(desk.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(desk.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(desk.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((desk.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((desk.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(desk.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(desk.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(desk.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added";

        
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(desk.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(desk.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(desk.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";

        
        }
    });

    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = desk.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);
    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(desk.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((desk.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((desk.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(desk.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((desk.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((desk.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const order = {
    id: newOrderId,
    customer: {
        name,
        email,
        contact,
        adress
    },
    paymentMethod: "Cash on delivery",
    totalAmount,
    itemQuantity,
    deliveryCharges,
    items: [
        {
            image: desk.image,
            description: desk.description,
            price: desk.price,
            quantity: counter
        }
    ]
};
renderOrderCard(order);
    
    // Clear cart and checkout
    setTimeout(() => {
        // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(desk.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((desk.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((desk.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const order = {
    id: newOrderId,
    customer: {
        name,
        email,
        contact,
        adress
    },
    paymentMethod: "Payment via M-pesa",
    totalAmount,
    itemQuantity,
    deliveryCharges,
    items: [
        {
            image: desk.image,
            description: desk.description,
            price: desk.price,
            quantity: counter
        }
    ]
};
renderOrderCard(order);

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";
    

    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});
});





}


const prevdesk = document.querySelector("#prevOffice");
const nextdesk = document.querySelector("#nxtOffice");
const deskScrollContainer = document.querySelector(".officefurniture-display");
prevdesk.addEventListener("click", ()=>{
   deskScrollContainer.scrollBy({
        left: -SlideAmount,
        behavior: "smooth"
    });
});
nextdesk.addEventListener("click", ()=>{
    deskScrollContainer.scrollBy({
        left: SlideAmount,
        behavior: "smooth"
    });
});

// Moved to window.onload

 function showImage(imgid){
    let imageSections = document.querySelectorAll(".images");
    imageSections.forEach(imageSection=>{
        imageSection.classList.remove("active");
    });

    const image = document.getElementById(imgid);
    if (image) {
        image.classList.add("active");
    }
 }



//office chairs codes
const officeChair = [
    {
        name:"Rolling Office Chair",
        description:"Ergonomic rolling office chair with adjustable height and lumbar support",
        price: 8000,
        image: "images/c1.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Executive Office Chair",
        description:"Luxurious executive office chair with high backrest and padded armrests",
        price: 12000,
        image: "images/c2.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Office Chair",
        description:"Breathable mesh office chair with adjustable features for comfort",
        price: 6000,
        image: "images/c3.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Gaming Office Chair",
        description:"Stylish gaming office chair with ergonomic design and vibrant colors",
        price: 10000,
        image: "images/c4.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Kneeling Office Chair",
        description:"Unique kneeling office chair that promotes better posture and reduces back pain",
        price: 7000,
        image: "images/c5.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Saddle Office Chair",
        description:"Saddle-style office chair that encourages active sitting and improves core strength",
        price: 9000,
        image: "images/c20.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Stackable Office Chair",
        description:"Space-saving stackable office chair with durable construction and comfortable seating",
        price: 5000,
        image: "images/c7.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Conference Office Chair",
        description:"Professional conference office chair with sleek design and comfortable padding",
        price: 11000,
        image: "images/c8.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Drafting Office Chair",
        description:"Height-adjustable drafting office chair with footrest for elevated workstations",
        price: 8500,
        image: "images/c9.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Ergonomic Office Chair",
        description:"Ergonomic office chair with adjustable lumbar support and breathable mesh back",
        price: 9500,
        image: "images/c10.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Leather Office Chair",
        description:"Classic leather office chair with padded seat and backrest for ultimate comfort",
        price: 15000,
        image: "images/c11.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Task Office Chair",
        description:"Functional task office chair with adjustable features for everyday use",
        price: 5500,
        image: "images/c12.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Swivel Office Chair",
        description:"360-degree swivel office chair with smooth rolling casters for easy mobility",
        price: 7500,
        image: "images/c13.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"High-Back Office Chair",
        description:"High-back office chair with plush cushioning and adjustable headrest for added support",
        price: 13000,
        image: "images/c14.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Mid-Back Office Chair",
        description:"Mid-back office chair with ergonomic design and adjustable features for comfort",
        price: 7000,
        image: "images/c15.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Low-Back Office Chair",
        description:"Low-back office chair with minimalist design and comfortable seating",
        price: 5000,
        image: "images/c16.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Back Office Chair",
        description:"Mesh back office chair with adjustable features for breathability and comfort",
        price: 6500,
        image: "images/c17.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Leather Executive Office Chair",
        description:"Luxurious leather executive office chair with high backrest and padded armrests",
        price: 18000,
        image: "images/c18.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Ergonomic Mesh Office Chair",
        description:"Ergonomic mesh office chair with adjustable lumbar support and breathable design",
        price: 9000,
        image: "images/c19.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Adjustable Office Chair",
        description:"Adjustable office chair with customizable features for personalized comfort",
        price: 8000,
        image: "images/c20.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Executive Office Chair",
        description:"Premium executive office chair with luxurious materials and advanced ergonomic features",
        price: 20000,
        image: "images/c21.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Mesh Task Office Chair",
        description:"Mesh task office chair with adjustable features for breathability and comfort",
        price: 6000,
        image: "images/c22.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Leather Task Office Chair",
        description:"Classic leather task office chair with padded seat and backrest for comfort",
        price: 12000,
        image: "images/c23.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Swivel Task Office Chair",
        description:"360-degree swivel task office chair with smooth rolling casters for mobility",
        price: 7000,
        image: "images/c24.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"High-Back Task Office Chair",
        description:"High-back task office chair with plush cushioning and adjustable headrest for support",
        price: 15000,
        image: "images/c25.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Mid-Back Task Office Chair",
        description:"Mid-back task office chair with ergonomic design and adjustable features for comfort",
        price: 8000,
        image:"images/c26.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Low-Back Task Office Chair",
        description:"Low-back task office chair with minimalist design and comfortable seating",
        price: 5500,
        image: "images/c27.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Mesh Back Task Office Chair",
        description:"Mesh back task office chair with adjustable features for breathability and comfort",
        price: 7500,
        image: "images/c28.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Leather Executive Task Office Chair",
        description:"Luxurious leather executive task office chair with high backrest and padded armrests",
        price: 18000,
        image: "images/c29.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Ergonomic Mesh Task Office Chair",
        description:"Ergonomic mesh task office chair with adjustable lumbar support and breathable design",
        price: 9000,
        image: "images/c30.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Adjustable Task Office Chair",
        description:"Adjustable task office chair with customizable features for personalized comfort",
        price: 8000,
        image: "images/c31.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Rolling Task Office Chair",
        description:"Ergonomic rolling task office chair with adjustable height and lumbar support",
        price: 8000,
        image: "images/c32.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Executive Task Office Chair",
        description:"Luxurious executive task office chair with high backrest and padded armrests",
        price: 12000,
        image: "images/c33.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
            name:"Mesh Task Office Chair",
            description:"Mesh task office chair with adjustable features for breathability and comfort",
            price: 6000,
            image: "images/c34.png",
            categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Leather Task Office Chair",
        description:"Classic leather task office chair with padded seat and backrest for comfort",
        price: 12000,
        image: "images/c35.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Swivel Task Office Chair",
        description:"360-degree swivel task office chair with smooth rolling casters for mobility",
        price: 7000,
        image: "images/c36.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"High-Back Task Office Chair",
        description:"High-back task office chair with plush cushioning and adjustable headrest for support",
        price: 15000,
        image: "images/c37.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mid-Back Task Office Chair",
        description:"Mid-back task office chair with ergonomic design and adjustable features for comfort",
        price: 8000,
        image: "images/c38.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Low-Back Task Office Chair",
        description:"Low-back task office chair with minimalist design and comfortable seating",
        price: 5500,
        image: "images/c39.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Mesh Back Task Office Chair",
        description:"Mesh back task office chair with adjustable features for breathability and comfort",
        price: 7500,
        image: "images/c40.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Leather Executive Task Office Chair",
        description:"Luxurious leather executive task office chair with high backrest and padded armrests",
        price: 18000,
        image: "images/c41.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Ergonomic Mesh Task Office Chair",
        description:"Ergonomic mesh task office chair with adjustable lumbar support and breathable design",
        price: 9000,
        image: "images/c42.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Adjustable Task Office Chair",
        description:"Adjustable task office chair with customizable features for personalized comfort",
        price: 8000,
        image: "images/c43.png"
        ,categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Rolling Task Office Chair",
        description:"Ergonomic rolling task office chair with adjustable height and lumbar support",
        price: 8000,
        image: "images/c44.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Executive Task Office Chair",
        description:"Luxurious executive task office chair with high backrest and padded armrests",
        price: 12000,
        image: "images/c45.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Task Office Chair",
        description:"Mesh task office chair with adjustable features for breathability and comfort",
        price: 6000,
        image: "images/c40.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Leather Task Office Chair",
        description:"Classic leather task office chair with padded seat and backrest for comfort",
        price: 12000,
        image: "images/c41.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Swivel Task Office Chair",
        description:"360-degree swivel task office chair with smooth rolling casters for mobility",
        price: 7000,
        image: "images/c42.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"High-Back Task Office Chair",
        description:"High-back task office chair with plush cushioning and adjustable headrest for support",
        price: 15000,
        image: "images/c43.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Mid-Back Task Office Chair",
        description:"Mid-back task office chair with ergonomic design and adjustable features for comfort",
        price: 8000,
        image: "images/c44.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Low-Back Task Office Chair",
        description:"Low-back task office chair with minimalist design and comfortable seating",
        price: 5500,
        image: "images/c45.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Back Task Office Chair",
        description:"Mesh back task office chair with adjustable features for breathability and comfort",
        price: 7500,
        image: "images/c46.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Leather Executive Task Office Chair",
        description:"Luxurious leather executive task office chair with high backrest and padded armrests",
        price: 18000,
        image: "images/c47.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Ergonomic Mesh Task Office Chair",
        description:"Ergonomic mesh task office chair with adjustable lumbar support and breathable design",
        price: 9000,
        image: "images/c48.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Adjustable Task Office Chair",
        description:"Adjustable task office chair with customizable features for personalized comfort",
        price: 8000,
        image: "images/c49.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Rolling Task Office Chair",
        description:"Ergonomic rolling task office chair with adjustable height and lumbar support",
        price: 8000,
        image: "images/c50.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Executive Task Office Chair",
        description:"Luxurious executive task office chair with high backrest and padded armrests",
        price: 12000,
        image: "images/c51.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Task Office Chair",
        description:"Mesh task office chair with adjustable features for breathability and comfort",
        price: 6000,
        image: "images/c52.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Leather Task Office Chair",
        description:"Classic leather task office chair with padded seat and backrest for comfort",
        price: 12000,
        image: "images/c53.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Swivel Task Office Chair",
        description:"360-degree swivel task office chair with smooth rolling casters for mobility",
        price: 7000,
        image: "images/c54.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"High-Back Task Office Chair",
        description:"High-back task office chair with plush cushioning and adjustable headrest for support",
        price: 15000,
        image: "images/c55.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mid-Back Task Office Chair",
        description:"Mid-back task office chair with ergonomic design and adjustable features for comfort",
        price: 8000,
        image: "images/c56.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Low-Back Task Office Chair",
        description:"Low-back task office chair with minimalist design and comfortable seating",
        price: 5500,
        image: "images/c57.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Back Task Office Chair",
        description:"Mesh back task office chair with adjustable features for breathability and comfort",
        price: 7500,
        image: "images/c58.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Leather Executive Task Office Chair",
        description:"Luxurious leather executive task office chair with high backrest and padded armrests",
        price: 18000,
        image: "images/c59.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Ergonomic Mesh Task Office Chair",
        description:"Ergonomic mesh task office chair with adjustable lumbar support and breathable design",
        price: 9000,
        image: "images/c60.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Adjustable Task Office Chair",
        description:"Adjustable task office chair with customizable features for personalized comfort",
        price: 8000,
        image: "images/c61.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Rolling Task Office Chair",
        description:"Ergonomic rolling task office chair with adjustable height and lumbar support",
        price: 8000,
        image: "images/c62.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Executive Task Office Chair",
        description:"Luxurious executive task office chair with high backrest and padded armrests",
        price: 12000,
        image: "images/c63.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Task Office Chair",
        description:"Mesh task office chair with adjustable features for breathability and comfort",
        price: 6000,
        image: "images/c64.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Leather Task Office Chair",
        description:"Classic leather task office chair with padded seat and backrest for comfort",
        price: 12000,
        image: "images/c65.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Swivel Task Office Chair",
        description:"360-degree swivel task office chair with smooth rolling casters for mobility",
        price: 7000,
        image: "images/c66.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"High-Back Task Office Chair",
        description:"High-back task office chair with plush cushioning and adjustable headrest for support",
        price: 15000,
        image: "images/c67.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    },
    {
        name:"Mid-Back Task Office Chair",
        description:"Mid-back task office chair with ergonomic design and adjustable features for comfort",
        price: 8000,
        image: "images/c68.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Low-Back Task Office Chair",
        description:"Low-back task office chair with minimalist design and comfortable seating",
        price: 5500,
        image: "images/c69.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]
    },
    {
        name:"Mesh Back Task Office Chair",
        description:"Mesh back task office chair with adjustable features for breathability and comfort",
        price: 7500,
        image: "images/c70.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[0]

    }

   

];

const officeChairDisplay = document.querySelector(".officeChair-display");

function renderChairs(){
    officeChair.forEach(chair=>{
    const chairContainer = document.createElement("div");
    chairContainer.className = "chairContainer";

    chairContainer.innerHTML = `
     <div class="deskOutline">
     <div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div>
        <h6><span>${chair.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${chair.description}</p>
        <p class="itemCategory"><span>${subCategory[0].items[0]}</span><span><s>Ksh.${parseFloat(((chair.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(chair.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
    </div>
    `;
    officeChairDisplay.appendChild(chairContainer);

    chairContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
    
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${chair.name}</span></h6>
            <p class="popdescription">${chair.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((chair.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(chair.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(chair.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        //const pop = popupContainer.querySelector(".popItem");
        const nextFilter = document.querySelector(".left");
        const prevFilter = document.querySelector(".right");
        const filterContainer = document.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

         let counter;
    let quantityContainer;
    let  increaseBtn=document.querySelector(".increasebtn");
    let  decreaseBtn=document.querySelector(".decreasebtn");
    let priceDisplay = document.querySelector(".increasePrice span");
    quantityContainer = document.querySelector(".Quantitycounter");
    counter=1;
        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(chair.price * counter).toFixed(2)}`;


        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
                 CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(chair.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = document.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${chair.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";


    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;
    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

    //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(chair.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((chair.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((chair.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added";

        
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";

        
        }
    });

    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = chair.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);
    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(chair.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((chair.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(chair.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((chair.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(chair.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((chair.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});



});

  

    });
});
}

const prevChair = document.querySelector("#prevChair");
const nextChair = document.querySelector("#nxtChair");
const chairScrollContainer = document.querySelector(".officeChair-display");
prevChair.addEventListener("click", ()=>{
    chairScrollContainer.scrollBy({
        left: -SlideAmount,
        behavior: "smooth"
    });
});
nextChair.addEventListener("click", ()=>{
    chairScrollContainer.scrollBy({
        left: SlideAmount,
        behavior: "smooth"
    });
});

//render game chairs
const gameChair = [
    {
        name:"360° Gaming Chair ",
        description:"Ergonomic gaming chair with adjustable features and vibrant design",
        price: 15000,
        image: "images/c71.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Flexible Gaming Chair ",
        description:"Stylish gaming chair with ergonomic design and vibrant colors",
        price: 10000,
        image: "images/c72.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Adjustable Gaming Chair",
        description:"Comfortable gaming chair with adjustable features for long gaming sessions",
        price: 12000,
        image: "images/c73.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Ergonomic Gaming Chair",
        description:"Ergonomic gaming chair with adjustable lumbar support and breathable design",
        price: 9000,
        image: "images/c74.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Leather Gaming Chair",
        description:"Classic leather gaming chair with padded seat and backrest for comfort",
        price: 12000,
        image: "images/c75.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Mesh Gaming Chair",
        description:"Mesh gaming chair with adjustable features for breathability and comfort",
        price: 8000,
        image: "images/c76.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Reclining Gaming Chair",
        description:"Reclining gaming chair with adjustable features for ultimate relaxation",
        price: 15000,
        image: "images/c77.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Racing Gaming Chair",
        description:"Racing-style gaming chair with ergonomic design and vibrant colors",
        price: 13000,
        image: "images/c78.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Kneeling Gaming Chair",
        description:"Unique kneeling gaming chair that promotes better posture and reduces back pain",
        price: 7000,
        image: "images/c79.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Saddle Gaming Chair",
        description:"Saddle-style gaming chair that encourages active sitting and improves core strength",
        price: 9000,
        image: "images/c80.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Stackable Gaming Chair",
        description:"Space-saving stackable gaming chair with durable construction and comfortable seating",
        price: 5000,
        image: "images/c81.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Conference Gaming Chair",
        description:"Professional conference gaming chair with sleek design and comfortable padding",
        price: 11000,
        image: "images/c82.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Drafting Gaming Chair",
        description:"Height-adjustable drafting gaming chair with footrest for elevated workstations",
        price: 8500,
        image: "images/c83.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Ergonomic Gaming Chair",
        description:"Ergonomic gaming chair with adjustable lumbar support and breathable mesh back",
        price: 9500,
        image:"images/c100.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Leather Gaming Chair",
        description:"Classic leather gaming chair with padded seat and backrest for ultimate comfort",
        price: 15000,
        image: "images/c84.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Task Gaming Chair",
        description:"Functional task gaming chair with adjustable features for everyday use",
        price: 5500,
        image: "images/c85.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Swivel Gaming Chair",
        description:"360-degree swivel gaming chair with smooth rolling casters for easy mobility",
        price: 7500,
        image: "images/c86.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]

    },
    {
        name:"High-Back Gaming Chair",
        description:"High-back gaming chair with plush cushioning and adjustable headrest for added support",
        price: 13000,
        image: "images/c87.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]

    },
    {
        name:"Mid-Back Gaming Chair",
        description:"Mid-back gaming chair with ergonomic design and adjustable features for comfort",
        price: 7000,
        image: "images/c88.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Low-Back Gaming Chair",
        description:"Low-back gaming chair with minimalist design and comfortable seating",
        price: 5000,
        image: "images/c89.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Mesh Back Gaming Chair",
        description:"Mesh back gaming chair with adjustable features for breathability and comfort",
        price: 6500,
        image: "images/c90.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Leather Executive Gaming Chair",
        description:"Luxurious leather executive gaming chair with high backrest and padded armrests",
        price: 18000,
        image: "images/c91.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]

    },
    {
        name:"Ergonomic Mesh Gaming Chair",
        description:"Ergonomic mesh gaming chair with adjustable lumbar support and breathable design",
        price: 9000,
        image: "images/c92.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Adjustable Gaming Chair",
        description:"Adjustable gaming chair with customizable features for personalized comfort",
        price: 8000,
        image: "images/c93.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Rolling Gaming Chair",
        description:"Ergonomic rolling gaming chair with adjustable height and lumbar support",
        price: 8000,
        image: "images/c94.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Executive Gaming Chair",
        description:"Luxurious executive gaming chair with high backrest and padded armrests",
        price: 12000,
        image: "images/c95.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Mesh Gaming Chair",
        description:"Mesh gaming chair with adjustable features for breathability and comfort",
        price: 6000,
        image: "images/c96.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Leather Gaming Chair",
        description:"Classic leather gaming chair with padded seat and backrest for comfort",
        price: 12000,
        image: "images/c97.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]

    },
    {
        name:"Swivel Gaming Chair",
        description:"360-degree swivel gaming chair with smooth rolling casters for mobility",
        price: 7000,
        image: "images/c98.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]

    },
    {
        name:"High-Back Gaming Chair",
        description:"High-back gaming chair with plush cushioning and adjustable headrest for support",
        price: 15000,
        image: "images/c99.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    },
    {
        name:"Mid-Back Gaming Chair",
        description:"Mid-back gaming chair with ergonomic design and adjustable features for comfort",
        price: 8000,
        image: "images/c100.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[2]
    }
];

const gameChairDisplay = document.querySelector(".gameChairsDisplay");

function renderGameChairs(){
    gameChair.forEach(chair=>{
    const chairContainer = document.createElement("div");
    chairContainer.className = "chairContainer";
    chairContainer.innerHTML = `
     <div class="deskOutline">
     <div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div>
        <h6><span>${chair.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${chair.description}</p>
        <p class="itemCategory"><span>${subCategory[0].items[0]}</span><span><s>Ksh.${parseFloat(((chair.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(chair.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
    </div>
 `;

    gameChairDisplay.appendChild(chairContainer);

    chairContainer.addEventListener("click", ()=>{
       searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${chair.name}</span></h6>
            <p class="popdescription">${chair.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((chair.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(chair.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(chair.price * 1).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(chair.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(chair.price * counter).toFixed(2)}`;
            }
        });

       /* const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

        //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${chair.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";

    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

    //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(chair.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((chair.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((chair.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });


    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = chair.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});

//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(chair.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((chair.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(chair.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((chair.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(chair.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((chair.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});






    });
});
}

//next and prev buttons for game chairs
const prevGameChair = document.querySelector("#prevGameChair");
const nextGameChair = document.querySelector("#nxtGameChair");
const gameChairScrollContainer = document.querySelector(".gameChairsDisplay");
prevGameChair.addEventListener("click", ()=>{
    gameChairScrollContainer.scrollBy({
        left: -SlideAmount,
        behavior: "smooth"
    });
});
nextGameChair.addEventListener("click", ()=>{
    gameChairScrollContainer.scrollBy({
        left: SlideAmount,
        behavior: "smooth"
    });
});

//render filling cabinets
const fillingCabinet = [
    {
        name:"Wooden Filling Cabinet",
        description:"Durable wooden filing cabinet with multiple drawers for organized storage",
        price: 15000,
        image: "images/f1.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    },
    {
        name:"Door wooden Filling Cabinet",
        description:"Durable wooden filing cabinet with multiple drawers for organized storage",
        price: 15000,
        image: "images/f2.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    },
    {
        name:"Door office Filling Cabinet",
        description:"Durable wooden filing cabinet with multiple drawers for organized storage",
        price: 15000,
        image: "images/f3.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    },
    {
        name:"Half Glass Filling Cabinet",
        description:"First class half glass filing cabinet with multiple drawers for organized storage",
        price: 15000,
        image: "images/f4.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    },
    {
        name:"3 Drawer Filling Cabinet",
        description:"Durable wooden filing cabinet with multiple drawers for organized storage",
        price: 15000,
        image: "images/f5.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    },
    {
        name:"4 Drawer Filling Cabinet",
        description:"Durable wooden filing cabinet with multiple drawers for organized storage",
        price: 15000,
        image: "images/f6.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    }
    ,{
        name:"3 Doors Filling Cabinet",
        description:"This is an essential piece of office furniture that offers both practical storage and a sleek design",
        price: 15000,
        image: "images/f7.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    },
    {
        name:"4 Doors Filling Cabinet",
        description:"This is an essential piece of office furniture that offers both practical storage and a sleek design",
        price: 15000,
        image: "images/f8.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    },
    {
        name:"Full Glass Filling Cabinet",
        description:"This is an essential piece of office furniture that offers both practical storage and a sleek design",
        price: 15000,
        image: "images/f9.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[3]
    }
];

const fillingCabinetDisplay = document.querySelector(".fillingCabinate-display");

function renderFillingCabinet(){
    fillingCabinet.forEach(cabinet=>{
    const cabinetContainer = document.createElement("div");
    cabinetContainer.className = "cabinetContainer";
    cabinetContainer.innerHTML = `
     <div class="deskOutline">
     <div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
        <h6><span>${cabinet.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${cabinet.description}</p>
        <p class="itemCategory"><span>${subCategory[0].items[2]}</span><span><s>Ksh.${parseFloat(((cabinet.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${((cabinet.price)).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
    </div>
    `;
    fillingCabinetDisplay.appendChild(cabinetContainer);
    
     cabinetContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${cabinet.name}</span></h6>
            <p class="popdescription">${cabinet.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((cabinet.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(cabinet.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(cabinet.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(cabinet.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(cabinet.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${cabinet.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";

     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(cabinet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

    //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${cabinet.image}" alt="${cabinet.name}">
    </div>
    <p>${cabinet.description}</p>
    <h6 class="grandPrice">Ksh.${cabinet.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((cabinet.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((cabinet.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(cabinet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(cabinet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });

    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = cabinet.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});

//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(cabinet.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((cabinet.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((cabinet.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(cabinet.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((cabinet.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((cabinet.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${cabinet.image}" alt="${cabinet.name}">
    </div>
    <p>${cabinet.description}</p>
    <h6 class="grandPrice">Ksh.${cabinet.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
        // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(cabinet.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((cabinet.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((cabinet.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${cabinet.image}" alt="${cabinet.name}">
    </div>
    <p>${cabinet.description}</p>
    <h6 class="grandPrice">Ksh.${cabinet.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    },
     3500);

    }
    


});
    
});


});


    });
});

}

//next and prev buttons for filling cabinets
const prevFillingCabinet = document.querySelector("#prevFillingCabinate");
const nextFillingCabinet = document.querySelector("#nxtFillingCabinate");
const fillingCabinetScrollContainer = document.querySelector(".fillingCabinate-display");
prevFillingCabinet.addEventListener("click", ()=>{
    fillingCabinetScrollContainer.scrollBy({
        left: -SlideAmount,
        behavior: "smooth"
    });
});
nextFillingCabinet.addEventListener("click", ()=>{
    fillingCabinetScrollContainer.scrollBy({
        left: SlideAmount,
        behavior: "smooth"
    });
});

//render workstations
const workstation = [
    {
        name:"Wooden Workstation",
        description:"Durable wooden workstation with spacious surface and storage options",
        price: 25000,
        image: "images/w1.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]

    },
    {
        name:"Exercutive desk",
        description:"Ergonomic executive desk with premium materials and modern design",
        price: 30000,
        image: "images/w2.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]

    },
    {
        name:"L-Shaped Workstation",
        description:"L-shaped workstation with ample surface area and storage compartments",
        price: 35000,
        image: "images/w3.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Standing Workstation",
        description:"Height-adjustable standing workstation for improved ergonomics and productivity",
        price: 40000,
        image: "images/w4.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Corner Workstation",
        description:"Space-saving corner workstation with efficient storage solutions",
        price: 30000,
        image: "images/w5.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Mobile Workstation",
        description:"Mobile workstation with wheels for easy movement and versatile use",
        price: 20000,
        image: "images/w6.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Computer Workstation",
        description:"Computer workstation with cable management and ergonomic design",
        price: 25000,
        image: "images/w7.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Collaborative Workstation",
        description:"Collaborative workstation designed for teamwork and communication",
        price: 35000,
        image: "images/w8.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Adjustable Workstation",
        description:"Adjustable workstation with customizable features for personalized comfort",
        price: 30000,
        image: "images/w9.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Executive Workstation",
        description:"Luxurious executive workstation with high-quality materials and advanced features",
        price: 50000,
        image: "images/w10.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Compact Workstation",
        description:"Compact workstation with space-saving design and efficient storage options",
        price: 20000,
        image: "images/w11.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Industrial Workstation",
        description:"Industrial-style workstation with sturdy construction and modern design",
        price: 35000,
        image: "images/w12.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Ergonomic Workstation",
        description:"Ergonomic workstation with adjustable features for improved comfort and productivity",
        price: 30000,
        image: "images/w13.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Wooden Workstation",
        description:"Durable wooden workstation with spacious surface and storage options",
        price: 25000,
        image: "images/w14.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Exercutive desk",
        description:"Ergonomic executive desk with premium materials and modern design",
        price: 30000,
        image: "images/w15.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]

    },
    {
        name:"X-Shaped Workstation",
        description:"X-shaped workstation with ample surface area and storage compartments",
        price: 35000,
        image: "images/w16.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"U-Shaped Workstation",
        description:"U-shaped workstation with ample surface area and storage compartments",
        price: 35000,
        image: "images/w17.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name: "Single Pedestal Workstation",
        description: "Single pedestal workstation with spacious surface and storage options",
        price: 25000,
        image: "images/w18.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name: "Double Pedestal Workstation",
        description: "Double pedestal workstation with spacious surface and storage options",
        price: 35000,
        image: "images/w19.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name: "Modular Workstation",
        description: "Modular workstation with customizable components for flexible office setups",
        price: 40000,
        image: "images/w20.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"single User Workstation",
        description:"Single user workstation with compact design and efficient storage solutions",
        price: 20000,
        image: "images/w21.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Multi-User Workstation",
        description:"Multi-user workstation designed for collaborative work and communication",
        price: 50000,
        image: "images/w22.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Sit-Stand Workstation",
        description:"Sit-stand workstation with adjustable height for improved ergonomics and productivity",
        price: 40000,
        image: "images/w23.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Circular Workstation",
        description:"Circular workstation designed for collaborative work and communication",
        price: 35000,
        image: "images/w24.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Semi-Circular Workstation",
        description:"Semi-circular workstation designed for collaborative work and communication",
        price: 35000,
        image: "images/w25.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"S-Shaped Workstation",
        description:"S-shaped workstation designed for collaborative work and communication",
        price: 35000,
        image: "images/w26.avif",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Z-Shaped Workstation",
        description:"Z-shaped workstation designed for collaborative work and communication",
        price: 35000,
        image: "images/w27.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Double Deker Workstation",
        description:"Double deker workstation with ample surface area and storage compartments",
        price: 40000,
        image: "images/w28.avif",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"First Class Workstation",
        description:"First class workstation with premium materials, advanced features, and luxurious design",
        price: 60000,
        image: "images/w29.png",
         categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    },
    {
        name:"Budget Workstation",
        description:"Budget-friendly workstation with essential features and functional design",
        price: 15000,
        image: "images/w30.png",
        categoryName:categories[0].name,
        subCategoryName:subCategory[0].items[4]
    }
];

const workstationDisplay = document.querySelector(".workStationDisplay");

function renderWorkstation(){
    workstation.forEach(workstation=>{
    const workstationContainer = document.createElement("div");
    workstationContainer.className = "workstationContainer";
    workstationContainer.innerHTML = `
     <div class="deskOutline">
     <div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
        <h6><span>${workstation.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${workstation.description}</p>
        <p class="itemCategory"><span>${subCategory[0].items[3]}</span><span><s>Ksh.${parseFloat(((workstation.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(workstation.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
    </div>
    `;
    workstationDisplay.appendChild(workstationContainer);
   
     workstationContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
    
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${workstation.image}" alt="${workstation.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${workstation.image}" alt="${workstation.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${workstation.name}</span></h6>
            <p class="popdescription">${workstation.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((workstation.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(workstation.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(workstation.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(workstation.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(workstation.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(workstation.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(workstation.price * counter).toFixed(2)}`;
            }
        });

       /* const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

          //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${workstation.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
      quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(workstation.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(workstation.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(workstation.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(workstation.price * counter).toFixed(2)}`;
       // grandPrice.textContent=` Ksh.${(workstation.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

 //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${workstation.image}" alt="${workstation.name}">
    </div>
    <p>${workstation.description}</p>
    <h6 class="grandPrice">Ksh.${workstation.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(workstation.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(workstation.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(workstation.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((workstation.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((workstation.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(workstation.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(workstation.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(workstation.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(workstation.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(workstation.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(workstation.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(workstation.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(workstation.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(workstation.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(workstation.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });

    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = workstation.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(workstation.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((workstation.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((workstation.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(workstation.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((workstation.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((workstation.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${workstation.image}" alt="${workstation.name}">
    </div>
    <p>${workstation.description}</p>
    <h6 class="grandPrice">Ksh.${workstation.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(workstation.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((workstation.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((workstation.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${workstation.image}" alt="${workstation.name}">
    </div>
    <p>${workstation.description}</p>
    <h6 class="grandPrice">Ksh.${workstation.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});



});


    });

});

}

//next and prev buttons for workstations
const prevWorkstation = document.querySelector("#prevWorkStation");
const nextWorkstation = document.querySelector("#nxtWorkStation");

const workstationScrollContainer = document.querySelector(".workStationDisplay");
prevWorkstation.addEventListener("click", ()=>{
    workstationScrollContainer.scrollBy({
        left: -SlideAmount,
        behavior: "smooth"
    });
});
nextWorkstation.addEventListener("click", ()=>{
    workstationScrollContainer.scrollBy({
        left: SlideAmount,
        behavior: "smooth"
    });
});


//render sofas
const sofas = [
    {
        name:"Leather Sofa",
        description:"Luxurious leather sofa with plush cushions and elegant design",
        price: 50000,
        image: "images/s1.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Fabric Sofa",
        description:"Comfortable fabric sofa with modern design and durable construction",
        price: 30000,
        image: "images/s2.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]

    },
    {
        name:"Sectional Sofa",
        description:"Spacious sectional sofa with modular design for versatile seating arrangements",
        price: 60000,
        image: "images/s3.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Sleeper Sofa",
        description:"Functional sleeper sofa with comfortable mattress for overnight guests",
        price: 40000,
        image: "images/s4.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Reclining Sofa",
        description:"Reclining sofa with adjustable features for ultimate relaxation",
        price: 45000,
        image: "images/s5.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Chesterfield Sofa",
        description:"Classic Chesterfield sofa with deep button tufting and rolled arms",
        price: 55000,
        image: "images/s6.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Mid-Century Modern Sofa",
        description:"Mid-century modern sofa with clean lines and retro design",
        price: 35000,
        image: "images/s7.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]

    },
    {
        name:"Contemporary Sofa",
        description:"Contemporary sofa with sleek design and comfortable seating",
        price: 40000,
        image: "images/s8.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Outdoor Sofa",
        description:"Durable outdoor sofa with weather-resistant materials and stylish design",
        price: 45000,
        image: "images/s9.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Loveseat Sofa",
        description:"Cozy loveseat sofa with compact design and comfortable seating",
        price: 25000,
        image: "images/s10.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Convertible Sofa",
        description:"Convertible sofa that can be easily transformed into a bed for added functionality",
        price: 40000,
        image: "images/s11.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Customizable Sofa",
        description:"Customizable sofa with modular components for personalized comfort and style",
        price: 60000,
        image: "images/s12.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Luxury Sofa",
        description:"Luxury sofa with premium materials, advanced features, and elegant design",
        price: 80000,
        image: "images/s13.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Budget Sofa",
        description:"Budget-friendly sofa with essential features and functional design",
        price: 20000,
        image: "images/s14.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Classic Sofa",
        description:"Classic sofa with timeless design and comfortable seating",
        price: 35000,
        image: "images/s15.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Modern Sofa",
        description:"Modern sofa with sleek design and comfortable seating",
        price: 40000,
        image: "images/s16.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Traditional Sofa",
        description:"Traditional sofa with elegant design and comfortable seating",
        price: 45000,
        image: "images/s17.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Contemporary Sofa",
        description:"Contemporary sofa with sleek design and comfortable seating",
        price: 40000,
        image: "images/s18.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Sectional Sofa",
        description:"Spacious sectional sofa with modular design for versatile seating arrangements",
        price: 60000,
        image: "images/s19.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Reclining Sofa",
        description:"Reclining sofa with adjustable features for ultimate relaxation",
        price: 45000,
        image: "images/s20.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Chesterfield Sofa",
        description:"Classic Chesterfield sofa with deep button tufting and rolled arms",
        price: 55000,
        image: "images/s21.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]

    },
    {
        name:"Mid-Century Modern Sofa",
        description:"Mid-century modern sofa with clean lines and retro design",
        price: 35000,
        image: "images/s22.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Fabric Sofa",
        description:"Comfortable fabric sofa with a variety of colors and patterns",
        price: 30000,
        image: "images/s23.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"First Class Sofa",
        description:"First class sofa with premium materials, advanced features, and luxurious design",
        price: 80000,
        image: "images/s24.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"3-Seater Sofa",
        description:"Spacious 3-seater sofa with comfortable seating and stylish design",
        price: 50000,
        image: "images/s25.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"2-Seater Sofa",
        description:"Cozy 2-seater sofa with compact design and comfortable seating",
        price: 30000,
        image: "images/s26.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"L-Shaped Sofa",
        description:"L-shaped sofa with ample seating and modern design",
        price: 60000,
        image: "images/s27.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"U-Shaped Sofa",
        description:"U-shaped sofa with ample seating and modern design",
        price: 70000,
        image: "images/s28.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Sectional Sofa",
        description:"Spacious sectional sofa with modular design for versatile seating arrangements",
        price: 60000,
        image: "images/s29.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Sleeper Sofa",
        description:"Functional sleeper sofa with comfortable mattress for overnight guests",
        price: 40000,
        image: "images/s30.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    },
    {
        name:"Exercutive office Sofa",
        description:"Ergonomic executive office sofa with premium materials and modern design",
        price: 50000,
        image: "images/s31.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[0]
    }
];

const sofaDisplay = document.querySelector(".sofaDisplay");

function renderSofa(){
    sofaDisplay.innerHTML = "";
    sofas.forEach(sofa => {
        const sofaContainer = document.createElement("div");
        sofaContainer.className = "sofaContainer";
        sofaContainer.innerHTML = `
            <div class="deskOutline">
     <div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
        <h6><span>${sofa.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${sofa.description}</p>
        <p class="itemCategory"><span>${subCategory[1].items[0]}</span><span><s>Ksh.${parseFloat(((sofa.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(sofa.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
    </div>
        `;
        sofaDisplay.appendChild(sofaContainer);
       
         sofaContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
   
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${sofa.image}" alt="${sofa.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${sofa.image}" alt="${sofa.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${sofa.name}</span></h6>
            <p class="popdescription">${sofa.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((sofa.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(sofa.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(sofa.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(sofa.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(sofa.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(sofa.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(sofa.price * counter).toFixed(2)}`;
            }
        });

       /* const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${sofa.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(sofa.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(sofa.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(sofa.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(sofa.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(sofa.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${sofa.image}" alt="${sofa.name}">
    </div>
    <p>${sofa.description}</p>
    <h6 class="grandPrice">Ksh.${sofa.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(sofa.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(sofa.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(sofa.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((sofa.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((sofa.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(sofa.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(sofa.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(sofa.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(sofa.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(sofa.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(sofa.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(sofa.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(sofa.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(sofa.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(sofa.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });


    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = sofa.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(sofa.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((sofa.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((sofa.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(sofa.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((sofa.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((sofa.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${sofa.image}" alt="${sofa.name}">
    </div>
    <p>${sofa.description}</p>
    <h6 class="grandPrice">Ksh.${sofa.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(sofa.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((sofa.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((sofa.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${sofa.image}" alt="${sofa.name}">
    </div>
    <p>${sofa.description}</p>
    <h6 class="grandPrice">Ksh.${sofa.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});



    });

    });
}

//next sofa and prev sofa

const nextSofa = document.querySelector("#prevSofa");
const prevSofa = document.querySelector("#nxtSofa");
const sofaContainers = document.querySelector(".sofaDisplay");

nextSofa.addEventListener("click",()=>{
    sofaContainers.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"

    });
});
prevSofa.addEventListener("click",()=>{
    sofaContainers.scrollBy({
        left:scrollAmount,
        behavior:"smooth"

    });
});


//render tables 
const tables=[
    {
        name:"Circular Wooden Table",
        description:"Smooth polished table for first class sitting room",
        price:9500,
        image:"images/t1.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Rustic Farmhouse Table",
        description:"Solid wood farmhouse table with vintage charm",
        price:14500,
        image:"images/t2.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Glass Dining Table",
        description:"Modern glass top table with sleek metal legs",
        price:22000,
        image:"images/t3.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Marble Coffee Table",
        description:"Elegant marble surface with gold-finish base",
        price:28000,
        image:"images/t4.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Mid-Century Side Table",
        description:"Classic mid-century accent table with tapered legs",
        price:8200,
        image:"images/t5.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Compact Corner Table",
        description:"Space-saving table for small living areas",
        price:6500,
        image:"images/t6.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Extendable Dining Table",
        description:"Expandable table designed for family meals",
        price:33000,
        image:"images/t7.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Industrial Console Table",
        description:"Steel frame console with reclaimed wood top",
        price:19500,
        image:"images/t8.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Round Bistro Table",
        description:"Cozy round table ideal for breakfast nooks",
        price:11200,
        image:"images/t9.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Outdoor Patio Table",
        description:"Weather-resistant table for outdoor entertaining",
        price:16500,
        image:"images/t10.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Marble Top Side Table",
        description:"Luxurious side table with polished marble finish",
        price:17500,
        image:"images/t11.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Woven Rattan Table",
        description:"Natural rattan table with textured appeal",
        price:9800,
        image:"images/t12.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Minimalist Study Table",
        description:"Simple desk with clean lines for home offices",
        price:14500,
        image:"images/t13.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Nested Coffee Tables",
        description:"Set of two nesting tables for versatile styling",
        price:13800,
        image:"images/t14.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Solid Oak Dining Table",
        description:"Durable oak dining table built to last",
        price:36000,
        image:"images/t15.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Convertible Console Table",
        description:"Multi-use table that doubles as a desk",
        price:20500,
        image:"images/t16.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Elegant Vanity Table",
        description:"Dressing table with storage drawers and mirror",
        price:29500,
        image:"images/t17.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Scandinavian Accent Table",
        description:"Light wood table with soft rounded edges",
        price:12500,
        image:"images/t18.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"High Gloss TV Table",
        description:"Contemporary TV table with glossy finish",
        price:21000,
        image:"images/t19.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Classic Pedestal Table",
        description:"Round pedestal table with timeless style",
        price:19800,
        image:"images/t20.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Foldable Dining Table",
        description:"Easy-fold table for flexible dining space",
        price:12800,
        image:"images/t21.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Reclaimed Wood Table",
        description:"Eco-friendly table made from reclaimed timber",
        price:24900,
        image:"images/t22.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Concrete Coffee Table",
        description:"Industrial concrete look for modern interiors",
        price:23200,
        image:"images/t23.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Lux Leather Side Table",
        description:"Chic leather-wrapped side table accent",
        price:17200,
        image:"images/t24.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Mirrored Accent Table",
        description:"Reflective mirror finish for glamorous decor",
        price:26000,
        image:"images/t25.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Vintage Pine Table",
        description:"Warm pine table with a distressed finish",
        price:14200,
        image:"images/t26.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Farmhouse Kitchen Table",
        description:"Robust kitchen table with classic farmhouse feel",
        price:31500,
        image:"images/t27.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Acrylic Side Table",
        description:"Clear acrylic table for a light modern look",
        price:15800,
        image:"images/t28.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Bistro Bar Table",
        description:"Tall bar table for casual seating",
        price:19700,
        image:"images/t29.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Ceramic Tile Table",
        description:"Handcrafted tile tabletop with bold pattern",
        price:23500,
        image:"images/t30.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Minimal Steel Table",
        description:"Slim steel table with minimal frame design",
        price:12800,
        image:"images/t31.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Solid Teak Table",
        description:"Premium teak table with rich natural finish",
        price:42900,
        image:"images/t32.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Oval Dining Table",
        description:"Smooth oval table for elegant dining settings",
        price:35800,
        image:"images/t33.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Project Work Table",
        description:"Large work table with extra surface area",
        price:27400,
        image:"images/t34.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Marble Bistro Table",
        description:"Small marble table perfect for cozy corners",
        price:18900,
        image:"images/t35.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Industrial Drafting Table",
        description:"Adjustable drafting table for creative work",
        price:41500,
        image:"images/t36.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Rustic End Table",
        description:"Compact end table with natural texture",
        price:9400,
        image:"images/t37.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Teak Garden Table",
        description:"Outdoor teak table built for patio use",
        price:26900,
        image:"images/t38.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Craftsman Workshop Table",
        description:"Heavy-duty workspace table for projects",
        price:34200,
        image:"images/t39.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    },
    {
        name:"Classic Round Table",
        description:"Traditional round table with warm finish",
        price:15800,
        image:"images/t40.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[1]
    }
];

const tableDisplay = document.querySelector(".tablesDisplay");

function renderTables(){
    tables.forEach(table=>{
        const tableContainer = document.createElement("div");
        tableContainer.className = "tableContainer";

        tableContainer.innerHTML = `
        <div class="deskOutline">
        <div class="deskImage"><img src="${table.image}" alt="${table.name}"></div>
        <h6><span>${table.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${table.description}</p>
        <p class="itemCategory"><span>${subCategory[1].items[1]}</span><span><s>Ksh.${parseFloat(((table.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(table.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
        </div>
        `;
        tableDisplay.appendChild(tableContainer);
        
        tableContainer.addEventListener("click", ()=>{
       searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${table.name}</span></h6>
            <p class="popdescription">${table.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((table.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(table.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(table.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(table.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(table.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${table.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(table.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((table.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((table.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });

    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = table.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(table.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((table.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(table.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((table.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(table.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((table.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});



});

    });

    });
}

//next table and prev tables

const prevTable = document.querySelector("#prevTables")
const nxtTable = document.querySelector("#nxtTables");
const tableContainer = document.querySelector(".tablesDisplay");

prevTable.addEventListener("click",()=>{
    tableContainer.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});
nxtTable.addEventListener("click",()=>{
    tableContainer.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});

//renderStands
const stands = [
    {
        name:"Wooden TV Stand",
        description:"Medium-height 32-inch TV stand with open shelving",
        price:1500,
        image:"images/st1.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Modern Media Stand",
        description:"Sleek low-profile media stand with cable management",
        price:4200,
        image:"images/st2.png",
        categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Corner TV Stand",
        description:"Space-saving corner stand for compact living rooms",
        price:2900,
        image:"images/st3.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Glass Display Stand",
        description:"Tempered glass stand with chrome legs for modern decor",
        price:5400,
        image:"images/st4.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Floating TV Stand",
 description:"Wall-mounted floating stand with hidden storage",
        price:5200,
        image:"images/st5.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Rustic Entertainment Stand",
        description:"Distressed wood finish with open and closed storage",
        price:6800,
        image:"images/st6.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Industrial TV Console",
        description:"Metal frame console with reclaimed wood shelves",
        price:7400,
        image:"images/st7.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Minimalist Media Console",
        description:"Clean-lined stand with two large drawers",
        price:6200,
        image:"images/st8.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Fireplace",
        description:"Electric fireplace console for cozy viewing areas",
        price:18500,
        image:"images/st9.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Wide TV Cabinet",
        description:"Large TV cabinet with adjustable shelving",
        price:9800,
        image:"images/st10.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Entertainment Center",
        description:"Full media center with side cabinets and storage",
        price:22500,
        image:"images/st11.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Low TV Bench",
        description:"Low bench-style stand for minimalist interiors",
        price:3600,
        image:"images/st12.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Drawer TV Stand",
        description:"Stand with spacious drawers for remote storage",
        price:7100,
        image:"images/st13.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Open Shelf TV Stand",
        description:"Open shelving unit for media components",
        price:4700,
        image:"images/st14.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Console Table TV Stand",
        description:"Multifunctional console table with TV space",
        price:5900,
        image:"images/st15.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Vintage TV Stand",
        description:"Classic vintage-inspired stand with turned legs",
        price:8200,
        image:"images/st16.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Scandinavian TV Stand",
        description:"Light wood stand with simple Scandinavian styling",
        price:7100,
        image:"images/st17.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Maple TV Stand",
        description:"Warm maple finish stand with clean storage",
        price:7800,
        image:"images/st18.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Shelves",
        description:"Modular stand with three open shelves",
        price:6600,
        image:"images/st19.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"High Gloss Stand",
        description:"Glossy lacquered TV stand for modern rooms",
        price:8900,
        image:"images/st20.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Doors",
        description:"Closed cabinet stand for hidden storage",
        price:7600,
        image:"images/st21.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Reclaimed Wood TV Stand",
        description:"Eco-friendly reclaimed wood media stand",
        price:9400,
        image:"images/st22.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Tall TV Console",
        description:"Tall console with extra vertical storage",
        price:9800,
        image:"images/st23.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"L-shaped TV Stand",
        description:"Corner friendly L-shaped entertainment unit",
        price:12500,
        image:"images/st24.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Speaker Shelf",
        description:"Designed shelf for stereo speakers and soundbar",
        price:8600,
        image:"images/st25.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Modern Oak TV Stand",
        description:"Oak finish stand with contemporary details",
        price:9200,
        image:"images/st26.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Wine Rack",
        description:"Entertainment stand with integrated wine storage",
        price:14200,
        image:"images/st27.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Drawer",
        description:"Handy drawer for DVDs and accessories",
        price:6700,
        image:"images/st28.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Mid-Century TV Stand",
        description:"Retro-inspired stand with angled legs",
        price:7600,
        image:"images/st29.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Media Storage",
        description:"Large storage stand for consoles and games",
        price:10300,
        image:"images/st30.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Walnut TV Stand",
        description:"Rich walnut finish with smooth surfaces",
        price:10800,
        image:"images/st31.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Sliding Doors",
        description:"Sliding door console for flexible access",
        price:11200,
        image:"images/st32.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"White TV Stand",
        description:"Crisp white stand for bright living spaces",
        price:6800,
        image:"images/st33.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Black TV Stand",
        description:"Sleek black media stand with matte finish",
        price:7300,
        image:"images/st34.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Bookshelf",
        description:"Integrated bookshelf and display surface",
        price:12400,
        image:"images/st35.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Compact Media Stand",
        description:"Small media stand for apartments and dorms",
        price:3900,
        image:"images/st36.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Wire Management",
        description:"Built-in wire tray keeps cables tidy",
        price:7900,
        image:"images/st37.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"High-End Entertainment Stand",
        description:"Premium media console with polished finish",
        price:15800,
        image:"images/st38.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"TV Stand with Drawer Shelves",
        description:"Combination of drawered and open shelf storage",
        price:8300,
        image:"images/st39.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    },
    {
        name:"Eco-Friendly TV Stand",
        description:"Sustainably made stand with natural finish",
        price:10100,
        image:"images/st40.png",
        categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[2]
    }
];

const standDisplay=document.querySelector(".standDisplay");
function renderStand(){
    stands.forEach(stand=>{
    const standContainer = document.createElement("div");
    standContainer.className = "standContainer";
    standContainer.innerHTML= `
        <div class="deskOutline">
        <div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div>
        <h6><span>${stand.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${stand.description}</p>
        <p class="itemCategory"><span>${subCategory[1].items[2]}</span><span><s>Ksh.${parseFloat(((stand.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(stand.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
        </div>
    `;
    standDisplay.appendChild(standContainer);
   
    standContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${stand.image}" alt="${stand.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${stand.image}" alt="${stand.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${stand.image}" alt="${stand.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${stand.image}" alt="${stand.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${stand.image}" alt="${stand.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${stand.image}" alt="${stand.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${stand.image}" alt="${stand.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${stand.image}" alt="${stand.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${stand.name}</span></h6>
            <p class="popdescription">${stand.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((stand.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(stand.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(stand.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(stand.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(stand.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(stand.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(stand.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

       //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${stand.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";

     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(stand.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(stand.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(stand.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(stand.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(stand.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${stand.image}" alt="${stand.name}">
    </div>
    <p>${stand.description}</p>
    <h6 class="grandPrice">Ksh.${stand.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(stand.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(stand.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(stand.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((stand.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((stand.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(stand.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(stand.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(stand.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(stand.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(stand.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(stand.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(stand.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(stand.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(stand.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(stand.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });


    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = stand.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});

//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(stand.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((stand.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((stand.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(stand.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((stand.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((stand.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${stand.image}" alt="${stand.name}">
    </div>
    <p>${stand.description}</p>
    <h6 class="grandPrice">Ksh.${stand.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(stand.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((stand.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((stand.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${stand.image}" alt="${stand.name}">
    </div>
    <p>${stand.description}</p>
    <h6 class="grandPrice">Ksh.${stand.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});



});

    });

    });
}

//netx stand and prev stand
const nextStand = document.querySelector("#prevStands");
const prevStand = document.querySelector("#nxtStands");
const standContainer = document.querySelector(".standDisplay");

nextStand.addEventListener("click",()=>{
    standContainer.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});
prevStand.addEventListener("click",()=>{
    standContainer.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});


//cabinets codes

const cabinets=[
    {
        name:"Classic Filing Cabinet",
        description:"Sturdy metal filing cabinet with three smooth-glide drawers",
        price:8500,
        image:"images/cab1.png",
        categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Woodgrain Filing Cabinet",
        description:"Warm woodgrain finish cabinet with secure locking drawers",
        price:10900,
        image:"images/cab2.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Mobile Filing Cabinet",
        description:"Compact rolling cabinet with locking caster wheels",
        price:6900,
        image:"images/cab3.png",
        categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Lateral Filing Cabinet",
        description:"Wide lateral cabinet for letter and legal size storage",
        price:14600,
        image:"images/cab4.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Vertical Filing Cabinet",
        description:"Space-saving vertical cabinet with durable steel frame",
        price:7800,
        image:"images/cab5.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Slim Filing Cabinet",
        description:"Narrow cabinet ideal for tight office corners",
        price:5600,
        image:"images/cab6.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Two-Drawer Filing Cabinet",
        description:"Simple two-drawer cabinet with recessed handles",
        price:7200,
        image:"images/cab7.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Four-Drawer Filing Cabinet",
        description:"Large four-drawer cabinet for heavy paperwork",
        price:16500,
        image:"images/cab8.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"File and Storage Cabinet",
        description:"Cabinet with two filing drawers and open shelving",
        price:13800,
        image:"images/cab9.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Lockable Office Cabinet",
        description:"Secure cabinet with keyed lock for confidential files",
        price:9200,
        image:"images/cab10.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Wood Cabinet with Drawers",
        description:"Classic wood cabinet with three spacious drawers",
        price:12400,
        image:"images/cab11.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Modern Metal Cabinet",
        description:"Minimalist metal cabinet with recessed pull handles",
        price:9800,
        image:"images/cab12.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Executive Filing Cabinet",
        description:"Premium executive cabinet with soft-close drawers",
        price:17200,
        image:"images/cab13.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Home Office Cabinet",
        description:"Compact home office cabinet designed for laptops and files",
        price:8900,
        image:"images/cab14.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Cabinet with Bookshelf",
        description:"Storage cabinet paired with a built-in bookshelf",
        price:16500,
        image:"images/cab15.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Industrial Filing Cabinet",
        description:"Industrial steel cabinet with raw finish and durability",
        price:13200,
        image:"images/cab16.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Drawer Cabinet with Wheels",
        description:"Rolling drawer cabinet for flexible workspace storage",
        price:8200,
        image:"images/cab17.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Multi-Function Storage Cabinet",
        description:"Cabinet with filing drawers and open utility shelves",
        price:14900,
        image:"images/cab18.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Wood and Metal Cabinet",
        description:"Mixed material cabinet with wooden top and metal base",
        price:13800,
        image:"images/cab19.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Corner Filing Cabinet",
        description:"Space-saving cabinet designed for corner placement",
        price:9700,
        image:"images/cab20.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Cabinet with File Rails",
        description:"Filing cabinet equipped with built-in hanging rails",
        price:10200,
        image:"images/cab21.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Decorative Storage Cabinet",
        description:"Stylish decorative cabinet for office and home use",
        price:11900,
        image:"images/cab22.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Tall Storage Cabinet",
        description:"Tall vertical cabinet with five storage drawers",
        price:18700,
        image:"images/cab23.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Desk Height Filing Cabinet",
        description:"Short filing cabinet that fits perfectly under desks",
        price:7800,
        image:"images/cab24.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Wooden File Cabinet",
        description:"Elegant wood cabinet with two letter-size drawers",
        price:11500,
        image:"images/cab25.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"File Cabinet with Shelves",
        description:"Cabinet with filing drawers and display shelves",
        price:16100,
        image:"images/cab26.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Laminated Filing Cabinet",
        description:"Durable laminated finish with easy-clean surface",
        price:8400,
        image:"images/cab27.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Cabinet with Magnetic Board",
        description:"Two-drawer cabinet topped with a magnetic memo board",
        price:15200,
        image:"images/cab28.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Portable File Cabinet",
        description:"Lightweight cabinet that can be moved easily between rooms",
        price:7700,
        image:"images/cab29.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Storage Cabinet with Doors",
        description:"Secure cabinet with doors and interior storage space",
        price:12900,
        image:"images/cab30.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Coffee Table Cabinet",
        description:"Low cabinet that doubles as a coffee table and storage unit",
        price:14200,
        image:"images/cab31.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Office Cabinet with Lock",
        description:"Compact secure cabinet for sensitive documents",
        price:9900,
        image:"images/cab32.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Shelved Filing Cabinet",
        description:"Cabinet with alternating drawers and open shelves",
        price:15400,
        image:"images/cab33.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Wood Finish Storage Cabinet",
        description:"Smooth wood finish cabinet with hidden drawer pulls",
        price:12300,
        image:"images/cab34.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Two-Tone Filing Cabinet",
        description:"Modern two-tone cabinet for contemporary offices",
        price:13100,
        image:"images/cab35.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Office Supply Cabinet",
        description:"Organized cabinet with sections for supplies and files",
        price:11800,
        image:"images/cab36.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Compact White Cabinet",
        description:"Bright white cabinet for clean office styling",
        price:8900,
        image:"images/cab37.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Black Steel Filing Cabinet",
        description:"Bold black steel cabinet with secure drawer locks",
        price:10300,
        image:"images/cab38.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Cabinet with Pull-Out Tray",
        description:"Useful pull-out tray for printer or laptop storage",
        price:13500,
        image:"images/cab39.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    },
    {
        name:"Eco-Friendly Cabinet",
        description:"Cabinet made from sustainable materials and finishes",
        price:14900,
        image:"images/cab40.png",
         categoryName:categories[1].name,
        subCategoryName:subCategory[1].items[3]
    }
];

const cabinetDisplay = document.querySelector(".cabinetDisplay");

function renderCabinet(){
    cabinets.forEach(cabinet=>{
    const cabinetContainer = document.createElement("div");
    cabinetContainer.className = "cabinetContainer";
    cabinetContainer.innerHTML = `
    <div class="deskOutline">
        <div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
        <h6><span>${cabinet.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${cabinet.description}</p>
        <p class="itemCategory"><span>${subCategory[1].items[3]}</span><span><s>Ksh.${parseFloat(((cabinet.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(cabinet.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
    </div>
    `;
    cabinetDisplay.appendChild(cabinetContainer);
    
    cabinetContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${cabinet.image}" alt="${cabinet.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${cabinet.name}</span></h6>
            <p class="popdescription">${cabinet.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((cabinet.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(cabinet.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(cabinet.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(cabinet.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(cabinet.price * counter).toFixed(2)}`;
            }
        });

       /* const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${cabinet.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(cabinet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${cabinet.image}" alt="${cabinet.name}">
    </div>
    <p>${cabinet.description}</p>
    <h6 class="grandPrice">Ksh.${cabinet.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((cabinet.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((cabinet.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(cabinet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(cabinet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(cabinet.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(cabinet.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });

    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = cabinet.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(cabinet.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((cabinet.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((cabinet.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(cabinet.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((cabinet.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((cabinet.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${cabinet.image}" alt="${cabinet.name}">
    </div>
    <p>${cabinet.description}</p>
    <h6 class="grandPrice">Ksh.${cabinet.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(cabinet.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((cabinet.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((cabinet.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${cabinet.image}" alt="${cabinet.name}">
    </div>
    <p>${cabinet.description}</p>
    <h6 class="grandPrice">Ksh.${cabinet.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });

});

}

//netx cabinet prev cabinet
const netxCabinet = document.querySelector("#prevCabinet");
const prevCabinet = document.querySelector("#nxtCabinet");
const cabinetContainer = document.querySelector(".cabinetDisplay");

netxCabinet.addEventListener("click",()=>{
    cabinetContainer.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});
prevCabinet.addEventListener("click",()=>{
    cabinetContainer.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});


//beds codes
const beds = [
    {
        name:"Platform Bed",
        description:"Low-profile platform bed with clean modern lines",
        price:22000,
        image:"images/bed1.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Storage Bed",
        description:"Bed frame with built-in under-bed drawers for extra storage",
        price:28500,
        image:"images/bed2.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Upholstered Bed",
        description:"Soft upholstered headboard with contemporary styling",
        price:32000,
        image:"images/bed3.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Canopy Bed",
        description:"Elegant canopy bed frame for a luxurious bedroom look",
        price:48000,
        image:"images/bed4.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Bunk Bed",
        description:"Space-saving bunk bed ideal for shared rooms",
        price:24000,
        image:"images/bed5.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Sleigh Bed",
        description:"Classic sleigh bed with curved headboard and footboard",
        price:41000,
        image:"images/bed6.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Adjustable Bed",
        description:"Comfortable adjustable base with head and foot lift",
        price:56000,
        image:"images/bed7.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Daybed",
        description:"Multi-use daybed perfect for lounging and guest rooms",
        price:18500,
        image:"images/bed8.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Metal Bed Frame",
        description:"Durable metal bed frame with industrial charm",
        price:16000,
        image:"images/bed9.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Panel Bed",
        description:"Traditional panel bed with raised headboard detail",
        price:27500,
        image:"images/bed10.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Storage Platform Bed",
        description:"Platform bed with multiple hidden drawers",
        price:34000,
        image:"images/bed11.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Low Bed",
        description:"Minimalist low bed frame for a modern bedroom",
        price:19500,
        image:"images/bed12.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"King Bed",
        description:"Spacious king-size bed with solid construction",
        price:39000,
        image:"images/bed13.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Queen Bed",
        description:"Elegant queen bed with a plush headboard",
        price:34500,
        image:"images/bed14.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Twin Bed",
        description:"Compact twin bed perfect for a kids room",
        price:14500,
        image:"images/bed15.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Full Bed",
        description:"Classic full-size bed with sturdy wooden frame",
        price:20500,
        image:"images/bed16.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Four-Poster Bed",
        description:"Timeless four-poster bed with a stately presence",
        price:52500,
        image:"images/bed17.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Storage Headboard Bed",
        description:"Bed with built-in storage shelves in the headboard",
        price:36500,
        image:"images/bed18.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Trundle Bed",
        description:"Bed with pull-out trundle for additional sleeping space",
        price:29000,
        image:"images/bed19.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Slatted Bed",
        description:"Airy slatted bed frame with modern appeal",
        price:21500,
        image:"images/bed20.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Platform Storage Bed",
        description:"Storage platform bed with a low-profile design",
        price:33500,
        image:"images/bed21.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Upholstered Platform Bed",
        description:"Plush upholstered bed frame with simple elegance",
        price:35500,
        image:"images/bed22.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Rustic Bed Frame",
        description:"Rustic wood bed frame with a warm farmhouse finish",
        price:29000,
        image:"images/bed23.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Modern Bed Frame",
        description:"Contemporary bed frame with crisp geometric lines",
        price:30000,
        image:"images/bed24.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Tufted Bed",
        description:"Elegant tufted headboard with premium upholstery",
        price:42500,
        image:"images/bed25.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Floating Bed",
        description:"Floating-style bed frame with concealed legs",
        price:37500,
        image:"images/bed26.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Storage Bed with Shelves",
        description:"Bed frame featuring storage drawers and side shelves",
        price:38500,
        image:"images/bed27.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Wood Bed Frame",
        description:"Solid wood bed frame with natural finish",
        price:27500,
        image:"images/bed28.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Classic Headboard Bed",
        description:"Traditional bed with an elegant wood headboard",
        price:30500,
        image:"images/bed29.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Contemporary Upholstered Bed",
        description:"Soft upholstered bed with modern details",
        price:39500,
        image:"images/bed30.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Scandinavian Bed",
        description:"Light wood Scandinavian bed with a clean aesthetic",
        price:28500,
        image:"images/bed31.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Industrial Bed",
        description:"Industrial-inspired bed frame with metal accents",
        price:32500,
        image:"images/bed32.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Classic Metal Bed",
        description:"Elegant metal bed frame with decorative details",
        price:24000,
        image:"images/bed33.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Bed with Footboard",
        description:"Complete bed set with headboard and footboard",
        price:36000,
        image:"images/bed34.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Low Profile Platform Bed",
        description:"Ultra-low platform bed for a sleek modern bedroom",
        price:25500,
        image:"images/bed35.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Upholstered Bed with Nailhead",
        description:"Elegant nailhead trimmed upholstered headboard",
        price:44500,
        image:"images/bed36.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Wood and Leather Bed",
        description:"Bed frame combining wood and leather accents",
        price:43500,
        image:"images/bed37.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Chesterfield Bed",
        description:"Luxurious Chesterfield-style upholstered bed",
        price:48500,
        image:"images/bed38.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Panel Headboard Bed",
        description:"Bed with a tall panel headboard and clean profile",
        price:31500,
        image:"images/bed39.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    },
    {
        name:"Convertible Bed Frame",
        description:"Versatile bed frame suitable for multiple bedding styles",
        price:33500,
        image:"images/bed40.png",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[0]
    }
];

const bedDisplay=document.querySelector(".bed-Display");

function renderBed(){
    beds.forEach(bed=>{
        const bedContainer = document.createElement("div");
        bedContainer.className = "bedContainer";
        bedContainer.innerHTML = `
        <div class="deskOutline">
        <div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div>
        <h6><span>${bed.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${bed.description}</p>
        <p class="itemCategory"><span>${subCategory[2].items[0]}</span><span><s>Ksh.${parseFloat(((bed.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(bed.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
        </div>
        `;
        bedDisplay.appendChild(bedContainer);

        bedContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${bed.name}</span></h6>
            <p class="popdescription">${bed.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((bed.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(bed.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(bed.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(bed.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(bed.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/
         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${bed.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(bed.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${bed.image}" alt="${bed.name}">
    </div>
    <p>${bed.description}</p>
    <h6 class="grandPrice">Ksh.${bed.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(bed.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((bed.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((bed.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(bed.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(bed.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });


    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = bed.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(bed.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((bed.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((bed.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(bed.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((bed.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((bed.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${bed.image}" alt="${bed.name}">
    </div>
    <p>${bed.description}</p>
    <h6 class="grandPrice">Ksh.${bed.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(bed.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((bed.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((bed.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${bed.image}" alt="${bed.name}">
    </div>
    <p>${bed.description}</p>
    <h6 class="grandPrice">Ksh.${bed.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});


    });

    });
}

//next bed and prev bed

const nextBed =  document.querySelector("#prevbed");
const prevBed =document.querySelector("#nxtbed");
const bedConatiner = document.querySelector(".bed-Display");

nextBed.addEventListener("click",()=>{
    bedConatiner.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});
prevBed.addEventListener("click",()=>{
    bedConatiner.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});


//wall dropes codes
const wallDropes = [
    {
        name:"Botanical Wall Drops",
        description:"Set of green leaf wall drops for a fresh, natural look",
        price:2200,
        image:"images/wd1.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Geometric Wall Drops",
        description:"Modern geometric wall drops in bold black and white",
        price:2600,
        image:"images/wd2.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Macramé Wall Drops",
        description:"Handwoven macramé wall drops for a cozy texture",
        price:3100,
        image:"images/wd3.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Boho Tassel Wall Drops",
        description:"Colorful tassel wall drops for bohemian style",
        price:2400,
        image:"images/wd4.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Wooden Wall Drops",
        description:"Natural wooden wall drops with warm organic tones",
        price:2900,
        image:"images/wd5.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Minimalist Wall Drops",
        description:"Clean white wall drops with minimalist appeal",
        price:2100,
        image:"images/wd6.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Rustic Wall Drops",
        description:"Weathered wood wall drops with rustic charm",
        price:3300,
        image:"images/wd7.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"LED Wall Drops",
        description:"Ambient LED wall drops that light up your room",
        price:4200,
        image:"images/wd8.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Ceramic Wall Drops",
        description:"Hand-painted ceramic wall drops with artistic patterns",
        price:3800,
        image:"images/wd9.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Velvet Wall Drops",
        description:"Soft velvet wall drops for a luxurious finish",
        price:4500,
        image:"images/wd10.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Mirrored Wall Drops",
        description:"Wall drops with mirror accents to brighten your space",
        price:5200,
        image:"images/wd11.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Abstract Wall Drops",
        description:"Bold abstract designs for contemporary interiors",
        price:4700,
        image:"images/wd12.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Vintage Wall Drops",
        description:"Antique-inspired wall drops with a timeless feel",
        price:3900,
        image:"images/wd13.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Copper Wall Drops",
        description:"Warm copper wall drops with industrial style",
        price:5300,
        image:"images/wd14.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Stone Wall Drops",
        description:"Textured stone-look wall drops for depth and character",
        price:4800,
        image:"images/wd15.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Woven Wall Drops",
        description:"Soft woven wall drops with layered textile details",
        price:3400,
        image:"images/wd16.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Floral Wall Drops",
        description:"Delicate floral wall drops to brighten any wall",
        price:2600,
        image:"images/wd17.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Circle Wall Drops",
        description:"Round wall drops in mixed materials for modern spaces",
        price:3100,
        image:"images/wd18.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Bamboo Wall Drops",
        description:"Eco-friendly bamboo wall drops with natural texture",
        price:2700,
        image:"images/wd19.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Color Block Wall Drops",
        description:"Bright color block wall drops for playful decor",
        price:2900,
        image:"images/wd20.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Slate Wall Drops",
        description:"Dark slate-inspired wall drops for a moody accent",
        price:5000,
        image:"images/wd21.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Wrought Iron Wall Drops",
        description:"Ornamental iron wall drops with sculptural detail",
        price:5400,
        image:"images/wd22.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Fabric Wall Drops",
        description:"Soft fabric wall drops that add warmth and softness",
        price:3200,
        image:"images/wd23.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Sculpted Wall Drops",
        description:"3D sculpted wall drops for elegant dimension",
        price:5900,
        image:"images/wd24.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Faux Fur Wall Drops",
        description:"Plush faux fur wall drops for a cozy statement",
        price:4100,
        image:"images/wd25.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Framed Wall Drops",
        description:"Framed wall drops with artful composition",
        price:4700,
        image:"images/wd26.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Marble Wall Drops",
        description:"Chic marble-effect wall drops for modern luxury",
        price:5800,
        image:"images/wd27.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Tassel Wall Drops",
        description:"Decorative tassel wall drops with layered texture",
        price:2500,
        image:"images/wd28.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Feather Wall Drops",
        description:"Delicate feather wall drops for a soft accent",
        price:3300,
        image:"images/wd29.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Polished Wall Drops",
        description:"High-shine polished wall drops for contemporary rooms",
        price:5200,
        image:"images/wd30.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Modern Stripe Wall Drops",
        description:"Sleek striped wall drops for graphic impact",
        price:2800,
        image:"images/wd31.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Natural Fiber Wall Drops",
        description:"Handcrafted wall drops made from natural fibers",
        price:3500,
        image:"images/wd32.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Sunburst Wall Drops",
        description:"Sunburst wall drops for a bold focal point",
        price:5600,
        image:"images/wd33.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Pearl Wall Drops",
        description:"Soft pearl-toned wall drops for subtle elegance",
        price:4600,
        image:"images/wd34.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Wave Wall Drops",
        description:"Curved wave wall drops with fluid organic shapes",
        price:4900,
        image:"images/wd35.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Acrylic Wall Drops",
        description:"Clear acrylic wall drops with a modern floating effect",
        price:6300,
        image:"images/wd36.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Wood Slice Wall Drops",
        description:"Rustic wall drops crafted from natural wood slices",
        price:3600,
        image:"images/wd37.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Stained Glass Wall Drops",
        description:"Colorful stained glass wall drops for artisan style",
        price:6900,
        image:"images/wd38.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Vintage Botanical Wall Drops",
        description:"Antique botanical wall drops with a classic feel",
        price:4300,
        image:"images/wd39.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    },
    {
        name:"Glossy Black Wall Drops",
        description:"Sculptural glossy black wall drops for drama",
        price:5300,
        image:"images/wd40.png",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[2]
    }
];

const wallDropDisplay = document.querySelector(".wallDropDisplay");

function renderWallDrop(){
    wallDropes.forEach(wallDrope=>{
        const walldropeContainer = document.createElement("div");
        walldropeContainer.className="walldropeContainer";
        walldropeContainer.innerHTML = `
        <div class="deskOutline">
        <div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
        <h6><span>${wallDrope.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${wallDrope.description}</p>
        <p class="itemCategory"><span>${subCategory[2].items[2]}</span><span><s>Ksh.${parseFloat(((wallDrope.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(wallDrope.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
        </div>
        `;
        wallDropDisplay.appendChild(walldropeContainer);
       
        walldropeContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${wallDrope.image}" alt="${wallDrope.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${wallDrope.name}</span></h6>
            <p class="popdescription">${wallDrope.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((wallDrope.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(wallDrope.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(wallDrope.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(wallDrope.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(wallDrope.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

        //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${wallDrope.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(wallDrope.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${wallDrope.image}" alt="${wallDrope.name}">
    </div>
    <p>${wallDrope.description}</p>
    <h6 class="grandPrice">Ksh.${wallDrope.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((wallDrope.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((wallDrope.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(wallDrope.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
       // grandPrice.textContent=` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(wallDrope.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = wallDrope.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((wallDrope.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((wallDrope.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((wallDrope.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((wallDrope.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${wallDrope.image}" alt="${wallDrope.name}">
    </div>
    <p>${wallDrope.description}</p>
    <h6 class="grandPrice">Ksh.${wallDrope.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(wallDrope.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((wallDrope.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((wallDrope.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${wallDrope.image}" alt="${wallDrope.name}">
    </div>
    <p>${wallDrope.description}</p>
    <h6 class="grandPrice">Ksh.${wallDrope.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});




});

    });

    });
}

//next walldrope
const nextwall =  document.querySelector("#prevwall");
const prevwall =document.querySelector("#nxtwall");
const wallConatiner = document.querySelector(".wallDropDisplay");

nextwall.addEventListener("click",()=>{
    wallConatiner.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});
 prevwall.addEventListener("click",()=>{
    wallConatiner.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});



//dresser codes

const nightstands = [
  {
    name: "Classic Wood Nightstand",
    description: "Traditional wooden nightstand with single drawer and open shelf",
    price: 12500,
    image: "images/ns1.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Modern Black Nightstand",
    description: "Sleek matte black nightstand with soft-close drawer",
    price: 14200,
    image: "images/ns2.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "White Minimalist Nightstand",
    description: "Clean white nightstand with minimalist design and USB charging port",
    price: 11800,
    image: "images/ns3.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Rustic Oak Nightstand",
    description: "Rustic oak finish nightstand with distressed wood details",
    price: 16500,
    image: "images/ns4.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Glass Top Nightstand",
    description: "Elegant nightstand with tempered glass top and metal frame",
    price: 17800,
    image: "images/ns5.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Floating Wall Nightstand",
    description: "Space-saving wall-mounted nightstand with cable management",
    price: 11200,
    image: "images/ns6.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Industrial Metal Nightstand",
    description: "Industrial style with metal frame and wood drawer",
    price: 13500,
    image: "images/ns7.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Mid-Century Nightstand",
    description: "Retro mid-century design with tapered legs",
    price: 15200,
    image: "images/ns8.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Drawer Nightstand Set",
    description: "Matching pair nightstands with two drawers each",
    price: 19800,
    image: "images/ns9.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Mirrored Nightstand",
    description: "Luxury mirrored nightstand with crystal drawer pulls",
    price: 21500,
    image: "images/ns10.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Reclaimed Wood Nightstand",
    description: "Eco-friendly reclaimed wood with natural grain variations",
    price: 18700,
    image: "images/ns11.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "USB Charging Nightstand",
    description: "Contemporary nightstand with built-in wireless charging",
    price: 16300,
    image: "images/ns12.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "High Gloss Nightstand",
    description: "Modern high gloss finish with LED lighting",
    price: 17600,
    image: "images/ns13.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Traditional Cherry Nightstand",
    description: "Classic cherry wood finish with brass hardware",
    price: 19200,
    image: "images/ns14.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Slim Profile Nightstand",
    description: "Narrow design perfect for small bedrooms",
    price: 10800,
    image: "images/ns15.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Marble Top Nightstand",
    description: "Elegant marble top with matte black metal base",
    price: 20500,
    image: "images/ns16.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Rattan Nightstand",
    description: "Natural rattan weave with tropical wood accents",
    price: 14800,
    image: "images/ns17.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Art Deco Nightstand",
    description: "Geometric art deco design with mirrored accents",
    price: 21900,
    image: "images/ns18.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Farmhouse Nightstand",
    description: "Distressed white finish with x-frame design",
    price: 13200,
    image: "images/ns19.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Contemporary Walnut Nightstand",
    description: "Premium walnut veneer with soft-close mechanisms",
    price: 22100,
    image: "images/ns20.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Open Shelf Nightstand",
    description: "Simple open shelf design for books and decor",
    price: 11500,
    image: "images/ns21.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Two-Tone Nightstand",
    description: "Stylish two-tone finish with contrasting drawer front",
    price: 15900,
    image: "images/ns22.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "LED Nightstand",
    description: "Touch-activated LED lighting with multiple colors",
    price: 18400,
    image: "images/ns23.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Bamboo Nightstand",
    description: "Sustainable bamboo construction with natural finish",
    price: 13800,
    image: "images/ns24.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Antique Brass Nightstand",
    description: "Vintage styling with antique brass drawer pulls",
    price: 20100,
    image: "images/ns25.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Platform Nightstand",
    description: "Low-profile platform design with hidden storage",
    price: 16700,
    image: "images/ns26.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Cheval Nightstand",
    description: "French-inspired cheval design with elegant curves",
    price: 21400,
    image: "images/ns27.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Scandinavian Nightstand",
    description: "Minimalist Scandinavian design with light oak finish",
    price: 14900,
    image: "images/ns28.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Shaker Style Nightstand",
    description: "Classic shaker style with clean lines and quality craftsmanship",
    price: 17200,
    image: "images/ns29.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Trundle Nightstand",
    description: "Nightstand with hidden trundle drawer for extra storage",
    price: 19600,
    image: "images/ns30.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Accent Nightstand",
    description: "Decorative accent nightstand with unique gold leaf finish",
    price: 18200,
    image: "images/ns31.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Narrow Nightstand",
    description: "Ultra-narrow design for tight bedroom spaces",
    price: 10500,
    image: "images/ns32.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Hyde Upholstered Nightstand",
    description: "Tufted upholstered nightstand with nailhead trim",
    price: 20800,
    image: "images/ns33.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Live Edge Nightstand",
    description: "Natural live edge wood slab with epoxy resin accents",
    price: 22300,
    image: "images/ns34.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Campaign Nightstand",
    description: "Military campaign style with brass corner accents",
    price: 19100,
    image: "images/ns35.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Block Nightstand",
    description: "Bold geometric block design in matte charcoal",
    price: 15400,
    image: "images/ns36.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Louis Philippe Nightstand",
    description: "Traditional Louis Philippe styling with sculpted edges",
    price: 17900,
    image: "images/ns37.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "California King Nightstand",
    description: "Tall nightstand designed for California king bed height",
    price: 21600,
    image: "images/ns38.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "MCM Walnut Nightstand",
    description: "Authentic mid-century modern walnut veneer",
    price: 20700,
    image: "images/ns39.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  },
  {
    name: "Contemporary Fluted Nightstand",
    description: "Modern fluted wood design with champagne gold hardware",
    price: 22000,
    image: "images/ns40.png",
    categoryName: categories[2].name,
    subCategoryName: subCategory[2].items[3]
  }
];

const dressers = [
    {
        name:"Classic Dresser",
        description:"Solid wood dresser with six smooth-glide drawers and timeless styling",
        price:21500,
        image:"images/dres1.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Modern White Dresser",
        description:"Minimalist white dresser with clean lines and subtle brushed handles",
        price:24500,
        image:"images/dres2.png",
          categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Rustic Oak Dresser",
        description:"Warm oak dresser with a distressed finish and ample storage space",
        price:26500,
        image:"images/dres3.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Mirrored Dresser",
        description:"Elegant dresser featuring mirrored drawer fronts for a glamorous look",
        price:32500,
        image:"images/dres4.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Mid-Century Dresser",
        description:"Retro-inspired dresser with tapered legs and walnut veneer",
        price:29800,
        image:"images/dres5.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Farmhouse Dresser",
        description:"Rustic farmhouse dresser with beadboard details and spacious drawers",
        price:23900,
        image:"images/dres6.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Industrial Dresser",
        description:"Industrial style dresser with metal accents and reclaimed wood finish",
        price:28500,
        image:"images/dres7.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Upholstered Dresser",
        description:"Soft upholstered dresser with padded drawer fronts for a cozy bedroom feel",
        price:34500,
        image:"images/dres8.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Floating Dresser",
        description:"Wall-mounted floating dresser that saves floor space and adds modern flair",
        price:31200,
        image:"images/dres9.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Large Storage Dresser",
        description:"Extra-wide dresser with nine drawers for maximum organization",
        price:39500,
        image:"images/dres10.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Narrow Dresser",
        description:"Slim dresser ideal for tight spaces while offering useful storage",
        price:18500,
        image:"images/dres11.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Coastal Dresser",
        description:"Light blue coastal dresser with relaxed, breezy details",
        price:27200,
        image:"images/dres12.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Black Accent Dresser",
        description:"Bold black dresser with contrasting brass hardware",
        price:31900,
        image:"images/dres13.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Two-Tone Dresser",
        description:"Contemporary two-tone dresser combining wood and white finishes",
        price:28900,
        image:"images/dres14.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Scandinavian Dresser",
        description:"Light wood dresser with simple Scandinavian styling and soft edges",
        price:25500,
        image:"images/dres15.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Vintage Dresser",
        description:"Antique-style dresser with decorative moldings and aged finish",
        price:33500,
        image:"images/dres16.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Wooden Dresser",
        description:"Natural wood dresser with classic craftsmanship and generous drawer depth",
        price:27800,
        image:"images/dres17.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Contemporary Dresser",
        description:"Streamlined dresser with flat drawer fronts and matte finish",
        price:26200,
        image:"images/dres18.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Metal Frame Dresser",
        description:"Modern dresser with exposed metal frame and wood drawers",
        price:29400,
        image:"images/dres19.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Elegant Bedroom Dresser",
        description:"Chic dresser with jewelry organizer drawer and soft-close slides",
        price:36800,
        image:"images/dres20.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Cabinet Dresser",
        description:"Multi-purpose dresser with a combination of drawers and cabinet storage",
        price:33900,
        image:"images/dres21.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"High-Gloss Dresser",
        description:"Sleek high-gloss dresser with polished finish for contemporary rooms",
        price:37500,
        image:"images/dres22.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Wood and Leather Dresser",
        description:"Stylish dresser with wood drawers and leather-wrapped handles",
        price:40100,
        image:"images/dres23.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Minimalist Dresser",
        description:"Simple minimalist dresser with clean silhouette and hidden pulls",
        price:24900,
        image:"images/dres24.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Luxury Dresser",
        description:"High-end luxury dresser with premium materials and sophisticated details",
        price:49500,
        image:"images/dres25.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Compact Dresser",
        description:"Smaller dresser perfect for apartments and guest rooms",
        price:19800,
        image:"images/dres26.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Drawer Dresser",
        description:"Functional dresser with deep drawers and solid wood construction",
        price:27800,
        image:"images/dres27.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Panel Front Dresser",
        description:"Dresser with decorative panel fronts and classic appeal",
        price:30800,
        image:"images/dres28.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Vintage White Dresser",
        description:"White distressed dresser with traditional charm",
        price:28200,
        image:"images/dres29.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Chevron Dresser",
        description:"Accent dresser with patterned drawer fronts for visual interest",
        price:35500,
        image:"images/dres30.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Dresser with Mirror",
        description:"Dresser set with matching mirror for a complete bedroom look",
        price:42900,
        image:"images/dres31.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Soft Close Dresser",
        description:"Quiet soft-close drawers for smooth everyday use",
        price:31200,
        image:"images/dres32.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Oak Veneer Dresser",
        description:"Elegant oak veneer dresser with warm natural grain",
        price:29900,
        image:"images/dres33.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Two-Drawer Dresser",
        description:"Compact two-drawer dresser ideal for bedside storage",
        price:17500,
        image:"images/dres34.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Textured Dresser",
        description:"Dresser with textured drawer fronts for a tactile finish",
        price:33900,
        image:"images/dres35.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Panel Dresser",
        description:"Modern dresser with recessed panel drawer fronts",
        price:28700,
        image:"images/dres36.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Walnut Dresser",
        description:"Rich walnut dresser with elegant curved edges",
        price:36200,
        image:"images/dres37.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Soft Grey Dresser",
        description:"Neutral grey dresser with versatile style for any room",
        price:26900,
        image:"images/dres38.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Tapered Leg Dresser",
        description:"Dresser with tapered legs for a light mid-century silhouette",
        price:29800,
        image:"images/dres39.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    },
    {
        name:"Artisan Dresser",
        description:"Handcrafted dresser with artisanal details and premium finishes",
        price:43800,
        image:"images/dres40.png",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[1]
    }
];
const dresserDisplay = document.querySelector(".DressersDisplay");

function renderDressers(){
   dressers.forEach(dresser=>{
     const dresserContainer = document.createElement("div");
    dresserContainer.className = " dresserContainer";
    dresserContainer.innerHTML=`
    <div class="deskOutline">
        <div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
        <h6><span>${dresser.name}</span> <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${dresser.description}</p>
        <p class="itemCategory"><span>${subCategory[2].items[1]}</span><span><s>Ksh.${parseFloat(((dresser.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(dresser.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
        </div>
    `;
    dresserDisplay.appendChild(dresserContainer);
    
      
        dresserContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${dresser.image}" alt="${dresser.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${dresser.image}" alt="${dresser.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${dresser.name}</span></h6>
            <p class="popdescription">${dresser.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((dresser.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(dresser.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(dresser.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            CartNumberItems.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(dresser.price * counter).toFixed(2)}`;
            CartbtnContainer.textContent = `${(dresser.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(dresser.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(dresser.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${dresser.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(dresser.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(dresser.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(dresser.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(dresser.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(dresser.price * counter).toFixed(2)}`;
       // cartCounter.textContent=counter;
    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${dresser.image}" alt="${dresser.name}">
    </div>
    <p>${dresser.description}</p>
    <h6 class="grandPrice">Ksh.${dresser.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(dresser.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(dresser.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(dresser.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((dresser.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((dresser.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(dresser.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(dresser.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(dresser.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(dresser.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(dresser.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(dresser.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(dresser.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(dresser.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(dresser.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(dresser.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = dresser.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(dresser.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((dresser.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((dresser.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(dresser.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((dresser.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((dresser.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${dresser.image}" alt="${dresser.name}">
    </div>
    <p>${dresser.description}</p>
    <h6 class="grandPrice">Ksh.${dresser.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(dresser.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((dresser.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((dresser.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${dresser.image}" alt="${dresser.name}">
    </div>
    <p>${dresser.description}</p>
    <h6 class="grandPrice">Ksh.${dresser.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });
    
        

   });
}

//next walldrope
const nextDresser =  document.querySelector("#prevDressers");
const prevDresser =document.querySelector("#nxtDressers");
const dresserConatiner = document.querySelector(".DressersDisplay");

nextDresser.addEventListener("click",()=>{
    dresserConatiner.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});
prevDresser.addEventListener("click",()=>{
    dresserConatiner.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});

//Nightstands

const Nightstands = [
    {
        name:"Modern Nightstand",
        description:"Sleek modern nightstand with drawer storage",
        price:12500,
        image:"https://source.unsplash.com/800x600/?nightstand,modern,bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Classic Wooden Nightstand",
        description:"Traditional wooden bedside table with elegant design",
        price:14800,
        image:"https://source.unsplash.com/800x600/?wooden,nightstand,bedside",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Minimalist Nightstand",
        description:"Compact and clean design for modern bedrooms",
        price:9800,
        image:"https://source.unsplash.com/800x600/?minimalist,nightstand,table",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Luxury Nightstand",
        description:"Premium finish with gold accents",
        price:21500,
        image:"https://source.unsplash.com/800x600/?luxury,nightstand,bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Rustic Nightstand",
        description:"Natural wood texture with rustic appeal",
        price:13200,
        image:"https://source.unsplash.com/800x600/?rustic,wood,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },

    {
        name:"Glass Top Nightstand",
        description:"Stylish nightstand with tempered glass top",
        price:16700,
        image:"https://source.unsplash.com/800x600/?glass,nightstand,modern",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Industrial Nightstand",
        description:"Metal and wood combination for industrial style",
        price:15400,
        image:"https://source.unsplash.com/800x600/?industrial,nightstand,metal,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Floating Nightstand",
        description:"Wall-mounted nightstand saving floor space",
        price:11200,
        image:"https://source.unsplash.com/800x600/?floating,nightstand,wall",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Scandinavian Nightstand",
        description:"Simple and functional Nordic design",
        price:13900,
        image:"https://source.unsplash.com/800x600/?scandinavian,nightstand,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Vintage Nightstand",
        description:"Old-school charm with antique look",
        price:17600,
        image:"https://source.unsplash.com/800x600/?vintage,nightstand,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },

    {
        name:"Compact Drawer Nightstand",
        description:"Small size with single drawer storage",
        price:8900,
        image:"https://source.unsplash.com/800x600/?small,drawer,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Double Drawer Nightstand",
        description:"Two spacious drawers for extra storage",
        price:15800,
        image:"https://source.unsplash.com/800x600/?double,drawer,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"LED Nightstand",
        description:"Nightstand with built-in LED lighting",
        price:22400,
        image:"https://source.unsplash.com/800x600/?led,nightstand,light",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Smart Nightstand",
        description:"Includes charging ports and smart features",
        price:26500,
        image:"https://source.unsplash.com/800x600/?smart,nightstand,charging",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Open Shelf Nightstand",
        description:"Simple design with open shelf storage",
        price:9400,
        image:"https://source.unsplash.com/800x600/?open,shelf,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },

    {
        name:"Marble Top Nightstand",
        description:"Elegant marble top with sturdy base",
        price:23800,
        image:"https://source.unsplash.com/800x600/?marble,nightstand,luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Oak Wood Nightstand",
        description:"Durable oak wood with natural finish",
        price:18200,
        image:"https://source.unsplash.com/800x600/?oak,wood,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Pine Nightstand",
        description:"Lightweight pine wood bedside table",
        price:12100,
        image:"https://source.unsplash.com/800x600/?pine,wood,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Glossy Finish Nightstand",
        description:"High-gloss finish for modern interiors",
        price:19900,
        image:"https://source.unsplash.com/800x600/?glossy,nightstand,modern",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Matte Finish Nightstand",
        description:"Smooth matte finish with subtle look",
        price:14300,
        image:"https://source.unsplash.com/800x600/?matte,nightstand,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },

    {
        name:"Curved Edge Nightstand",
        description:"Rounded edges for a soft modern feel",
        price:15100,
        image:"https://source.unsplash.com/800x600/?curved,nightstand,table",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Square Frame Nightstand",
        description:"Boxy design with strong frame",
        price:13600,
        image:"https://source.unsplash.com/800x600/?square,nightstand,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Tall Nightstand",
        description:"Higher height for raised beds",
        price:16200,
        image:"https://source.unsplash.com/800x600/?tall,nightstand,bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Low Profile Nightstand",
        description:"Short design ideal for low beds",
        price:10900,
        image:"https://source.unsplash.com/800x600/?low,nightstand,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Metal Frame Nightstand",
        description:"Strong metal frame with wooden top",
        price:14700,
        image:"https://source.unsplash.com/800x600/?metal,frame,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },

    {
        name:"Soft Close Drawer Nightstand",
        description:"Drawers with smooth soft-close mechanism",
        price:18900,
        image:"https://source.unsplash.com/800x600/?soft-close,drawer,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Hidden Storage Nightstand",
        description:"Secret compartment for valuables",
        price:20700,
        image:"https://source.unsplash.com/800x600/?hidden,storage,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Bookshelf Nightstand",
        description:"Includes side shelves for books",
        price:13400,
        image:"https://source.unsplash.com/800x600/?bookshelf,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Drawer & Shelf Nightstand",
        description:"Combination of drawer and open shelf",
        price:15500,
        image:"https://source.unsplash.com/800x600/?drawer,shelf,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Corner Nightstand",
        description:"Designed to fit into room corners",
        price:11800,
        image:"https://source.unsplash.com/800x600/?corner,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },

    {
        name:"Eco-Friendly Nightstand",
        description:"Made from sustainable materials",
        price:17300,
        image:"https://source.unsplash.com/800x600/?eco,wood,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Bamboo Nightstand",
        description:"Lightweight and eco bamboo design",
        price:12900,
        image:"https://source.unsplash.com/800x600/?bamboo,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Designer Nightstand",
        description:"Unique artistic design piece",
        price:25900,
        image:"https://source.unsplash.com/800x600/?designer,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Luxury Velvet Nightstand",
        description:"Soft velvet finish with premium feel",
        price:27500,
        image:"https://source.unsplash.com/800x600/?velvet,nightstand,luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Glass Drawer Nightstand",
        description:"Transparent drawer fronts for modern look",
        price:19800,
        image:"https://source.unsplash.com/800x600/?glass,drawer,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },

    {
        name:"Compact Metal Nightstand",
        description:"Slim metal structure for tight spaces",
        price:9700,
        image:"https://source.unsplash.com/800x600/?metal,nightstand,compact",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Wide Surface Nightstand",
        description:"Extra top space for decor and lamps",
        price:16800,
        image:"https://source.unsplash.com/800x600/?wide,nightstand,table",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Premium Walnut Nightstand",
        description:"Rich walnut wood with premium finish",
        price:24100,
        image:"https://source.unsplash.com/800x600/?walnut,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Simple Cube Nightstand",
        description:"Basic cube design for modern homes",
        price:8800,
        image:"https://source.unsplash.com/800x600/?cube,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    },
    {
        name:"Artisan Nightstand",
        description:"Handcrafted bedside table with unique details",
        price:22300,
        image:"https://source.unsplash.com/800x600/?artisan,wood,nightstand",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[3]
    }
];

const nighStandDisplay = document.querySelector(".nightStand-Display");

function rendernightstand() {
    nighStandDisplay.innerHTML = ""; // prevent duplicates

    Nightstands.forEach((Nightstand) => {

        const nightstandContainer = document.createElement("div");
        nightstandContainer.className = "dresserContainer";

        nightstandContainer.innerHTML = `
        <div class="deskOutline">
            <div class="deskImage">
                <img src="${Nightstand.image}" alt="${Nightstand.name}">
            </div>

            <h6>
                <span>${Nightstand.name}</span>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </h6>

            <p class="description">${Nightstand.description}</p>

            <p class="itemCategory">
                <span>${Nightstand.subCategoryName}</span>
                <span><s>Ksh.${(Nightstand.price * discount).toFixed(2)}</s></span>
            </p>

            <div class="price-cartBtn">
                <div class="price">
                    <span>Ksh.${Nightstand.price.toFixed(2)}</span>
                </div>

                <button class="addBtn">
                    <i class="fa-solid fa-shopping-cart"></i>
                    <span>add</span>
                </button>
            </div>
        </div>
        `;

        nighStandDisplay.appendChild(nightstandContainer);

        // ================= POPUP =================
        nightstandContainer.addEventListener("click", () => {

            searchPopup.classList.add("active");

            searchinput.innerHTML = `
            <div class="popOutline">
                <div class="popItem">

                    <button class="closePopUp">&times;</button>

                    <section class="imageScetion">
                        <div class="popImage">
                            <img src="${Nightstand.image}" alt="${Nightstand.name}">
                        </div>
                    </section>

                    <div class="productDetail">
                        <h6>${Nightstand.name}</h6>
                        <p>${Nightstand.description}</p>

                        <p>Category: ${Nightstand.name}</p>

                        <div class="popPrice">
                            Ksh.${Nightstand.price.toFixed(2)}
                        </div>

                        <div class="increase-decrease">
                            <button class="decreasebtn">-</button>
                            <span class="Quantitycounter">1</span>
                            <button class="increasebtn">+</button>
                        </div>

                        <div class="increasePrice">
                            Ksh.${Nightstand.price.toFixed(2)}
                        </div>

                        <button class="addToCartbtn">
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
            `;

            const pop = document.querySelector(".popItem");

            // CLOSE POPUP
            /*pop.querySelector(".closePopUp").addEventListener("click", () => {
                popupContainer.classList.remove("active");
            });*/

            // ================= QUANTITY =================
            let counter = 1;

            const qty = pop.querySelector(".Quantitycounter");
            const priceDisplay = pop.querySelector(".increasePrice");

            pop.querySelector(".increasebtn").addEventListener("click", () => {
                counter++;
                qty.textContent = counter;
                priceDisplay.textContent = `Ksh.${(Nightstand.price * counter).toFixed(2)}`;
            });

            pop.querySelector(".decreasebtn").addEventListener("click", () => {
                if (counter > 1) {
                    counter--;
                    qty.textContent = counter;
                    priceDisplay.textContent = `Ksh.${(Nightstand.price * counter).toFixed(2)}`;
                }
            });

            // ================= ADD TO CART =================
            pop.querySelector(".addToCartbtn").addEventListener("click", () => {

                const cartCard = document.createElement("div");
                cartCard.className = "cartCard";

                cartCard.innerHTML = `
                <div class="cartOutline">
                    <img src="${Nightstand.image}">
                    <p>${Nightstand.name}</p>
                    <h6>Ksh.${(Nightstand.price * counter).toFixed(2)}</h6>
                    <span>Qty: ${counter}</span>
                </div>
                `;

                cartproductContainer.appendChild(cartCard);

                msg.innerHTML = `Added ${counter} ${Nightstand.name}`;
                msg.classList.add("active");

                setTimeout(() => msg.classList.remove("active"), 3000);

                popupContainer.classList.remove("active");
            });

        });
    });
}

// CALL FUNCTION
rendernightstand();
//next walldrope
const nextnightStand =  document.querySelector("#prevnightstand");
const prevnightStand =document.querySelector("#nxtstand");
const nightstandConatiner = document.querySelector(".nightStand-Display");

nextnightStand.addEventListener("click",()=>{
    nightstandConatiner.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});
prevnightStand.addEventListener("click",()=>{
    nightstandConatiner.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});

const vanities = [
    {
        name:"Wide Surface Vanity",
        description:"Extra top space for makeup and decor",
        price:16800,
        image:"https://source.unsplash.com/800x600/?vanity,table,makeup",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Modern Glossy Vanity",
        description:"Sleek glossy finish with clean lines",
        price:22400,
        image:"https://source.unsplash.com/800x600/?modern,vanity,mirror",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Classic Wooden Vanity",
        description:"Traditional wooden build with rich texture",
        price:19800,
        image:"https://source.unsplash.com/800x600/?wooden,vanity,table",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Compact Bedroom Vanity",
        description:"Space-saving design for small rooms",
        price:14200,
        image:"https://source.unsplash.com/800x600/?small,vanity,desk",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Luxury Marble Vanity",
        description:"Premium marble top with elegant finish",
        price:35600,
        image:"https://source.unsplash.com/800x600/?marble,vanity,luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"LED Mirror Vanity",
        description:"Built-in LED mirror for better lighting",
        price:27800,
        image:"https://source.unsplash.com/800x600/?led,mirror,vanity",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Minimalist Vanity Desk",
        description:"Simple and clean minimalist design",
        price:16000,
        image:"https://source.unsplash.com/800x600/?minimalist,vanity,desk",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Glass Top Vanity",
        description:"Tempered glass surface with modern appeal",
        price:24500,
        image:"https://source.unsplash.com/800x600/?glass,vanity,table",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Double Drawer Vanity",
        description:"Extra storage with dual drawers",
        price:21000,
        image:"https://source.unsplash.com/800x600/?drawer,vanity,table",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Elegant White Vanity",
        description:"Bright white finish for a clean look",
        price:18900,
        image:"https://source.unsplash.com/800x600/?white,vanity,room",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },

    {
        name:"Rustic Oak Vanity",
        description:"Natural oak wood with rustic charm",
        price:23200,
        image:"https://source.unsplash.com/800x600/?rustic,oak,vanity",
      categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Corner Vanity Unit",
        description:"Perfectly fits into room corners",
        price:17500,
        image:"https://source.unsplash.com/800x600/?corner,vanity,desk",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Foldable Vanity Desk",
        description:"Foldable design for flexibility",
        price:15800,
        image:"https://source.unsplash.com/800x600/?folding,desk,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Luxury Gold Accent Vanity",
        description:"Gold trims for a premium feel",
        price:36500,
        image:"https://source.unsplash.com/800x600/?gold,luxury,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Matte Black Vanity",
        description:"Bold matte black modern design",
        price:24800,
        image:"https://source.unsplash.com/800x600/?black,vanity,modern",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },

    {
        name:"Scandinavian Vanity",
        description:"Light wood tones with simple elegance",
        price:20500,
        image:"https://source.unsplash.com/800x600/?scandinavian,vanity,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Vintage Style Vanity",
        description:"Classic vintage look with carved legs",
        price:29000,
        image:"https://source.unsplash.com/800x600/?vintage,vanity,mirror",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Floating Wall Vanity",
        description:"Wall-mounted design saves floor space",
        price:21500,
        image:"https://source.unsplash.com/800x600/?floating,vanity,wall",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Mirror Cabinet Vanity",
        description:"Mirror with hidden storage compartments",
        price:27000,
        image:"https://source.unsplash.com/800x600/?mirror,storage,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Compact Drawer Vanity",
        description:"Multiple small drawers for organization",
        price:18500,
        image:"https://source.unsplash.com/800x600/?compact,vanity,drawer",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },

    {
        name:"Premium Walnut Vanity",
        description:"Rich walnut finish with durability",
        price:31000,
        image:"https://source.unsplash.com/800x600/?walnut,vanity,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Industrial Style Vanity",
        description:"Metal and wood combination design",
        price:26000,
        image:"https://source.unsplash.com/800x600/?industrial,vanity,metal",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Compact Mirror Vanity",
        description:"Small vanity with attached mirror",
        price:15000,
        image:"https://source.unsplash.com/800x600/?small,mirror,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Soft Close Drawer Vanity",
        description:"Silent soft-close drawer mechanism",
        price:24000,
        image:"https://source.unsplash.com/800x600/?soft,close,drawer,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Luxury Upholstered Vanity",
        description:"Includes padded seating and elegant finish",
        price:33500,
        image:"https://source.unsplash.com/800x600/?luxury,vanity,chair",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },

    {
        name:"High Gloss White Vanity",
        description:"Reflective high-gloss modern surface",
        price:25500,
        image:"https://source.unsplash.com/800x600/?white,gloss,vanity",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Smart Storage Vanity",
        description:"Designed for maximum storage efficiency",
        price:27500,
        image:"https://source.unsplash.com/800x600/?storage,vanity,desk",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Slim Profile Vanity",
        description:"Thin design ideal for narrow spaces",
        price:16500,
        image:"https://source.unsplash.com/800x600/?slim,vanity,table",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Classic White Drawer Vanity",
        description:"Timeless style with multiple drawers",
        price:22000,
        image:"https://source.unsplash.com/800x600/?white,drawer,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Premium LED Luxury Vanity",
        description:"High-end vanity with ambient LED lighting",
        price:39000,
        image:"https://source.unsplash.com/800x600/?led,luxury,vanity",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },

    {
        name:"Modern Compact Vanity",
        description:"Perfect for tight spaces with style",
        price:17200,
        image:"https://source.unsplash.com/800x600/?compact,modern,vanity",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Oak Finish Vanity Desk",
        description:"Smooth oak finish with durability",
        price:22800,
        image:"https://source.unsplash.com/800x600/?oak,vanity,desk",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Elegant Mirror Vanity",
        description:"Large mirror for a full view",
        price:26500,
        image:"https://source.unsplash.com/800x600/?elegant,mirror,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Drawer Rich Vanity",
        description:"Multiple drawers for maximum storage",
        price:29500,
        image:"https://source.unsplash.com/800x600/?drawer,storage,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Luxury Black Gloss Vanity",
        description:"Premium black gloss elegant design",
        price:34500,
        image:"https://source.unsplash.com/800x600/?black,gloss,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },

    {
        name:"Small Space Vanity",
        description:"Designed for compact apartments",
        price:14000,
        image:"https://source.unsplash.com/800x600/?small,space,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Premium Storage Vanity",
        description:"Extra compartments for organization",
        price:30500,
        image:"https://source.unsplash.com/800x600/?storage,modern,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Luxury LED Mirror Vanity",
        description:"Bright LED lighting for perfect makeup",
        price:37500,
        image:"https://source.unsplash.com/800x600/?led,mirror,vanity,luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Modern Wooden Vanity",
        description:"Contemporary wooden structure",
        price:21500,
        image:"https://source.unsplash.com/800x600/?modern,wood,vanity",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    },
    {
        name:"Premium White Gloss Vanity",
        description:"Elegant white gloss luxury design",
        price:33000,
        image:"https://source.unsplash.com/800x600/?white,luxury,vanity",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[4]
    }
];

const vanityDisplay = document.querySelector("#VanitiesDisplay");

function renderVanities(){
   vanities.forEach(vanity => {

    const vanityContainer = document.createElement("div");
    vanityContainer.className = "vanityContainer";

    vanityContainer.innerHTML = `
    <div class="deskOutline">
        <div class="deskImage">
            <img src="${vanity.image}" alt="${vanity.name}">
        </div>

        <h6>
            <span>${vanity.name}</span> 
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
        </h6>

        <p class="description">${vanity.description}</p>

        <p class="itemCategory">
            <span>${subCategory[2].items[2]}</span>
            <span>
                <s>Ksh.${parseFloat(vanity.price * discount).toFixed(2)}</s>
            </span>
        </p>

        <div class="price-cartBtn">
            <div class="price">
                <span>Ksh.${vanity.price.toFixed(2)}</span>
            </div>
            <button>
                <i class="fa-solid fa-shopping-cart"></i>
                <span>add</span>
            </button>
        </div>
    </div>
    `;

    vanityDisplay.appendChild(vanityContainer);

    // POPUP
    
        vanityContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${vanity.image}" alt="${vanity.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${vanity.image}" alt="${vanity.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${vanity.image}" alt="${vanity.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${vanity.image}" alt="${vanity.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${vanity.image}" alt="${vanity.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${vanity.image}" alt="${vanity.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${vanity.image}" alt="${vanity.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${vanity.image}" alt="${vanity.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${vanity.image}" alt="${vanity.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${vanity.image}" alt="${vanity.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${vanity.image}" alt="${vanity.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${vanity.image}" alt="${vanity.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${vanity.image}" alt="${vanity.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${vanity.image}" alt="${vanity.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${vanity.name}</span></h6>
            <p class="popdescription">${vanity.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((vanity.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(vanity.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(vanity.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            CartNumberItems.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(vanity.price * counter).toFixed(2)}`;
            CartbtnContainer.textContent = `${(vanity.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(vanity.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(vanity.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${vanity.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(vanity.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(vanity.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(vanity.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(vanity.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(vanity.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;
    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${vanity.image}" alt="${vanity.name}">
    </div>
    <p>${vanity.description}</p>
    <h6 class="grandPrice">Ksh.${vanity.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(vanity.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(vanity.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(vanity.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((vanity.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((vanity.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(vanity.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(vanity.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(vanity.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(vanity.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(vanity.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(vanity.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(vanity.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(vanity.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(vanity.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(vanity.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = vanity.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(vanity.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((vanity.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((vanity.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(vanity.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((vanity.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((vanity.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${vanity.image}" alt="${vanity.name}">
    </div>
    <p>${vanity.description}</p>
    <h6 class="grandPrice">Ksh.${vanity.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(vanity.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((vanity.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((vanity.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${vanity.image}" alt="${vanity.name}">
    </div>
    <p>${vanity.description}</p>
    <h6 class="grandPrice">Ksh.${vanity.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });
    
        

   });
}
renderVanities();

// next vanities scroll
const nextVanity = document.querySelector("#prevVanities");
const prevVanity = document.querySelector("#nxtVanities");
const vanityContainer = document.querySelector("#VanitiesDisplay");

nextVanity.addEventListener("click", () => {
    vanityContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

prevVanity.addEventListener("click", () => {
    vanityContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

const headboards = [
    {
        name:"Classic Wooden Headboard",
        description:"Solid wood design with timeless appeal",
        price:18500,
        image:"https://source.unsplash.com/800x600/?wooden-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Modern Upholstered Headboard",
        description:"Soft fabric finish for comfort and style",
        price:22000,
        image:"https://source.unsplash.com/800x600/?upholstered-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Tufted Luxury Headboard",
        description:"Button-tufted design for a premium look",
        price:27500,
        image:"https://source.unsplash.com/800x600/?tufted-headboard,luxury-bed",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Minimalist Panel Headboard",
        description:"Simple and clean modern panel design",
        price:16000,
        image:"https://source.unsplash.com/800x600/?minimalist-bedroom,headboard",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"LED Backlit Headboard",
        description:"Integrated LED lighting for ambiance",
        price:32000,
        image:"https://source.unsplash.com/800x600/?led-bed,modern-bedroom",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Rustic Oak Headboard",
        description:"Natural oak finish with rustic texture",
        price:21000,
        image:"https://source.unsplash.com/800x600/?rustic-wood,bed-headboard",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Compact Single Headboard",
        description:"Designed for small beds and tight spaces",
        price:13500,
        image:"https://source.unsplash.com/800x600/?small-bedroom,headboard",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"King Size Plush Headboard",
        description:"Extra wide with plush padding",
        price:35000,
        image:"https://source.unsplash.com/800x600/?king-bed,plush-headboard",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Floating Wall Headboard",
        description:"Wall-mounted design saves space",
        price:19500,
        image:"https://source.unsplash.com/800x600/?floating-bed,modern-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Leather Finish Headboard",
        description:"Premium leather surface for elegance",
        price:30000,
        image:"https://source.unsplash.com/800x600/?leather-bed,headboard",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },

    {
        name:"Scandinavian Style Headboard",
        description:"Light wood tones with simple design",
        price:20500,
        image:"https://source.unsplash.com/800x600/?scandinavian-bedroom,wood-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Curved Edge Headboard",
        description:"Smooth curved edges for modern feel",
        price:23000,
        image:"https://source.unsplash.com/800x600/?curved-headboard,bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Vintage Carved Headboard",
        description:"Detailed carvings for classic look",
        price:28000,
        image:"https://source.unsplash.com/800x600/?vintage-wood,carved-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Matte Black Headboard",
        description:"Bold matte finish contemporary style",
        price:24000,
        image:"https://source.unsplash.com/800x600/?black-bedroom,modern-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Soft Fabric Panel Headboard",
        description:"Comfortable padded fabric panels",
        price:21500,
        image:"https://source.unsplash.com/800x600/?fabric-headboard,bedroom",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },

    {
        name:"Luxury Velvet Headboard",
        description:"Velvet finish for a luxurious touch",
        price:34000,
        image:"https://source.unsplash.com/800x600/?velvet-bed,luxury-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Storage Headboard",
        description:"Built-in shelves for convenience",
        price:29500,
        image:"https://source.unsplash.com/800x600/?storage-bed,headboard-shelves",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"High Back Headboard",
        description:"Tall design for a bold bedroom look",
        price:31000,
        image:"https://source.unsplash.com/800x600/?high-headboard,luxury-bedroom",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Metal Frame Headboard",
        description:"Durable metal frame with modern design",
        price:18000,
        image:"https://source.unsplash.com/800x600/?metal-bed-frame,industrial-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Simple White Headboard",
        description:"Clean white finish for bright rooms",
        price:17500,
        image:"https://source.unsplash.com/800x600/?white-bedroom,minimal-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },

    {
        name:"Premium Walnut Headboard",
        description:"Rich walnut wood for durability",
        price:32500,
        image:"https://source.unsplash.com/800x600/?walnut-wood,bed-headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Geometric Design Headboard",
        description:"Modern geometric pattern design",
        price:26000,
        image:"https://source.unsplash.com/800x600/?geometric-design,bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Luxury Gold Accent Headboard",
        description:"Gold trims for premium aesthetics",
        price:36000,
        image:"https://source.unsplash.com/800x600/?gold-luxury-bedroom,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Compact Double Headboard",
        description:"Perfect fit for double beds",
        price:19000,
        image:"https://source.unsplash.com/800x600/?double-bed,small-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Mirror Panel Headboard",
        description:"Reflective panels for elegant rooms",
        price:30500,
        image:"https://source.unsplash.com/800x600/?mirror-bedroom,luxury-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },

    {
        name:"Soft Cushion Headboard",
        description:"Extra padding for maximum comfort",
        price:22500,
        image:"https://source.unsplash.com/800x600/?cushion-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"High Gloss White Headboard",
        description:"Shiny modern white finish",
        price:24500,
        image:"https://source.unsplash.com/800x600/?high-gloss,white-bed",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Industrial Style Headboard",
        description:"Metal and wood combination",
        price:25500,
        image:"https://source.unsplash.com/800x600/?industrial-bedroom,wood-metal-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Slim Profile Headboard",
        description:"Thin design for small bedrooms",
        price:16500,
        image:"https://source.unsplash.com/800x600/?slim-bed,minimal-bedroom",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Luxury LED Strip Headboard",
        description:"Ambient lighting with LED strips",
        price:37500,
        image:"https://source.unsplash.com/800x600/?led-light-bedroom,modern-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },

    {
        name:"Modern Panel Headboard",
        description:"Clean panel design for modern homes",
        price:21000,
        image:"https://source.unsplash.com/800x600/?modern-panel-bed,bedroom",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Oak Frame Headboard",
        description:"Durable oak wood construction",
        price:23500,
        image:"https://source.unsplash.com/800x600/?oak-wood-bed,headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Luxury Fabric Headboard",
        description:"Soft premium fabric finish",
        price:28000,
        image:"https://source.unsplash.com/800x600/?luxury-fabric-bed,headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Minimal Black Headboard",
        description:"Simple black finish for modern rooms",
        price:19500,
        image:"https://source.unsplash.com/800x600/?minimal-black-bedroom,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Premium Storage Headboard",
        description:"Extra storage shelves included",
        price:33000,
        image:"https://source.unsplash.com/800x600/?storage-headboard,bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },

    {
        name:"Compact Upholstered Headboard",
        description:"Small and comfortable design",
        price:17000,
        image:"https://source.unsplash.com/800x600/?compact-bed,upholstered-headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Elegant White Panel Headboard",
        description:"Stylish white panel finish",
        price:24000,
        image:"https://source.unsplash.com/800x600/?white-panel-bed,bedroom",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Luxury Curved Headboard",
        description:"Smooth curves for elegance",
        price:31000,
        image:"https://source.unsplash.com/800x600/?curved-luxury-bed,headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Modern Wood Panel Headboard",
        description:"Natural wood panel design",
        price:26000,
        image:"https://source.unsplash.com/800x600/?wood-panel-bed,modern-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    },
    {
        name:"Premium King Headboard",
        description:"Large premium headboard for king beds",
        price:39000,
        image:"https://source.unsplash.com/800x600/?king-bed,luxury-headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[5]
    }
];

const headboardDisplay = document.querySelector("#HeadboardsDisplay");

function renderHeadboards(){
   headboards.forEach(headboard => {

    const headboardContainer = document.createElement("div");
    headboardContainer.className = "headboardContainer";

    headboardContainer.innerHTML = `
    <div class="deskOutline">
        <div class="deskImage">
            <img src="${headboard.image}" alt="${headboard.name}">
        </div>

        <h6>
            <span>${headboard.name}</span> 
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
        </h6>

        <p class="description">${headboard.description}</p>

        <p class="itemCategory">
            <span>${headboard.subCategoryName}</span>
            <span>
                <s>Ksh.${parseFloat(headboard.price * discount).toFixed(2)}</s>
            </span>
        </p>

        <div class="price-cartBtn">
            <div class="price">
                <span>Ksh.${headboard.price.toFixed(2)}</span>
            </div>
            <button>
                <i class="fa-solid fa-shopping-cart"></i>
                <span>add</span>
            </button>
        </div>
    </div>
    `;

    headboardDisplay.appendChild(headboardContainer);
    headboardContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${headboard.image}" alt="${headboard.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${headboard.image}" alt="${headboard.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${headboard.image}" alt="${headboard.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${headboard.image}" alt="${headboard.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${headboard.image}" alt="${headboard.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${headboard.image}" alt="${headboard.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${headboard.image}" alt="${headboard.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${headboard.image}" alt="${headboard.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${headboard.image}" alt="${headboard.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${headboard.image}" alt="${headboard.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${headboard.image}" alt="${headboard.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${headboard.image}" alt="${headboard.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${headboard.image}" alt="${headboard.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${headboard.image}" alt="${headboard.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${headboard.name}</span></h6>
            <p class="popdescription">${headboard.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((headboard.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(headboard.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(headboard.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            CartNumberItems.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(headboard.price * counter).toFixed(2)}`;
            CartbtnContainer.textContent = `${(headboard.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(headboard.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(headboard.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${headboard.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(headboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(headboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(headboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(headboard.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(headboard.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;
    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${headboard.image}" alt="${headboard.name}">
    </div>
    <p>${headboard.description}</p>
    <h6 class="grandPrice">Ksh.${headboard.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(headboard.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(headboard.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(headboard.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((headboard.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((headboard.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(headboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(headboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(headboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(headboard.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(headboard.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(headboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(headboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(headboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(headboard.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(headboard.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = headboard.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(headboard.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((headboard.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((headboard.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(headboard.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((headboard.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((headboard.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${headboard.image}" alt="${headboard.name}">
    </div>
    <p>${headboard.description}</p>
    <h6 class="grandPrice">Ksh.${headboard.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(headboard.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((headboard.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((headboard.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${headboard.image}" alt="${headboard.name}">
    </div>
    <p>${headboard.description}</p>
    <h6 class="grandPrice">Ksh.${headboard.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });
    
        

   });
}

renderHeadboards();


// next headboards scroll
const nextHeadboard = document.querySelector("#prevHeadboards");
const prevHeadboard = document.querySelector("#nxtHeadboards");
const headboardContainer = document.querySelector(".HeadboardsDisplay");

nextHeadboard.addEventListener("click", () => {
    headboardContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

prevHeadboard.addEventListener("click", () => {
    headboardContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});


const footboards = [
    {
        name:"Classic Wooden Footboard",
        description:"Solid wood with timeless durability",
        price:18000,
        image:"https://source.unsplash.com/800x600/?wooden-footboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Modern Upholstered Footboard",
        description:"Soft fabric finish for comfort",
        price:22000,
        image:"https://source.unsplash.com/800x600/?upholstered-bed,headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Luxury Tufted Footboard",
        description:"Button tufted premium design",
        price:27500,
        image:"https://source.unsplash.com/800x600/?tufted-headboard,luxury-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Minimal Panel Footboard",
        description:"Simple and modern panel style",
        price:15500,
        image:"https://source.unsplash.com/800x600/?minimal-bed-frame,wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"LED Accent Footboard",
        description:"Integrated LED lighting effect",
        price:31000,
        image:"https://source.unsplash.com/800x600/?led-bed,modern-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },

    {
        name:"Rustic Oak Footboard",
        description:"Natural oak with rustic feel",
        price:20500,
        image:"https://source.unsplash.com/800x600/?oak-bed,wooden-headboard",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Compact Single Footboard",
        description:"Perfect for small beds",
        price:13500,
        image:"https://source.unsplash.com/800x600/?single-bed,small-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"King Size Plush Footboard",
        description:"Wide padded design for comfort",
        price:34500,
        image:"https://source.unsplash.com/800x600/?king-bed,luxury-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Floating Wall Footboard",
        description:"Wall-mounted modern design",
        price:19000,
        image:"https://source.unsplash.com/800x600/?floating-bed,modern-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Leather Finish Footboard",
        description:"Premium leather surface",
        price:29500,
        image:"https://source.unsplash.com/800x600/?leather-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },

    {
        name:"Scandinavian Footboard",
        description:"Light wood minimal design",
        price:20000,
        image:"https://source.unsplash.com/800x600/?scandinavian-bedroom,bed-frame",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Curved Edge Footboard",
        description:"Smooth curved edges",
        price:22500,
        image:"https://source.unsplash.com/800x600/?curved-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Vintage Carved Footboard",
        description:"Classic carved detailing",
        price:27000,
        image:"https://source.unsplash.com/800x600/?vintage-bed,carved-wood",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Matte Black Footboard",
        description:"Bold modern black finish",
        price:23500,
        image:"https://source.unsplash.com/800x600/?black-bed-frame,modern-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Soft Panel Footboard",
        description:"Comfortable padded panels",
        price:21000,
        image:"https://source.unsplash.com/800x600/?padded-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },

    {
        name:"Luxury Velvet Footboard",
        description:"Elegant velvet upholstery",
        price:33500,
        image:"https://source.unsplash.com/800x600/?velvet-headboard,luxury-bed",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Storage Footboard",
        description:"Built-in storage compartments",
        price:29000,
        image:"https://source.unsplash.com/800x600/?storage-bed,drawer-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"High Frame Footboard",
        description:"Tall structure design",
        price:30500,
        image:"https://source.unsplash.com/800x600/?high-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Metal Frame Footboard",
        description:"Strong metal construction",
        price:17500,
        image:"https://source.unsplash.com/800x600/?metal-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Simple White Footboard",
        description:"Clean white finish",
        price:17000,
        image:"https://source.unsplash.com/800x600/?white-bed,clean-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },

    {
        name:"Premium Walnut Footboard",
        description:"Rich walnut wood build",
        price:32000,
        image:"https://source.unsplash.com/800x600/?walnut-wood-bed",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Geometric Footboard",
        description:"Modern geometric patterns",
        price:25500,
        image:"https://source.unsplash.com/800x600/?geometric-bed-frame",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Gold Accent Footboard",
        description:"Luxury gold detailing",
        price:35500,
        image:"https://source.unsplash.com/800x600/?gold-luxury-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Double Bed Footboard",
        description:"Perfect for double beds",
        price:18500,
        image:"https://source.unsplash.com/800x600/?double-bed,bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Mirror Panel Footboard",
        description:"Reflective modern design",
        price:30000,
        image:"https://source.unsplash.com/800x600/?mirror-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },

    {
        name:"Soft Cushion Footboard",
        description:"Extra padding comfort",
        price:22000,
        image:"https://source.unsplash.com/800x600/?cushion-bed,soft-headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"High Gloss White Footboard",
        description:"Shiny modern finish",
        price:24000,
        image:"https://source.unsplash.com/800x600/?high-gloss-white-bedroom",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Industrial Footboard",
        description:"Metal + wood combo",
        price:25000,
        image:"https://source.unsplash.com/800x600/?industrial-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Slim Profile Footboard",
        description:"Thin design for small rooms",
        price:16000,
        image:"https://source.unsplash.com/800x600/?slim-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"LED Strip Footboard",
        description:"Ambient LED lighting",
        price:37000,
        image:"https://source.unsplash.com/800x600/?led-bedroom,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },

    {
        name:"Modern Panel Footboard",
        description:"Clean modern design",
        price:20500,
        image:"https://source.unsplash.com/800x600/?modern-bed-panel",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Oak Frame Footboard",
        description:"Durable oak wood",
        price:23000,
        image:"https://source.unsplash.com/800x600/?oak-bed-frame",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Luxury Fabric Footboard",
        description:"Soft premium fabric",
        price:27500,
        image:"https://source.unsplash.com/800x600/?fabric-headboard,bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Minimal Black Footboard",
        description:"Simple black style",
        price:19000,
        image:"https://source.unsplash.com/800x600/?minimal-black-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Premium Storage Footboard",
        description:"Extra storage features",
        price:32500,
        image:"https://source.unsplash.com/800x600/?storage-headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },

    {
        name:"Compact Upholstered Footboard",
        description:"Small padded design",
        price:16500,
        image:"https://source.unsplash.com/800x600/?compact-bed,upholstered-headboard",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Elegant White Panel Footboard",
        description:"Stylish white panel",
        price:23500,
        image:"https://source.unsplash.com/800x600/?white-panel-bed",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Luxury Curved Footboard",
        description:"Elegant curved design",
        price:30500,
        image:"https://source.unsplash.com/800x600/?curved-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Modern Wood Footboard",
        description:"Natural wood modern look",
        price:25500,
        image:"https://source.unsplash.com/800x600/?modern-wood-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    },
    {
        name:"Premium King Footboard",
        description:"Large premium king size",
        price:38500,
        image:"https://source.unsplash.com/800x600/?king-bed-luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[6]
    }
];

const footboardDisplay = document.querySelector("#FootboardsDisplay");

function renderFootboards(){
   footboards.forEach(footboard=>{

     const footboardContainer = document.createElement("div");
     footboardContainer.className = "footboardContainer";

    footboardContainer.innerHTML=`
    <div class="deskOutline">
        <div class="deskImage">
            <img src="${footboard.image}" alt="${footboard.name}">
        </div>

        <h6>
            <span>${footboard.name}</span> 
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
        </h6>

        <p class="description">${footboard.description}</p>

        <p class="itemCategory">
            <span>${subCategory[2].items[6]}</span>
            <span>
                <s>Ksh.${parseFloat((footboard.price*discount)).toFixed(2)}</s>
            </span>
        </p>

        <div class="price-cartBtn">
            <div class="price">
                <span>Ksh.${footboard.price.toFixed(2)}</span>
            </div>
            <button>
                <i class="fa-solid fa-shopping-cart"></i>
                <span>add</span>
            </button>
        </div>
    </div>
    `;

    footboardDisplay.appendChild(footboardContainer);

      footboardContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${footboard.image}" alt="${footboard.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${footboard.image}" alt="${footboard.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${footboard.image}" alt="${footboard.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${footboard.image}" alt="${footboard.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${footboard.image}" alt="${footboard.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${footboard.image}" alt="${footboard.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${footboard.image}" alt="${footboard.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${footboard.image}" alt="${footboard.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${footboard.image}" alt="${footboard.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${footboard.image}" alt="${footboard.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${footboard.image}" alt="${footboard.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${footboard.image}" alt="${footboard.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${footboard.image}" alt="${footboard.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${footboard.image}" alt="${footboard.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${footboard.name}</span></h6>
            <p class="popdescription">${footboard.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((footboard.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(footboard.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(footboard.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            CartNumberItems.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(footboard.price * counter).toFixed(2)}`;
            CartbtnContainer.textContent = `${(footboard.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(footboard.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(footboard.price * counter).toFixed(2)}`;
            }
        });

       /* const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${footboard.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(footboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(footboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(footboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(footboard.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(footboard.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${footboard.image}" alt="${footboard.name}">
    </div>
    <p>${footboard.description}</p>
    <h6 class="grandPrice">Ksh.${footboard.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(footboard.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(footboard.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(footboard.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((footboard.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((footboard.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(footboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(footboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(footboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(footboard.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(footboard.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(footboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(footboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(footboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(footboard.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(footboard.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = footboard.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(footboard.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((footboard.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((footboard.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(footboard.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((footboard.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((footboard.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${footboard.image}" alt="${footboard.name}">
    </div>
    <p>${footboard.description}</p>
    <h6 class="grandPrice">Ksh.${footboard.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(footboard.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((footboard.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((footboard.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${footboard.image}" alt="${footboard.name}">
    </div>
    <p>${footboard.description}</p>
    <h6 class="grandPrice">Ksh.${footboard.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });
    
        

   });
}

renderFootboards();
const nextFootboard = document.querySelector("#prevFootboards");
const prevFootboard = document.querySelector("#nxtFootboards");
const footboardContainer = document.querySelector("#FootboardsDisplay");

nextFootboard.addEventListener("click",()=>{
    footboardContainer.scrollBy({
        left:-scrollAmount,
        behavior:"smooth"
    });
});

prevFootboard.addEventListener("click",()=>{
    footboardContainer.scrollBy({
        left:scrollAmount,
        behavior:"smooth"
    });
});



const bedframes = [
    {
        name:"Classic Wooden Bed Frame",
        description:"Strong solid wood construction",
        price:32000,
        image:"https://source.unsplash.com/800x600/?wooden-bed-frame,classic",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Modern Platform Bed Frame",
        description:"Low profile sleek modern design",
        price:28000,
        image:"https://source.unsplash.com/800x600/?modern-bed-frame,platform",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Luxury Upholstered Bed Frame",
        description:"Soft padded premium comfort",
        price:45000,
        image:"https://source.unsplash.com/800x600/?upholstered-bed,luxury",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Metal Industrial Bed Frame",
        description:"Durable steel industrial design",
        price:26000,
        image:"https://source.unsplash.com/800x600/?metal-bed-frame,industrial",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Storage Drawer Bed Frame",
        description:"Built-in under-bed storage",
        price:52000,
        image:"https://source.unsplash.com/800x600/?bed-frame,storage-drawers",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },

    {
        name:"King Size Premium Frame",
        description:"Large luxury king size design",
        price:65000,
        image:"https://source.unsplash.com/800x600/?king-size-bed,luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Minimalist Oak Frame",
        description:"Simple natural oak finish",
        price:24000,
        image:"https://source.unsplash.com/800x600/?oak-bed-frame,minimal",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Floating Modern Bed Frame",
        description:"Illusion floating design style",
        price:47000,
        image:"https://source.unsplash.com/800x600/?floating-bed,modern",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"LED Light Bed Frame",
        description:"Built-in ambient LED lighting",
        price:55000,
        image:"https://source.unsplash.com/800x600/?led-bed-frame,modern",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Compact Single Bed Frame",
        description:"Perfect for small rooms",
        price:21000,
        image:"https://source.unsplash.com/800x600/?single-bed,compact",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },

    {
        name:"Premium Walnut Frame",
        description:"Rich walnut wood finish",
        price:38000,
        image:"https://source.unsplash.com/800x600/?walnut-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Soft Fabric Frame",
        description:"Comfortable fabric upholstered frame",
        price:41000,
        image:"https://source.unsplash.com/800x600/?fabric-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Modern Black Frame",
        description:"Elegant matte black finish",
        price:30000,
        image:"https://source.unsplash.com/800x600/?black-bed-frame,modern",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"White Minimal Frame",
        description:"Clean white modern style",
        price:29000,
        image:"https://source.unsplash.com/800x600/?white-bed-frame,minimal",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Luxury Gold Frame",
        description:"Premium gold accent design",
        price:70000,
        image:"https://source.unsplash.com/800x600/?luxury-bed-frame,gold",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },

    {
        name:"Scandinavian Frame",
        description:"Light wood Nordic design",
        price:34000,
        image:"https://source.unsplash.com/800x600/?scandinavian-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Industrial Steel Frame",
        description:"Strong metal + wood combo",
        price:36000,
        image:"https://source.unsplash.com/800x600/?steel-bed-frame,industrial",
         categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Curved Headboard Frame",
        description:"Elegant curved design",
        price:43000,
        image:"https://source.unsplash.com/800x600/?curved-headboard-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Luxury Velvet Frame",
        description:"Soft velvet upholstered finish",
        price:48000,
        image:"https://source.unsplash.com/800x600/?velvet-bed-frame,luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Smart Storage Frame",
        description:"Hidden storage compartments",
        price:54000,
        image:"https://source.unsplash.com/800x600/?storage-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },

    {
        name:"Ultra Slim Frame",
        description:"Thin lightweight modern frame",
        price:23000,
        image:"https://source.unsplash.com/800x600/?minimal-bed-frame,thin",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Premium Leather Frame",
        description:"Luxury leather finish design",
        price:60000,
        image:"https://source.unsplash.com/800x600/?leather-bed-frame,luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Geometric Frame Design",
        description:"Modern geometric structure",
        price:37000,
        image:"https://source.unsplash.com/800x600/?geometric-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Rustic Farmhouse Frame",
        description:"Warm rustic wooden style",
        price:39000,
        image:"https://source.unsplash.com/800x600/?farmhouse-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"High Platform Frame",
        description:"Elevated sturdy base design",
        price:31000,
        image:"https://source.unsplash.com/800x600/?high-platform-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },

    {
        name:"Luxury King Frame Pro",
        description:"Extra large premium king frame",
        price:75000,
        image:"https://source.unsplash.com/800x600/?king-bed-luxury",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Modern Grey Frame",
        description:"Soft grey fabric finish",
        price:42000,
        image:"https://source.unsplash.com/800x600/?grey-bed-frame",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Classic Pine Frame",
        description:"Natural pine wood design",
        price:29500,
        image:"https://source.unsplash.com/800x600/?pine-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Luxury Panel Frame",
        description:"Decorative panel headboard",
        price:46000,
        image:"https://source.unsplash.com/800x600/?panel-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Minimal Black Steel Frame",
        description:"Strong black steel structure",
        price:27000,
        image:"https://source.unsplash.com/800x600/?black-steel-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },

    {
        name:"Floating LED Pro Frame",
        description:"Advanced LED floating design",
        price:80000,
        image:"https://source.unsplash.com/800x600/?floating-led-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Compact Wooden Frame",
        description:"Small space efficient design",
        price:25000,
        image:"https://source.unsplash.com/800x600/?compact-wood-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Premium Soft Frame",
        description:"Extra cushioned comfort frame",
        price:49000,
        image:"https://source.unsplash.com/800x600/?soft-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Elegant White Frame Pro",
        description:"Premium white luxury finish",
        price:53000,
        image:"https://source.unsplash.com/800x600/?white-luxury-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Industrial Heavy Frame",
        description:"Extra strong industrial build",
        price:61000,
        image:"https://source.unsplash.com/800x600/?heavy-industrial-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },

    {
        name:"Luxury Royal Frame",
        description:"Royal styled premium frame",
        price:90000,
        image:"https://source.unsplash.com/800x600/?royal-luxury-bed",
       categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Modern Walnut Pro Frame",
        description:"Deep walnut luxury finish",
        price:58000,
        image:"https://source.unsplash.com/800x600/?modern-walnut-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Smart LED Wood Frame",
        description:"Wood + LED hybrid design",
        price:72000,
        image:"https://source.unsplash.com/800x600/?wood-led-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Ultra Comfort Frame",
        description:"Maximum comfort padded design",
        price:66000,
        image:"https://source.unsplash.com/800x600/?comfort-bed-frame",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    },
    {
        name:"Ultimate Luxury Frame",
        description:"Top-tier luxury bed frame",
        price:100000,
        image:"https://source.unsplash.com/800x600/?ultimate-luxury-bed",
        categoryName:categories[2].name,
        subCategoryName:subCategory[2].items[7]
    }
];

// 👉 Extend to 40 (pattern-based generator)
for (let i = 6; i <= 40; i++) {
    bedframes.push({
        name: `Bed Frame Model ${i}`,
        description: "Comfortable and durable bed frame design",
        price: 20000 + (i * 1200),
        image: `https://source.unsplash.com/800x600/?ultimate-luxury-bed`,
        categoryName: categories[0].name,
        subCategoryName: subCategory[0].items[i % subCategory[0].items.length]
    });
}

const bedFramesDisplay = document.querySelector("#BedFramesDisplay");

function renderBedFrames(){
    bedframes.forEach(bed => {

        const bedContainer = document.createElement("div");
        bedContainer.className = "dresserContainer";

        bedContainer.innerHTML = `
        <div class="deskOutline">
            <div class="deskImage">
                <img src="${bed.image}" alt="${bed.name}">
            </div>

            <h6>
                <span>${bed.name}</span>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </h6>

            <p class="description">${bed.description}</p>

            <p class="itemCategory">
                <span>${bed.subCategoryName}</span>
                <span><s>Ksh.${(bed.price * discount).toFixed(2)}</s></span>
            </p>

            <div class="price-cartBtn">
                <div class="price">
                    <span>Ksh.${bed.price.toFixed(2)}</span>
                </div>
                <button>
                    <i class="fa-solid fa-shopping-cart"></i>
                    <span>add</span>
                </button>
            </div>
        </div>
        `;

        bedFramesDisplay.appendChild(bedContainer);

        bedContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${bed.image}" alt="${bed.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${bed.image}" alt="${bed.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${bed.name}</span></h6>
            <p class="popdescription">${bed.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((bed.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(bed.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(bed.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            CartNumberItems.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
            CartbtnContainer.textContent = `${(bed.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(bed.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${bed.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(bed.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
       // grandPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${bed.image}" alt="${bed.name}">
    </div>
    <p>${bed.description}</p>
    <h6 class="grandPrice">Ksh.${bed.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(bed.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((bed.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((bed.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(bed.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(bed.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(bed.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(bed.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(bed.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = bed.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(bed.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((bed.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((bed.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(bed.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((bed.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((bed.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${bed.image}" alt="${bed.name}">
    </div>
    <p>${bed.description}</p>
    <h6 class="grandPrice">Ksh.${bed.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
        // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(bed.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((bed.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((bed.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${bed.image}" alt="${bed.name}">
    </div>
    <p>${bed.description}</p>
    <h6 class="grandPrice">Ksh.${bed.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });
    
        

   });
}

renderBedFrames();


const nextBedframe = document.querySelector("#prevBedFrames");
const prevBedframe = document.querySelector("#nxtBedFrames");
const bedContainer = document.querySelector("#BedFramesDisplay");

//const scrollAmount = 300;

nextBedframe.addEventListener("click", () => {
    bedContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

prevBedframe.addEventListener("click", () => {
    bedContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

const bedsideTables = [
{
name: "Modern Oak Bedside Table",
description: "Smooth oak finish with single drawer storage",
price: 12500,
image: "https://images.unsplash.com/photo-1616627985180-4e7c7d3c9f3a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Luxury Glass Top Bedside Table",
description: "Elegant glass surface with steel frame",
price: 18000,
image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Minimal Night Stand",
description: "Simple compact design for modern bedrooms",
price: 9800,
image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Double Drawer Storage Table",
description: "Extra storage with two smooth drawers",
price: 15000,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "LED Smart Bedside Table",
description: "Touch-controlled LED lighting system",
price: 21000,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Floating Wall Bedside Table",
description: "Wall-mounted space-saving design",
price: 13500,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Rustic Wooden Night Stand",
description: "Natural wood texture finish",
price: 14000,
image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "High Gloss Bedside Table",
description: "Shiny modern finish with drawer",
price: 16000,
image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Industrial Metal Side Table",
description: "Strong steel frame with rustic wood top",
price: 17000,
image: "https://images.unsplash.com/photo-1618221710640-7a3c0a0f0d3a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Compact Mini Table",
description: "Perfect for small bedrooms",
price: 9000,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},

{
name: "Classic Wooden Night Stand",
description: "Traditional design with drawer storage",
price: 14500,
image: "https://images.unsplash.com/photo-1616486701797-0f8f4c9d8f8b",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Modern Steel Frame Table",
description: "Durable steel structure with wood top",
price: 15500,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Luxury Marble Top Table",
description: "Premium marble surface design",
price: 25000,
image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Soft LED Glow Table",
description: "Ambient light bedside table",
price: 22000,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Slim Space Saver Table",
description: "Ultra slim design for tight spaces",
price: 11000,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Elegant White Night Stand",
description: "Clean white finish modern look",
price: 13000,
image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Dual Drawer Oak Table",
description: "Oak wood with dual storage drawers",
price: 16500,
image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Premium Walnut Bedside Table",
description: "Dark walnut luxury finish",
price: 18500,
image: "https://images.unsplash.com/photo-1618221710640-7a3c0a0f0d3a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Glass Drawer Side Table",
description: "Transparent modern drawer design",
price: 17500,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Compact Wooden Cube Table",
description: "Simple cube style bedside table",
price: 10000,
image: "https://images.unsplash.com/photo-1616486701797-0f8f4c9d8f8b",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},

{
name: "Modern Floating Drawer Table",
description: "Wall mounted floating drawer",
price: 14500,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Black Matte Night Stand",
description: "Matte black stylish finish",
price: 15000,
image: "https://images.unsplash.com/photo-1616627985180-4e7c7d3c9f3a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "LED Charging Table",
description: "USB charging + LED light feature",
price: 23000,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Vintage Wooden Side Table",
description: "Old-school vintage design",
price: 14000,
image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Steel Frame Minimal Table",
description: "Minimalist steel construction",
price: 16000,
image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},

{
name: "Soft Edge Wooden Table",
description: "Rounded edge modern design",
price: 13500,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Luxury Gold Trim Table",
description: "Gold accented premium design",
price: 27000,
image: "https://images.unsplash.com/photo-1618221710640-7a3c0a0f0d3a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Modern Two Layer Table",
description: "Extra storage shelf layer",
price: 15500,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Compact Drawer Night Table",
description: "Small but functional storage",
price: 12000,
image: "https://images.unsplash.com/photo-1616486701797-0f8f4c9d8f8b",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Premium Glass Wood Combo",
description: "Glass top with wooden base",
price: 20000,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},

{
name: "Smart Touch Table",
description: "Touch control lighting bedside table",
price: 24000,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Rustic Farmhouse Table",
description: "Country style wooden finish",
price: 15000,
image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Ultra Modern Side Table",
description: "Futuristic sleek design",
price: 26000,
image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Drawer + Shelf Table",
description: "Combined storage design",
price: 17000,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Simple White Table",
description: "Clean and minimal bedside table",
price: 11500,
image: "https://images.unsplash.com/photo-1616627985180-4e7c7d3c9f3a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Luxury Mirror Finish Table",
description: "Reflective modern design",
price: 28000,
image: "https://images.unsplash.com/photo-1616486701797-0f8f4c9d8f8b",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Wide Surface Night Table",
description: "Extra surface for decor and lamp",
price: 19000,
image: "https://images.unsplash.com/photo-1618221710640-7a3c0a0f0d3a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Compact Modern Cube",
description: "Small cube style bedside unit",
price: 9500,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Designer Luxury Table",
description: "High-end designer finish",
price: 30000,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
},
{
name: "Final Edition Bedside Table",
description: "Premium modern final model",
price: 32000,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[2].name,
subCategoryName: subCategory[2].items[8]
}
];
const bedsideDisplay = document.querySelector("#BedsideDisplay");

function renderBedsideTables(){

    bedsideTables.forEach(table => {

        const bedsideContainer = document.createElement("div");
        bedsideContainer.className = "dresserContainer";

        bedsideContainer.innerHTML = `
        <div class="deskOutline">

            <div class="deskImage">
                <img src="${table.image}" alt="${table.name}">
            </div>

            <h6>
                <span>${table.name}</span>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </h6>

            <p class="description">${table.description}</p>

            <p class="itemCategory">
                <span>${table.subCategoryName}</span>
                <span><s>Ksh.${(table.price * discount).toFixed(2)}</s></span>
            </p>

            <div class="price-cartBtn">
                <div class="price">
                    <span>Ksh.${table.price.toFixed(2)}</span>
                </div>
                <button>
                    <i class="fa-solid fa-shopping-cart"></i>
                    <span>add</span>
                </button>
            </div>

        </div>
        `;

        bedsideDisplay.appendChild(bedsideContainer);

        bedsideContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${table.name}</span></h6>
            <p class="popdescription">${table.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((table.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(table.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(table.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            CartNumberItems.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
            CartbtnContainer.textContent = `${(table.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(table.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${table.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
       // grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
       // cartCounter.textContent=counter;
    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(table.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((table.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((table.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = table.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(table.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((table.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(table.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((table.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(table.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((table.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });
    
        

   });

}
renderBedsideTables();

const nextSideBed = document.querySelector("#prevBedFrames");
const prevSideBed = document.querySelector("#nxtBedFrames");
const sidebedContainer = document.querySelector("#BedFramesDisplay");

//const scrollAmount = 300;

nextSideBed.addEventListener("click", () => {
    sidebedContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

prevSideBed.addEventListener("click", () => {
    sidebedContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});


const diningTables = [
{
name: "Modern Glass Dining Table",
description: "Elegant glass top with steel frame legs",
price: 45000,
image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "6-Seater Oak Dining Set",
description: "Strong oak wood family dining table",
price: 52000,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},
{
name: "Luxury Marble Dining Table",
description: "Premium marble surface with gold finish legs",
price: 85000,
image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Minimal Round Dining Table",
description: "Simple round table for modern spaces",
price: 38000,
image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},
{
name: "Extendable Family Dining Table",
description: "Expandable design for extra guests",
price: 60000,
image: "https://images.unsplash.com/photo-1618221710640-7a3c0a0f0d3a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "Industrial Metal Dining Table",
description: "Wood top with strong metal base",
price: 42000,
image: "https://images.unsplash.com/photo-1616627985180-4e7c7d3c9f3a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},
{
name: "Glass Top Wooden Frame Table",
description: "Combination of glass and wood design",
price: 47000,
image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Luxury Oval Dining Table",
description: "Elegant oval shape premium design",
price: 75000,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},
{
name: "Compact 4-Seater Table",
description: "Perfect for small dining spaces",
price: 30000,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "High Gloss Dining Table",
description: "Shiny modern finish surface",
price: 50000,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},

{
name: "Rustic Wooden Dining Table",
description: "Natural wood farmhouse style",
price: 41000,
image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Luxury Gold Trim Table",
description: "Premium design with gold accents",
price: 90000,
image: "https://images.unsplash.com/photo-1616486701797-0f8f4c9d8f8b",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},
{
name: "Modern Black Dining Table",
description: "Elegant matte black finish",
price: 48000,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "Family 8-Seater Dining Table",
description: "Large table for big families",
price: 70000,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},
{
name: "Modern White Dining Set",
description: "Clean white stylish finish",
price: 53000,
image: "https://images.unsplash.com/photo-1616627985180-4e7c7d3c9f3a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Wood & Steel Combo Table",
description: "Durable hybrid material design",
price: 46000,
image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},
{
name: "Luxury Glass Oval Table",
description: "Smooth glass top oval design",
price: 78000,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "Compact Square Dining Table",
description: "Space-saving square design",
price: 35000,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},
{
name: "Premium Walnut Dining Table",
description: "Dark walnut luxury finish",
price: 65000,
image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Modern Floating Edge Table",
description: "Sharp edge futuristic design",
price: 56000,
image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},

{
name: "Classic Rectangular Table",
description: "Traditional family dining table",
price: 40000,
image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "Luxury LED Dining Table",
description: "Built-in LED lighting design",
price: 92000,
image: "https://images.unsplash.com/photo-1618221710640-7a3c0a0f0d3a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},
{
name: "Industrial Loft Table",
description: "Rustic industrial design",
price: 44000,
image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Elegant Mirror Finish Table",
description: "Reflective luxury surface",
price: 88000,
image: "https://images.unsplash.com/photo-1616486701797-0f8f4c9d8f8b",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},

{
name: "Modern Slim Dining Table",
description: "Slim design for small rooms",
price: 39000,
image: "https://images.unsplash.com/photo-1617806118233-18e1de247200",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "High-End Marble Gold Table",
description: "Luxury marble with gold legs",
price: 95000,
image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},
{
name: "Family Extendable Wood Table",
description: "Adjustable length dining table",
price: 63000,
image: "https://images.unsplash.com/photo-1618221710640-7a3c0a0f0d3a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Black Glass Dining Table",
description: "Dark glass premium finish",
price: 71000,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},
{
name: "Minimal Oak Table",
description: "Simple natural oak design",
price: 42000,
image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},

// (Remaining 10 simplified but still unique images)
{
name: "Modern Luxury Dining Set",
description: "Complete modern dining set",
price: 98000,
image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
},
{
name: "Premium White Marble Table",
description: "Elegant white marble surface",
price: 87000,
image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[2]
},
{
name: "Rustic Country Table",
description: "Farmhouse style wood design",
price: 43000,
image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[3]
},
{
name: "Luxury Oval Gold Table",
description: "Oval shape with gold accents",
price: 93000,
image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[0]
},
{
name: "Modern Concrete Table",
description: "Industrial concrete finish",
price: 49000,
image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
categoryName: categories[3].name,
subCategoryName: subCategory[3].items[1]
}
];
const diningDisplay = document.querySelector("#DiningDisplay");

function renderDiningTables(){
  diningTables.forEach(table => {

    const tableContainer = document.createElement("div");
    tableContainer.className = "dresserContainer";

    tableContainer.innerHTML = `
      <div class="deskOutline">
        <div class="deskImage">
          <img src="${table.image}" alt="${table.name}">
        </div>

        <h6>
          <span>${table.name}</span>
          <span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
        </h6>

        <p class="description">${table.description}</p>

        <p class="itemCategory">
          <span>${table.subCategoryName}</span>
          <span><s>Ksh.${parseFloat(table.price * discount).toFixed(2)}</s></span>
        </p>

        <div class="price-cartBtn">
          <div class="price">
            <span>Ksh.${table.price.toFixed(2)}</span>
          </div>
          <button>
            <i class="fa-solid fa-shopping-cart"></i>
            <span>add</span>
          </button>
        </div>
      </div>
    `;

    diningDisplay.appendChild(tableContainer);

      tableContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${table.image}" alt="${table.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${table.image}" alt="${table.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${table.name}</span></h6>
            <p class="popdescription">${table.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((table.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(table.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(table.price).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            CartNumberItems.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
            CartbtnContainer.textContent = `${(table.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(table.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

         //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${table.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(table.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((table.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((table.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(table.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(table.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(table.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(table.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = table.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});


//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(table.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((table.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(table.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((table.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);

// Get the orderItemsList div from the newly created order card
const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(table.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((table.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((table.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${table.image}" alt="${table.name}">
    </div>
    <p>${table.description}</p>
    <h6 class="grandPrice">Ksh.${table.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

    });
    
        

   });

}
renderDiningTables();

const nextDining = document.querySelector("#prevDining");
const prevDining = document.querySelector("#nxtDining");
const diningContainer = document.querySelector("#DiningDisplay");

//let scrollAmount = 300;

nextDining.addEventListener("click", () => {
  diningContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

prevDining.addEventListener("click", () => {
  diningContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});



const diningChairs = [
  {
    name: "Modern Wooden Dining Chair",
    description: "Elegant solid wood chair with padded seat for comfort",
    price: 8500,
    image: "https://images.unsplash.com/photo-1549497538-303791108f95",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Luxury Velvet Dining Chair",
    description: "Soft velvet upholstery with gold metal legs",
    price: 12500,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Minimalist White Chair",
    description: "Clean modern design perfect for dining rooms",
    price: 6200,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5",
     categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Industrial Metal Chair",
    description: "Strong metal frame with rustic finish",
    price: 7400,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Classic Brown Leather Chair",
    description: "Comfortable leather seating with wooden legs",
    price: 9800,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },

  {
    name: "Scandinavian Dining Chair",
    description: "Simple nordic design with light wood finish",
    price: 8900,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Black Modern Chair",
    description: "Sleek black finish for modern dining setups",
    price: 7000,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Fabric Cushion Chair",
    description: "Soft cushioned seat with durable fabric cover",
    price: 8100,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Luxury Gold Frame Chair",
    description: "Premium gold steel frame with velvet seat",
    price: 15000,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2b0c",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Rustic Wooden Chair",
    description: "Farmhouse style wooden dining chair",
    price: 6800,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25",
     categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },

  {
    name: "Ergonomic Dining Chair",
    description: "Designed for comfort during long meals",
    price: 9200,
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
     categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "White Plastic Chair",
    description: "Lightweight and easy to clean dining chair",
    price: 4500,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Luxury Dining Armchair",
    description: "Arm support with premium upholstery",
    price: 13500,
    image: "https://images.unsplash.com/photo-1582582494700-5c0c0c0c0c0c",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Bentwood Chair",
    description: "Classic curved wood design",
    price: 7700,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Modern Mesh Chair",
    description: "Breathable mesh back dining chair",
    price: 8400,
    image: "https://images.unsplash.com/photo-1582582494700-1a2b3c4d5e6f",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },

  {
    name: "High Back Dining Chair",
    description: "Tall elegant chair with padded backrest",
    price: 9900,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Vintage Wooden Chair",
    description: "Old-style handcrafted wooden chair",
    price: 8600,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
     categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Soft Fabric Chair",
    description: "Comfortable padded fabric seating",
    price: 7800,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
     categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Dark Walnut Chair",
    description: "Premium walnut wood finish",
    price: 11000,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  },
  {
    name: "Luxury Dining Set Chair",
    description: "Perfect match for dining table sets",
    price: 14500,
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
    categoryName: categories[3].name,
    subCategoryName: subCategory[3].items[1]
  }
];


const chairDisplay = document.querySelector("#DiningChairsDisplay");

function renderDiningChairs() {
    chairDisplay.innerHTML = "";

    diningChairs.forEach(chair => {

        const chairContainer = document.createElement("div");
        chairContainer.className = "chairContainer";

        chairContainer.innerHTML = `
        <div class="deskOutline">
            <div class="deskImage">
                <img src="${chair.image}" alt="${chair.name}">
            </div>

            <h6>
                <span>${chair.name}</span>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </h6>

            <p class="description">${chair.description}</p>

            <p class="itemCategory">
                <span>Dining Chairs</span>
                <span><s>Ksh.${(chair.price * 1.2).toFixed(2)}</s></span>
            </p>

            <div class="price-cartBtn">
                <div class="price"><span>Ksh.${chair.price.toFixed(2)}</span></div>
                <button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button>
            </div>
        </div>
        `;

        chairDisplay.appendChild(chairContainer);

        // ================= POPUP =================
        chairContainer.addEventListener("click", () => {

            searchPopup.classList.add("active");

            searchinput.innerHTML = `
            <div class="popOutline">
            <div class="popItem">

                

                <section class="imageScetion">
                    <section class="images active"><img src="${chair.image}"></section>
                    <section class="images"><img src="${chair.image}"></section>
                    <section class="images"><img src="${chair.image}"></section>
                </section>

                <div class="productDetail">
                    <h6>${chair.name}</h6>
                    <p>${chair.description}</p>

                    <div class="popPrice">
                        Price: <span>Ksh.${chair.price.toFixed(2)}</span>
                    </div>

                    <div class="increase-decrease">
                        <button class="decreasebtn">-</button>
                        <span class="Quantitycounter">1</span>
                        <button class="increasebtn">+</button>
                    </div>

                    <div class="pop-cartbtn">
                        <button class="addToCartbtn">
                            <i class="fa-solid fa-shopping-cart"></i> add
                        </button>
                    </div>

                </div>
            </div>
            </div>
            `;

            const pop = document.querySelector(".popItem");

            let counter = 1;

            const qty = pop.querySelector(".Quantitycounter");
            const inc = pop.querySelector(".increasebtn");
            const dec = pop.querySelector(".decreasebtn");

            inc.addEventListener("click", () => {
                counter++;
                qty.textContent = counter;
            });

            dec.addEventListener("click", () => {
                if (counter > 1) {
                    counter--;
                    qty.textContent = counter;
                }
            });

          /*  pop.querySelector(".closePopUp")
                .addEventListener("click", () => {
                    popupContainer.classList.remove("active");
                });*/

            // ================= ADD TO CART =================
            pop.querySelector(".addToCartbtn").addEventListener("click", () => {

                const cartCard = document.createElement("div");
                cartCard.className = "cartCard";

                cartCard.innerHTML = `
                <div class="cartOutline">
                    <div class="cartImage">
                        <img src="${chair.image}">
                    </div>

                    <p>${chair.description}</p>

                    <h6 class="grandPrice">
                        Ksh.${(chair.price * counter).toFixed(2)}
                    </h6>

                    <button class="trash">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                `;

                cartproductContainer.appendChild(cartCard);

               chairContainer.addEventListener("click", ()=>{
        popupContainer.classList.add("active");
        popupContainer.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${chair.image}" alt="${chair.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${chair.image}" alt="${chair.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${chair.name}</span></h6>
            <p class="popdescription">${chair.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((chair.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(chair.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(chair.price * 1).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(chair.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(chair.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

        //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${chair.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(desk.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(desk.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(desk.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(desk.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;
    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

    //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(chair.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((chair.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((chair.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(chair.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(chair.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(chair.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(chair.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });


    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = chair.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});

//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(chair.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((chair.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(chair.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((chair.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(chair.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((chair.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((chair.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${chair.image}" alt="${chair.name}">
    </div>
    <p>${chair.description}</p>
    <h6 class="grandPrice">Ksh.${chair.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});






    });
});
});
});
}

renderDiningChairs();

const nextdinningChair = document.querySelector("#prevdinningChairs");
const prevdinningChair = document.querySelector("#nxtdinningChairs");
const chairContainer = document.querySelector("#DiningChairsDisplay");

//const scrollAmount = 300;

nextdinningChair.addEventListener("click", () => {
    chairContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

prevdinningChair.addEventListener("click", () => {
    chairContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

const Sideboards = [
{
    name:"Modern Oak Sideboard",
    description:"Sleek oak sideboard with clean lines and ample storage",
    price:32500,
    image:"images/sideboard1.png",
    categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Classic Walnut Sideboard",
    description:"Elegant walnut sideboard with traditional detailing",
    price:41000,
    image:"images/sideboard2.png",
    categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Minimalist White Sideboard",
    description:"Modern white finish sideboard perfect for contemporary homes",
    price:28900,
    image:"images/sideboard3.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Rustic Farmhouse Sideboard",
    description:"Distressed wood sideboard with farmhouse charm",
    price:36700,
    image:"images/sideboard4.png",
    categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Industrial Metal Sideboard",
    description:"Metal and wood combination with industrial design",
    price:39500,
    image:"images/sideboard5.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Glass Door Sideboard",
    description:"Sideboard with glass panels for display and storage",
    price:35800,
    image:"images/sideboard6.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Scandinavian Style Sideboard",
    description:"Light wood tones with minimalist Scandinavian design",
    price:33200,
    image:"images/sideboard7.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"High Gloss Black Sideboard",
    description:"Modern glossy black finish with push-to-open doors",
    price:42000,
    image:"images/sideboard8.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Vintage Carved Sideboard",
    description:"Intricately carved vintage wooden sideboard",
    price:45000,
    image:"images/sideboard9.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Compact Storage Sideboard",
    description:"Small size sideboard ideal for limited spaces",
    price:27500,
    image:"images/sideboard10.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Luxury Marble Top Sideboard",
    description:"Premium marble top with wooden base",
    price:52000,
    image:"images/sideboard11.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Sliding Door Sideboard",
    description:"Space-saving sliding doors with modern finish",
    price:34000,
    image:"images/sideboard12.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Dark Espresso Sideboard",
    description:"Rich espresso color with multiple drawers",
    price:36000,
    image:"images/sideboard13.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Mid-Century Sideboard",
    description:"Retro design with tapered legs and warm tones",
    price:39000,
    image:"images/sideboard14.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Corner Sideboard Unit",
    description:"Designed to fit perfectly in corner spaces",
    price:30000,
    image:"images/sideboard15.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Open Shelf Sideboard",
    description:"Combination of open shelves and closed cabinets",
    price:31000,
    image:"images/sideboard16.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Matte Grey Sideboard",
    description:"Stylish matte grey finish with modern appeal",
    price:33500,
    image:"images/sideboard17.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Two-Tone Sideboard",
    description:"Dual color design for a bold interior statement",
    price:34500,
    image:"images/sideboard18.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Floating Wall Sideboard",
    description:"Wall-mounted sideboard for a modern floating look",
    price:37000,
    image:"images/sideboard19.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Solid Pine Sideboard",
    description:"Durable pine wood with natural finish",
    price:31500,
    image:"images/sideboard20.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},

// 21–40
{
    name:"Contemporary Glass Sideboard",
    description:"Glass and wood mix for a modern touch",
    price:40500,
    image:"images/sideboard21.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Minimal Drawer Sideboard",
    description:"Clean design with hidden drawers",
    price:29800,
    image:"images/sideboard22.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Wide Storage Sideboard",
    description:"Extra wide storage for large dining areas",
    price:46000,
    image:"images/sideboard23.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Black Metal Frame Sideboard",
    description:"Strong metal frame with wooden shelves",
    price:38000,
    image:"images/sideboard24.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Classic Ivory Sideboard",
    description:"Elegant ivory finish with gold handles",
    price:42000,
    image:"images/sideboard25.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Urban Loft Sideboard",
    description:"Modern loft-inspired design",
    price:39500,
    image:"images/sideboard26.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Simple Wooden Sideboard",
    description:"Basic wooden sideboard for everyday use",
    price:27000,
    image:"images/sideboard27.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"High-End Designer Sideboard",
    description:"Premium craftsmanship with unique styling",
    price:55000,
    image:"images/sideboard28.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Modern LED Sideboard",
    description:"Built-in LED lighting for ambiance",
    price:47000,
    image:"images/sideboard29.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Multi-Drawer Sideboard",
    description:"Multiple drawers for organized storage",
    price:36000,
    image:"images/sideboard30.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Compact Urban Sideboard",
    description:"Perfect for apartments and small homes",
    price:29000,
    image:"images/sideboard31.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Elegant Curved Sideboard",
    description:"Smooth curved edges with modern design",
    price:44000,
    image:"images/sideboard32.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Double Door Sideboard",
    description:"Spacious double-door storage unit",
    price:33000,
    image:"images/sideboard33.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Luxury Gold Trim Sideboard",
    description:"Gold accents with premium finish",
    price:56000,
    image:"images/sideboard34.png",
    categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Eco-Friendly Bamboo Sideboard",
    description:"Sustainable bamboo construction",
    price:31000,
    image:"images/sideboard35.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Modern Rustic Sideboard",
    description:"Blend of modern and rustic design",
    price:37000,
    image:"images/sideboard36.png",
    categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Three Door Sideboard",
    description:"Extra storage with three-door layout",
    price:40000,
    image:"images/sideboard37.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Contemporary Matte Black Sideboard",
    description:"Matte black with sleek modern look",
    price:38500,
    image:"images/sideboard38.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Classic Wooden Buffet Sideboard",
    description:"Traditional buffet-style storage cabinet",
    price:42000,
    image:"images/sideboard39.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
},
{
    name:"Premium Storage Sideboard",
    description:"Large capacity with elegant finish",
    price:48000,
    image:"images/sideboard40.png",
   categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[2]
}
];


const sideboardDisplay = document.querySelector("#SideboardsDisplay");

function renderSideboards() {
    sideboardDisplay.innerHTML = "";

    Sideboards.forEach(sideboard => {

        const sideboardContainer = document.createElement("div");
        sideboardContainer.className = "sideboardContainer";

        sideboardContainer.innerHTML = `
        <div class="deskOutline">
            <div class="deskImage">
                <img src="${sideboard.image}" alt="${sideboard.name}">
            </div>

            <h6>
                <span>${sideboard.name}</span>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </h6>

            <p class="description">${sideboard.description}</p>

            <p class="itemCategory">
                <span>Sideboards</span>
                <span><s>Ksh.${(sideboard.price * 1.25).toFixed(2)}</s></span>
            </p>

            <div class="price-cartBtn">
                <div class="price">
                    <span>Ksh.${sideboard.price.toFixed(2)}</span>
                </div>
                <button>
                    <i class="fa-solid fa-shopping-cart"></i>
                    <span>add</span>
                </button>
            </div>
        </div>
        `;

        sideboardDisplay.appendChild(sideboardContainer);

        sideboardContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${sideboard.image}" alt="${sideboard.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${sideboard.name}</span></h6>
            <p class="popdescription">${sideboard.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((sideboard.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(sideboard.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(sideboard.price * 1).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(sideboard.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(sideboard.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(sideboard.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(sideboard.price * counter).toFixed(2)}`;
            }
        });

       /* const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

        //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${sideboard.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
    quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(sideboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(sideboard.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

    //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${sideboard.image}" alt="${sideboard.name}">
    </div>
    <p>${sideboard.description}</p>
    <h6 class="grandPrice">Ksh.${sideboard.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(sideboard.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(sideboard.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(sideboard.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((sideboard.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((sideboard.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(sideboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(sideboard.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(sideboard.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(sideboard.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(sideboard.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });


    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = sideboard.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});

//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(sideboard.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((sideboard.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((sideboard.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(sideboard.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((sideboard.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((sideboard.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${sideboard.image}" alt="${sideboard.name}">
    </div>
    <p>${sideboard.description}</p>
    <h6 class="grandPrice">Ksh.${sideboard.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(sideboard.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((sideboard.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((sideboard.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${sideboard.image}" alt="${sideboard.name}">
    </div>
    <p>${sideboard.description}</p>
    <h6 class="grandPrice">Ksh.${sideboard.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
         // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});






    });
});
}
renderSideboards();
const nextSideboard = document.querySelector("#prevSideboards");
const prevSideboard = document.querySelector("#nxtSideboards");
const sideboardContainer = document.querySelector("#SideboardsDisplay");

//const scrollAmount = 300;

nextSideboard.addEventListener("click", () => {
    sideboardContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

prevSideboard.addEventListener("click", () => {
    sideboardContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

const buffets = [
  {
    id: 1,
    name: "Oakwood Classic Buffet",
    description: "Premium oak wood buffet cabinet with 4 doors and storage shelves.",
    price: 12000,
    image: "https://source.unsplash.com/400x400/?oak,wood,sideboard"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 2,
    name: "Modern White Buffet",
    description: "Minimalist white buffet with glossy finish and soft-close doors.",
    price: 13500,
    image: "https://source.unsplash.com/400x400/?white,furniture,buffet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 3,
    name: "Luxury Black Buffet",
    description: "Elegant black buffet with gold handles and premium finish.",
    price: 18000,
    image: "https://source.unsplash.com/400x400/?black,luxury,sideboard"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 4,
    name: "Rustic Wooden Buffet",
    description: "Handcrafted rustic buffet made from reclaimed wood.",
    price: 15000,
    image: "https://source.unsplash.com/400x400/?rustic,wood,cabinet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 5,
    name: "Glass Door Buffet",
    description: "Buffet cabinet with glass doors for display and storage.",
    price: 16000,
    image: "https://source.unsplash.com/400x400/?glass,display,cabinet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 6,
    name: "Scandinavian Buffet",
    description: "Light wood Scandinavian-style buffet with clean design.",
    price: 14500,
    image: "https://source.unsplash.com/400x400/?scandinavian,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 7,
    name: "Industrial Metal Buffet",
    description: "Strong metal frame buffet with wooden shelves.",
    price: 17000,
    image: "https://source.unsplash.com/400x400/?industrial,metal,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 8,
    name: "Luxury Marble Top Buffet",
    description: "High-end buffet with marble top surface and storage drawers.",
    price: 22000,
    image: "https://source.unsplash.com/400x400/?marble,furniture,sideboard"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 9,
    name: "Compact Mini Buffet",
    description: "Small space-saving buffet for apartments.",
    price: 9000,
    image: "https://source.unsplash.com/400x400/?small,wood,cabinet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 10,
    name: "Farmhouse Buffet",
    description: "Farmhouse style buffet with distressed wood finish.",
    price: 15500,
    image: "https://source.unsplash.com/400x400/?farmhouse,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },

  {
    id: 11,
    name: "Modern Grey Buffet",
    description: "Elegant grey buffet with matte finish.",
    price: 14000,
    image: "https://source.unsplash.com/400x400/?grey,modern,sideboard"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 12,
    name: "Sliding Door Buffet",
    description: "Buffet with smooth sliding storage doors.",
    price: 16500,
    image: "https://source.unsplash.com/400x400/?sliding,wood,cabinet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 13,
    name: "High Gloss Buffet",
    description: "Ultra glossy buffet with modern design.",
    price: 19000,
    image: "https://source.unsplash.com/400x400/?glossy,furniture,white"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 14,
    name: "Vintage Buffet Cabinet",
    description: "Classic vintage buffet with carved wood design.",
    price: 17500,
    image: "https://source.unsplash.com/400x400/?vintage,wood,antique"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 15,
    name: "Walnut Finish Buffet",
    description: "Premium walnut wood buffet with smooth finish.",
    price: 20000,
    image: "https://source.unsplash.com/400x400/?walnut,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },

  {
    id: 16,
    name: "Luxury Gold Trim Buffet",
    description: "Designer buffet with gold accents and luxury finish.",
    price: 25000,
    image: "https://source.unsplash.com/400x400/?luxury,gold,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 17,
    name: "Modern Floating Buffet",
    description: "Wall-mounted floating buffet design.",
    price: 16000,
    image: "https://source.unsplash.com/400x400/?floating,modern,cabinet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 18,
    name: "Double Door Buffet",
    description: "Spacious buffet with double storage doors.",
    price: 14500,
    image: "https://source.unsplash.com/400x400/?double,door,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 19,
    name: "Dark Wood Buffet",
    description: "Elegant dark wood buffet for dining rooms.",
    price: 15500,
    image: "https://source.unsplash.com/400x400/?dark,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 20,
    name: "Luxury Hotel Buffet",
    description: "Hotel-style premium buffet cabinet.",
    price: 30000,
    image: "https://source.unsplash.com/400x400/?hotel,luxury,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },

  {
    id: 21,
    name: "Minimalist Buffet",
    description: "Simple clean buffet for modern homes.",
    price: 13000,
    image: "https://source.unsplash.com/400x400/?minimalist,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 22,
    name: "Wide Storage Buffet",
    description: "Extra wide buffet with large storage capacity.",
    price: 21000,
    image: "https://source.unsplash.com/400x400/?wide,cabinet,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 23,
    name: "Compact Corner Buffet",
    description: "Corner-friendly buffet for small spaces.",
    price: 11000,
    image: "https://source.unsplash.com/400x400/?corner,furniture,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 24,
    name: "LED Light Buffet",
    description: "Modern buffet with LED lighting display.",
    price: 23000,
    image: "https://source.unsplash.com/400x400/?led,furniture,modern"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 25,
    name: "Black Walnut Buffet",
    description: "Premium black walnut luxury buffet.",
    price: 24000,
    image: "https://source.unsplash.com/400x400/?black,walnut,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },

  {
    id: 26,
    name: "Glass Top Buffet",
    description: "Elegant buffet with glass surface top.",
    price: 18500,
    image: "https://source.unsplash.com/400x400/?glass,table,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 27,
    name: "Antique Style Buffet",
    description: "Traditional antique carved buffet.",
    price: 19500,
    image: "https://source.unsplash.com/400x400/?antique,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 28,
    name: "Double Shelf Buffet",
    description: "Buffet with extra shelving storage.",
    price: 17000,
    image: "https://source.unsplash.com/400x400/?shelf,wood,cabinet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 29,
    name: "Matte Black Buffet",
    description: "Modern matte black storage buffet.",
    price: 17500,
    image: "https://source.unsplash.com/400x400/?matte,black,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 30,
    name: "Elegant Cream Buffet",
    description: "Soft cream colored buffet cabinet.",
    price: 15000,
    image: "https://source.unsplash.com/400x400/?cream,furniture,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },

  {
    id: 31,
    name: "Luxury Wood Buffet Pro",
    description: "High-end professional buffet cabinet.",
    price: 26000,
    image: "https://source.unsplash.com/400x400/?luxury,wood,cabinet"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 32,
    name: "Modern Storage Buffet XL",
    description: "Extra large storage buffet unit.",
    price: 22000,
    image: "https://source.unsplash.com/400x400/?storage,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 33,
    name: "Soft White Buffet",
    description: "Clean soft white buffet design.",
    price: 14500,
    image: "https://source.unsplash.com/400x400/?white,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 34,
    name: "Natural Oak Buffet",
    description: "Natural oak wood buffet cabinet.",
    price: 15500,
    image: "https://source.unsplash.com/400x400/?oak,furniture,wood"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 35,
    name: "Industrial Loft Buffet",
    description: "Loft-style industrial buffet unit.",
    price: 20000,
    image: "https://source.unsplash.com/400x400/?loft,industrial,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },

  {
    id: 36,
    name: "Premium Display Buffet",
    description: "Display buffet with glass sections.",
    price: 21500,
    image: "https://source.unsplash.com/400x400/?display,glass,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 37,
    name: "Classic Wooden Buffet",
    description: "Timeless classic wood buffet cabinet.",
    price: 16000,
    image: "https://source.unsplash.com/400x400/?classic,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 38,
    name: "Urban Modern Buffet",
    description: "Urban style modern buffet design.",
    price: 18000,
    image: "https://source.unsplash.com/400x400/?urban,modern,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 39,
    name: "Executive Buffet Cabinet",
    description: "Executive luxury office-style buffet.",
    price: 28000,
    image: "https://source.unsplash.com/400x400/?executive,wood,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  },
  {
    id: 40,
    name: "Elite Home Buffet",
    description: "Elite premium home buffet unit.",
    price: 32000,
    image: "https://source.unsplash.com/400x400/?elite,luxury,furniture"
    ,categoryName:categories[3].name,
    subCategoryName:subCategory[3].items[3]
  }
];

const buffetDisplay = document.querySelector("#BuffetsDisplay");

function renderBuffets() {
    buffetDisplay.innerHTML = "";

    buffets.forEach(buffet => {

        const buffetContainer = document.createElement("div");
        buffetContainer.className = "buffetContainer";

        buffetContainer.innerHTML = `
        <div class="deskOutline">
            <div class="deskImage">
                <img src="${buffet.image}" alt="${buffet.name}">
            </div>

            <h6>
                <span>${buffet.name}</span>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </h6>

            <p class="description">${buffet.description}</p>

            <p class="itemCategory">
                <span>Buffets</span>
                <span><s>Ksh.${(buffet.price * 1.3).toFixed(2)}</s></span>
            </p>

            <div class="price-cartBtn">
                <div class="price">
                    <span>Ksh.${buffet.price.toFixed(2)}</span>
                </div>
                <button>
                    <i class="fa-solid fa-shopping-cart"></i>
                    <span>add</span>
                </button>
            </div>
        </div>
        `;

        buffetDisplay.appendChild(buffetContainer);

      buffetContainer.addEventListener("click", ()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML = `
    <div class="popOutline">
    <div class="popItem">
           <section class="imageScetion">
           <section class="images active"  id="img1">
                <div class="popImage"><img src="${buffet.image}" alt="${buffet.name}"></div>
           </section>
           <section class="images"  id="img2">
                <div class="popImage"><img src="${buffet.image}" alt="${buffet.name}"></div>
           </section>
           <section class="images"  id="img3">
                <div class="popImage"><img src="${buffet.image}" alt="${buffet.name}"></div>
           </section>
           <section class="images"  id="img4">
                <div class="popImage"><img src="${buffet.image}" alt="${buffet.name}"></div>
           </section>
           <section class="images"  id="img5">
                <div class="popImage"><img src="${buffet.image}" alt="${buffet.name}"></div>
           </section>
           <section class="images"  id="img6">
                <div class="popImage"><img src="${buffet.image}" alt="${buffet.name}"></div>
           </section>
           <section class="images"  id="img7">
                <div class="popImage"><img src="${buffet.image}" alt="${buffet.name}"></div>
           </section>
           <div class="tabs-next-prev">
           <a class="left">&laquo;</a>
           <div class="filterTabs">
           <button type="button" onclick="showImage('img1')"><div class="deskImage"><img src="${buffet.image}" alt="${buffet.name}"></div></button>
            <button type="button" onclick="showImage('img2')"><div class="deskImage"><img src="${buffet.image}" alt="${buffet.name}"></div></button>
            <button type="button" onclick="showImage('img3')"><div class="deskImage"><img src="${buffet.image}" alt="${buffet.name}"></div></button>
            <button type="button" onclick="showImage('img4')"><div class="deskImage"><img src="${buffet.image}" alt="${buffet.name}"></div></button>
            <button type="button" onclick="showImage('img5')"><div class="deskImage"><img src="${buffet.image}" alt="${buffet.name}"></div></button>
            <button type="button" onclick="showImage('img6')"><div class="deskImage"><img src="${buffet.image}" alt="${buffet.name}"></div></button>
            <button type="button" onclick="showImage('img7')"><div class="deskImage"><img src="${buffet.image}" alt="${buffet.name}"></div></button>
           </div>
          <a class="right">&raquo;</a>
           </div>
           </section>
           <div class="productDetail">
            <h6><span>${buffet.name}</span></h6>
            <p class="popdescription">${buffet.description}</p>
            <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[0]}</span></span></p>
            <div class="discount">Discount:<span><s>Ksh.${parseFloat(((buffet.price)*discount)).toFixed(2)}</s></span></div>
          <div class="popPrice">Price:<span>Ksh.${(buffet.price).toFixed(2)}</span></div>
            <div class="increase-decrease">
           <div class="icreament-Button">
            <button class="decreasebtn">-</button>
            <span class="Quantitycounter">1</span>
            <button class="increasebtn">+</button>
           </div>
           <div class="increasePrice"><span>= Ksh.${(buffet.price * 1).toFixed(2)}</span></div>
            </div>
            <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
           </div>
        </div>
          </div>
    `;
        const pop = document.querySelector(".popItem");
        const nextFilter = pop.querySelector(".left");
        const prevFilter = pop.querySelector(".right");
        const filterContainer = pop.querySelector(".filterTabs");

        nextFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:-200,
                behavior:"smooth"
            });
        });
        prevFilter.addEventListener("click",()=>{
            filterContainer.scrollBy({
                left:200,
                behavior:"smooth"
            });
        });

        let counter = 1;
        const increaseBtn = pop.querySelector(".increasebtn");
        const decreaseBtn = pop.querySelector(".decreasebtn");
        const priceDisplay = pop.querySelector(".increasePrice span");
        const quantityContainer = pop.querySelector(".Quantitycounter");

        increaseBtn.addEventListener("click", () => {
            counter++;
            quantityContainer.textContent = counter;
            priceDisplay.textContent = `= Ksh.${(buffet.price * counter).toFixed(2)}`;
            CartNumberItems.textContent = counter;
            CartbtnContainer.textContent = `${(buffet.price * counter).toFixed(2)}`;
        });
        decreaseBtn.addEventListener("click", () => {
            if(counter>1){
                counter--;
                quantityContainer.textContent = counter;
                priceDisplay.textContent = `= Ksh.${(buffet.price * counter).toFixed(2)}`;
                CartNumberItems.textContent = counter;
                CartbtnContainer.textContent = `${(buffet.price * counter).toFixed(2)}`;
            }
        });

        /*const closePopUp = pop.querySelector(".closePopUp");
        closePopUp.addEventListener("click",()=>{
            popupContainer.classList.remove("active");
        });*/

        //pop msg
        const popbtnContainer = document.querySelector(".pop-cartbtn");
        const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

    addToCartbtn.addEventListener("click",()=>{
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${buffet.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(buffet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(buffet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(buffet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(buffet.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(buffet.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);

    //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${buffet.image}" alt="${buffet.name}">
    </div>
    <p>${buffet.description}</p>
    <h6 class="grandPrice">Ksh.${buffet.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(buffet.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(buffet.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(buffet.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((buffet.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((buffet.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(buffet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(buffet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(buffet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(buffet.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(buffet.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(buffet.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(buffet.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(buffet.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(buffet.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(buffet.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });


    const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = buffet.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});

//checkout codes
closeCheckOut.addEventListener("click",()=>{
    checkoutContainer.classList.remove("active");
    logo.click();
});
checkoutBtn.addEventListener("click",()=>{
    checkClose.style.display = "none";
    checkoutContainer.classList.add("active");
    checkAmount.textContent = ` Ksh.${(buffet.price * counter).toFixed(2)}`;
    ChecktotalItem.textContent = counter;
    if(((buffet.price * counter).toFixed(2))>25000){
         checkDeliveryCharges.innerHTML = "Free";
    }else{
        checkDeliveryCharges.innerHTML = ` Ksh.${((buffet.price * counter)*discount).toFixed(2)}`;
    }     



    //cash payment

   

cashDelivery.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(buffet.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((buffet.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((buffet.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Order placed successful";
}, 3000);

// append order
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Cash on delivery</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${buffet.image}" alt="${buffet.name}">
    </div>
    <p>${buffet.description}</p>
    <h6 class="grandPrice">Ksh.${buffet.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
 
        //checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);
  
    }
    


});




    //online payment

   

online.addEventListener("click",()=>{
     //order name
const name = document.querySelector(".name").value;
// order email
const email = document.querySelector(".email").value;
//order contact
const contact = document.querySelector(".contact").value;
//order address
const adress = document.querySelector(".adress").value;

    if(name ==="" || email === ""||contact === "" || adress === ""){
        msg.innerHTML = `<i class="fa-solid fa-times"></i><p>input order details</p>`;
        msg.style.color = "red";
        return;
    }else{
const newOrderId = `ORD001BHPLX${counter}00Z`;
const totalAmount = ` Ksh.${(buffet.price * counter).toFixed(2)}`;
const itemQuantity = counter;
const deliveryCharges = ((buffet.price * counter).toFixed(2))>25000 ? "Free" : ` Ksh.${((buffet.price * counter)*discount).toFixed(2)}`;

msg.textContent ="Placing order...";
 msg.style.color = "green";
setTimeout(() => {
    msg.textContent = "Waiting for M-pesa confirmation";
}, 3000);

// order appends
let newOrderCard = document.createElement("div");
newOrderCard.className = "orderDetails";
newOrderCard.innerHTML = `
<div>
 <div class="orderId"><span>Order ID:</span><span>${newOrderId}</span></div>
  <!-- Customer Details -->
<div class="section">
  <p><strong>Name:</strong> <span>${name}</span></p>
  <p><strong>Email:</strong> <span>${email}</span></p>
  <p><strong>Phone:</strong> <span>${contact}</span></p>
  <p><strong>Location:</strong> <span>${adress}</span></p>
</div>

 <div class="section">
  <p><strong>Payment Method:</strong> <span>Payment via M-pesa</span></p>
</div>
</div>

<div class="billingCheckout">
    <h5>Order Charges</h5>
    <p><span>Item total</span><span class="checkAmount">${totalAmount}</span></p>
    <p><span>Quantity total</span><span class="ChecktotalItem"><span class="totalorderItems">${itemQuantity}</span>&nbsp;<span>Items</span></span></p>
    <p><span>Delivery Charges</span><span class="checkDeliveryCharges">${deliveryCharges}</span></p>
    <div class="paymentOption">
        <button class="online">Delete</button>
        <button class="cashDelivery">Download</button>
    </div>
</div>

<div class="orderItemsList"></div>
`;

const orders = document.querySelector(".orders");
orders.appendChild(newOrderCard);


const orderItemsList = newOrderCard.querySelector(".orderItemsList");

    name.innerHTML="";
    contact.innerHTML = "";
    adress.innerHTML = "";
    email.innerHTML = "";

 let cartCard = document.createElement("div");
    cartCard.className ="ordercartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${buffet.image}" alt="${buffet.name}">
    </div>
    <p>${buffet.description}</p>
    <h6 class="grandPrice">Ksh.${buffet.price}</h6>
     <!--<div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>-->
    </div>
    `;
    orderItemsList.appendChild(cartCard);
    
    // Clear cart and checkout pages
    setTimeout(() => {
          // Clear all cart items
        cartproductContainer.innerHTML = "";
        // cart billing reset
        cartTotal.innerHTML = "Ksh.0.00";
        totalItems.innerHTML = "0";
        chekPrice.textContent = "Ksh.0.00";
        deliveryFee.innerHTML = "0.00";
         quantityContainer.textContent = "0";
        priceDisplay.textContent = `= Ksh.0.00`;
        CartNumberItems.textContent = "0";
        CartbtnContainer.textContent = ` Ksh.0.00`;
        
        grandPrice.textContent=` Ksh.0.00`;
        cartCounter.textContent="0";
        checkAmount.innerHTML ="Ksh.0.00";
        ChecktotalItem.innerHTML = "0";
        deliveryFee.innerHTML = "Ksh.0.00"


        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".contact").value = "";
        document.querySelector(".adress").value = "";
        
 
       // checkoutContainer.classList.remove("active");
        //logo.click();
    }, 3500);

    }
    


});
    
});


});

   });
});
}
renderBuffets();


const nextBuffet = document.querySelector("#prevBuffets");
const prevBuffet = document.querySelector("#nxtBuffets");
const buffetContainer = document.querySelector("#BuffetsDisplay");

//const scrollAmount = 300;

nextBuffet.addEventListener("click", () => {
    buffetContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

prevBuffet.addEventListener("click", () => {
    buffetContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});




//master product array
const allProducts = [
    ...officeDesk,
    ...officeChair,
    ...gameChair,
    ...fillingCabinet,
    ...workstation,
    ...sofas,
    ...tables,
    ...stands,
    ...cabinets,
    ...beds,
    ...wallDropes,
    ...dressers,
    ...Nightstands,
    ...vanities,
    ...headboards,
    ...footboards,
    ...bedframes,
    ...bedsideTables,
    ...diningTables,
    ...diningChairs,
    ...Sideboards,
    ...buffets
];

//show filtered product function
function showCategoryProducts(categoryName, subName) {
    const productDisplay = document.getElementById("category-product");
    productDisplay.innerHTML = "";

    // filter products by category and subcategory
    const filtered = allProducts.filter(product =>
        product.categoryName === categoryName &&
        product.subCategoryName === subName
    );

    if (filtered.length === 0){
        productDisplay.innerHTML = `<p class="noProduct-Text"><i class="fa-solid fa-chair"></i><span>no products available!</span></p>`;
        return;
    }

    filtered.forEach(product => {
        const filterCards = document.createElement("div");
        filterCards.className = "deskContainer";

        filterCards.innerHTML = `
        <div class="deskOutline">
        <div class="deskImage"><img src="${product.image}" alt="${product.name}"></div>
        <h6><span>${product.name}</span><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span></h6>
        <p class="description">${product.description}</p>
        <p class="itemCategory"><span>${subCategory[0].items[1]}</span><span><s>Ksh.${parseFloat(((product.price)*discount)).toFixed(2)}</s></span></p>
        <div class="price-cartBtn"><div class="price"><span>Ksh.${(product.price).toFixed(2)}</span></div><button><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
        </div>
        `;

        productDisplay.appendChild(filterCards);

        //card click event listner
        filterCards.addEventListener("click",()=>{
        searchPopup.classList.add("active");
        searchinput.innerHTML= `
        <div class="popOutline">
        <div class="popItem">
       <section class="imageScetion">
       <section class="images active"  id="img1">
            <div class="popImage"><img src="${product.image}" alt="${product.name}"></div>
       </section>
       <section class="images"  id="img2">
            <div class="dpopImage"><img src="images/d3.png" alt="${product.name}"></div>
       </section>
       <section class="images"  id="img3">
            <div class="popImage"><img src="images/d23.png" alt="${product.name}"></div>
       </section>
       <section class="images"  id="img4">
            <div class="popImage"><img src="images/d30.png" alt="${product.name}"></div>
       </section>
       <section class="images"  id="img5">
            <div class="popImage"><img src="images/d13.png" alt="${product.name}"></div>
       </section>
       <section class="images"  id="img6">
            <div class="popImage"><img src="images/d21.png" alt="${product.name}"></div>
       </section>
       <section class="images"  id="img7">
            <div class="popImage"><img src="images/d10.png" alt="${product.name}"></div>
       </section>
       <div class="tabs-next-prev">
       <a class="left">&laquo;</a>
       <div class="filterTabs">
       <button onclick="showImage('img1')"><div class="deskImage"><img src="${product.image}" alt="${product.name}"></div></button>
        <button  onclick="showImage('img2')"><div class="deskImage"><img src="images/d3.png" alt="${product.name}"></div></button>
        <button  onclick="showImage('img3')"><div class="deskImage"><img src="images/d23.png" alt="${product.name}"></div></button>
        <button onclick="showImage('img4')"><div class="deskImage"><img src="images/d30.png" alt="${product.name}"></div></button>
        <button onclick="showImage('img5')"><div class="deskImage"><img src="images/d13.png" alt="${product.name}"></div></button>
        <button  onclick="showImage('img6')"><div class="deskImage"><img src="images/d21.png" alt="${product.name}"></div></button>
        <button onclick="showImage('img7')"><div class="deskImage"><img src="images/d10.png" alt="${product.name}"></div></button>
       </div>
      <a class="right">&raquo;</a>
       </div>
       </section>
       <div class="productDetail">
        <h6><span>${product.name}</span> <!--<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span></span>--></h6>
        <p class="popdescription">${product.description}</p>
        <p class="popitemCategory"><span>Category:<span>${subCategory[0].items[1]}</span></span></p>
        <div class="discount">Discount:<span><s>Ksh.${parseFloat(((product.price)*discount)).toFixed(2)}</s></span></div>
      <div class="popPrice">Price:<span>Ksh.${(product.price).toFixed(2)}</span></div>
        <div class="increase-decrease">
       <div class="icreament-Button">
        <button class="decreasebtn">-</button>
        <span class="Quantitycounter">1</span>
        <button class="increasebtn">+</button>
       </div>
       <div class="increasePrice"><span>= Ksh.${(product.price).toFixed(2)}</span></div>
        </div>
        <div class="pop-cartbtn"><button class="addToCartbtn"><i class="fa-solid fa-shopping-cart"></i><span>add</span></button></div>
       </div>
    </div>
    </div>
`;
const nextFilter= document.querySelector(".left");
const prevFilter = document.querySelector(".right");
const filterContainer = document.querySelector(".filterTabs");

nextFilter.addEventListener("click",()=>{
    filterContainer.scrollBy({
        left:-200,
        behavior:"smooth"
    });
});
prevFilter.addEventListener("click",()=>{
    filterContainer.scrollBy({
        left:200,
        behavior:"smooth"
    });
});
    let counter;
    let quantityContainer;
    let  increaseBtn=document.querySelector(".increasebtn");
    let  decreaseBtn=document.querySelector(".decreasebtn");
    let priceDisplay = document.querySelector(".increasePrice span");
    quantityContainer = document.querySelector(".Quantitycounter");
    counter=1;

    increaseBtn.addEventListener("click", () => {
        counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(product.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = `${(product.price * counter).toFixed(2)}`;
    });
     decreaseBtn.addEventListener("click", () => {
        if(counter>1){
            counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(product.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(product.price * counter).toFixed(2)}`;
        }
    });

    /*const closePopUp = document.querySelector(".closePopUp");
    closePopUp.addEventListener("click",()=>{
        popupContainer.classList.remove("active");
    });*/


    //pop short msg

const popbtnContainer = document.querySelector(".pop-cartbtn")
const addToCartbtn = popbtnContainer.querySelector(".addToCartbtn");

addToCartbtn.addEventListener("click",()=>{
   
    msg.innerHTML=`<i class="fa-solid fa-checked"></i><div>${counter} ${product.name} successfully added to cart.</div>`;
    msg.classList.add("active");
    msg.style.color= "green";
     quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(product.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(product.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(product.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(product.price * counter).toFixed(2)}`;
        //grandPrice.textContent=` Ksh.${(product.price * counter).toFixed(2)}`;
        //cartCounter.textContent=counter;

    setTimeout(() => {
        msg.classList.remove("active");
    }, 3000);


     //append item to cart
    let cartCard = document.createElement("div");
    cartCard.className ="cartCard";
    cartCard.innerHTML = `
    <div class="cartOutline">
    <div class="cartImage">
    <img src="${product.image}" alt="${product.name}">
    </div>
    <p>${product.description}</p>
    <h6 class="grandPrice">Ksh.${product.price}</h6>
     <div class="icreament-Button" id="icreament-Button">
        <button id="decreasebtn">-</button>
        <span id="Quantitycounter">1</span>
        <button id="increasebtn">+</button>
       </div>
       <button class="trash"><i class="fa-solid fa-trash"></i></button>
    </div>
    `;
    cartproductContainer.appendChild(cartCard);
     //update cart card price container
    const Quantityprice=document.querySelector(".grandPrice");
    //cart card item quantity
    const Quantitycounter = document.querySelector("#Quantitycounter");
    cartTotal.innerHTML=` Ksh.${(product.price * counter).toFixed(2)}`;
    totalItems.innerHTML=counter;
     chekPrice.textContent=` Ksh.${(product.price * counter).toFixed(2)}`;
      Quantityprice.textContent=` Ksh.${(product.price * counter).toFixed(2)}`;
      Quantitycounter.textContent = counter;

    if((product.price * counter)>25000){
        deliveryFee.innerHTML="Free";
    }else{
        let finaldelivery =`${((product.price * counter)*discount).toFixed(2)}`; 
        deliveryFee.innerHTML = finaldelivery;
    }

 //cart item increament
    const incrDecContainer= document.querySelector("#icreament-Button");
    //cart increamnet button
    const increaseCartItem = incrDecContainer.querySelector("#increasebtn");
    //decrease cart button
    const decreaseCartItem = incrDecContainer.querySelector("#decreasebtn");
    //cart grand price
    const grandPrice =document.querySelector(".grandPrice");
    //cart card counter
    const cartCounter = document.querySelector("#Quantitycounter");
   
    increaseCartItem.addEventListener("click",()=>{
            counter++;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(product.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(product.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(product.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(product.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(product.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item added"
    });

     decreaseCartItem.addEventListener("click",()=>{
        if(counter>1){
                counter--;
        quantityContainer.textContent = counter;
        priceDisplay.textContent = `= Ksh.${(product.price * counter).toFixed(2)}`;
        CartNumberItems.textContent = counter;
        CartbtnContainer.textContent = ` ${(product.price * counter).toFixed(2)}`;
        totalItems.textContent =counter;
        cartTotal.textContent=`= Ksh.${(product.price * counter).toFixed(2)}`;
        chekPrice.textContent=`= Ksh.${(product.price * counter).toFixed(2)}`;
        grandPrice.textContent=` Ksh.${(product.price * counter).toFixed(2)}`;
        cartCounter.textContent=counter;
        msg.textContent="Item removed";
        }
    });
const trashBtn = cartCard.querySelector(".trash");

    trashBtn.addEventListener("click", () => {
    // reduce total values
    let removedTotal = product.price * counter;

    // update totals
    let currentTotal = parseFloat(cartTotal.textContent.replace("Ksh.",""))|| 0;
    let currentItems = parseInt(totalItems.textContent) || 0;

    cartTotal.textContent = ` Ksh.${(removedTotal-currentTotal).toFixed(2)}`;
    totalItems.textContent = currentItems - counter;
    chekPrice.textContent = ` Ksh.${(currentTotal - removedTotal).toFixed(2)}`;
    deliveryFee.textContent = parseFloat(0).toFixed(2);

    // remove item
    cartCard.remove();

    msg.textContent = "Item removed from cart";
});



});
});
        //end
    });
}

function loadSubcategories(categoryName){
    const sidebar = document.getElementById("subcategory-list");
    sidebar.innerHTML = "";

    const cat = subCategory.find(c => c.name === categoryName);
    if (!cat) return;

    cat.items.forEach((sub, index) => {
        const btn = document.createElement("button");
        btn.className = "sub-btn";
        btn.textContent = sub;

        btn.addEventListener("click", () => {
            document.querySelectorAll(".sub-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            showCategoryProducts(categoryName, sub);
        });

        sidebar.appendChild(btn);

        // auto-click first subcategory
        if (index === 0) btn.click();
    });
}


