// Variables
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");




menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


 // Functions
function toggleDesktopMenu(){
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu(){
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
    
}

const requestUrl = "https://marcosamos.github.io/wdd330/final-proyect/products.js"

fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
    });

// function renderProducts(arr){

//     for (product of arr){
//         const productCard = document.createElement("div");
//         productCard.classList.add("product-card");
    
//         const productImg = document.createElement("img");
//         productImg.setAttribute("src", product.image);
//         productImg.addEventListener("click", openProductDetailAside);


//         const producInfo = document.createElement("div");
//         producInfo.classList.add("product-info");
    
    
//         const productInfoDiv = document.createElement("div");
    
//         const productPrice = document.createElement("p");
//         productPrice.innerText = `$ ${product.price}`;
    
//         const productName = document.createElement("p");
//         productName.innerText = `$ ${product.name}`;
    
//         productInfoDiv.appendChild(productPrice);
//         productInfoDiv.appendChild(productName);
    
//         const productInfoFigure = document.createElement("figure");
//         const productImgCart = document.createElement("img");
//         productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
//         productInfoFigure.appendChild(productImgCart);
        
//         producInfo.appendChild(productInfoDiv);
//         producInfo.appendChild(productInfoFigure);
        
//         productCard.appendChild(productImg);
//         productCard.appendChild(producInfo);
    
//         cardsContainer.appendChild(productCard);
//     }
// }

// renderProducts(productList);