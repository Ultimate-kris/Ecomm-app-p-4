// fetching product api for featured section 
// index.html
let container=document.querySelector('.productCard');

fetch("https://fakestoreapi.com/products")
.then((response)=> response.json())
.then((data)=>{
    console.log(data);
let product=data.slice(0,10)
    renderProducts(product);
})
.catch((err)=>{
    console.log(err);
     container.innerHTML=`
     <h2>Failed to load products.</h2>`
})

function renderProducts(products){
    let cards=""
    products.forEach((product)=>{
      cards+=createProductCard(product)
    })
    container.innerHTML=cards;
}
function createProductCard(product){
return `
<div class="proCard">
 <img src="${product.image}"/>
 <h5>${product.title} </h5>
 <p>$${product.price}</p>
 </div>
`
}

// fetching product api for product featured comparison table section
// index.html
let tbodyContainer=document.querySelector(".tbody");

fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then((data)=>{
    let tableData=data.slice(0,5);
    renderTab(tableData);
})
.catch((err)=>{
    console.log(err);
     tbodyContainer.innerHTML=`
     <h2>Failed to load TableData.</h2>`
})

function renderTab(data){
    let emptyData=""
    data.forEach((d)=>{
emptyData=emptyData+createTable(d);
    })
    tbodyContainer.innerHTML=emptyData;
}

function createTable(d){
return `
<tr>
                <td>${d.title}</td>
                <td>$${d.price}</td>
                <td>${d.description}</td>
                <td>N/A</td>
                <td>N/A</td>
            </tr>
`
}


