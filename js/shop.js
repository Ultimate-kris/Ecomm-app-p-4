let products=[
    {
       
        "name": "Premium Leather Bag",
        "description": "Handcrafted leather bag with multiple compartments and adjustable strap. Ideal for daily use or travel.",
        "price": 129.99,
        "image": "https://placehold.co/400x300?text=Premium+Leather+Bag"
    },
    {
        
        "name": "Smart Watch Series 5",
        "description": "Advanced smartwatch with GPS, heart rate monitoring, and waterproof design. Comes in multiple colors.",
        "price": 199.99,
        "image": "https://placehold.co/400x300?text=Smart+Watch+Series+5"
    },
    {
        
        "name": "Wireless Noise Cancellation Headphones",
        "description": "High-fidelity wireless headphones with active noise cancellation and up to 30 hours of battery life.",
        "price": 299.99,
        "image": "https://placehold.co/400x300?text=Wireless+Headphones"
    },
    {
         
        "name": "Designer UV Sunglasses",
        "description": "Fashionable sunglasses with UV protection and scratch-resistant lenses. Available in various styles.",
        "price": 79.99,
        "image": "https://placehold.co/400x300?text=Designer+Sunglasses"
    },
    {
        
        "name": "Gourmet Coffee Gift Set",
        "description": "A curated selection of gourmet coffee beans from around the world. Perfect gift for coffee lovers.",
        "price": 49.99,
        "image": "https://placehold.co/400x300?text=Gourmet+Coffee+Gift+Set"
    },
    {
        
        "name": "Fitness Tracker Bracelet",
        "description": "Waterproof fitness tracker with heart rate monitor, sleep tracking, and smartphone notifications.",
        "price": 89.99,
        "image": "https://placehold.co/400x300?text=Fitness+Tracker+Bracelet"
    },
    {
      
        "name": "Portable Bluetooth Speaker",
        "description": "Compact Bluetooth speaker with powerful sound and built-in microphone for hands-free calls.",
        "price": 59.99,
        "image": "https://placehold.co/400x300?text=Bluetooth+Speaker"
    },
    {
        
        "name": "Professional Chef's Knife",
        "description": "High-quality chef's knife made from Damascus steel. Perfect for slicing and dicing in the kitchen.",
        "price": 149.99,
        "image": "https://placehold.co/400x300?text=Chef's+Knife"
    }
]

const container=document.querySelector("#shopProContainer");

function render(product){
    let emptyData="";
    product.forEach((pro)=>{
        emptyData += createdUi(pro);
    })
    container.innerHTML=emptyData;
}
render(products);

function createdUi(pro){
   return `
   <div class="shopCard">
 <img src="${pro.image}"/>
 <h3>${pro.name}</h3>
 <p>${pro.description}</p>
 <h4>$${pro.price}</h4>
 <div class="shopBtns">
 <input value="1" class="shopInput" min="1" max="10" name="number" type="number" required placeholder="1">
 <button  class="addToCartBtn" dataProduct='${JSON.stringify(pro)}' type="button">Add to Cart</button>
 </div>
</div>
   `;
}

// extracting the clickable product
 const addToCartBtn=document.querySelectorAll(".addToCartBtn");
    addToCartBtn.forEach((btn)=>{
        btn.addEventListener("click",addToCart)
    });

function addToCart(e){
            alert("Product has Added to Cart")
    console.log("clicked")
let selectedProduct=JSON.parse(e.target?.getAttribute("dataProduct"));
let selectedCard=e.target.closest(".shopCard");
let quantity=Number(selectedCard.querySelector(".shopInput").value);
console.log(selectedProduct,quantity);

let cartItem={
    ...selectedProduct,
    quantity
}
let currentCart=JSON.parse(localStorage.getItem("cart")) || []

let findingProduct=currentCart.findIndex((cart)=>{
    return cart.name===cartItem.name;
})
if(findingProduct==-1){
currentCart.push(cartItem)
}else{
currentCart[findingProduct].quantity+=cartItem.quantity
}

localStorage.setItem("cart",JSON.stringify(currentCart))

}
