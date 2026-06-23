let container=document.querySelector(".cartCardContainer")
let total=document.querySelector("#total")
let submit=document.querySelector("#submit");
let remove=document.querySelector("#remove");

let finalCart=JSON.parse(localStorage.getItem("cart")) || [];

console.log(finalCart);

function render(item){
        let emptyCart=""
        if(item.length === 0){
            total.innerText = "$0"
    return container.innerHTML=`Add some Product`
   
        }
item.forEach((cart,index)=>{
    emptyCart=emptyCart+createdUi(cart,index)
})

 container.innerHTML=emptyCart;
}
render(finalCart)
calculateTotal();


function createdUi(cart,index){
    return `
    <div class="cartItem">
<div class="cartImage">
<img src="${cart.image}" />
</div>
<h3>${cart.name}</h3>
<h4>$${cart.price}</h4>
<div class="cartBtns">
<input class="inputQty" id=${index} value=${cart.quantity} type="number" min="1" max="50"/>
<button class="removeBtn" id=${index}>Remove</button>
</div>
</div>
    `
}

container.addEventListener("click",(e)=>{
let clicked=e.target;
if(clicked.classList.contains("removeBtn")){
    let index=clicked.id; 
    finalCart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(finalCart));
    render(finalCart)
    calculateTotal();
}
})
container.addEventListener("input",(e)=>{
let clicked=e.target;
if(clicked.classList.contains("inputQty")){
    let value=Number(clicked.value);
    let index=clicked.id;
    finalCart[index].quantity=value;
        localStorage.setItem("cart",JSON.stringify(finalCart))
        render(finalCart);
        calculateTotal();
}
})


function calculateTotal(){
   let grandTotal=0;
   finalCart.forEach(cart=>{
  let itemTotal= cart.quantity*cart.price
  grandTotal=grandTotal+itemTotal;
   }) 
        total.innerText=`$${parseInt(grandTotal)}`;

}

submit.addEventListener("click",()=>{
alert("Proceed To Checkout ?")
})