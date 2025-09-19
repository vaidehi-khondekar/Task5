// Product data (could be fetched from API)
const products = [
  {id:1,name:"Wireless Earbuds",price:1299,img:"pods.webp"},
  {id:2,name:"Smartwatch",price:2499,img:"watch.webp"},
  {id:3,name:"Bluetooth Speaker",price:999,img:"speaker.jpeg"},
  {id:4,name:"Gaming Mouse",price:799,img:"mouse.jpg"}
];

const productList=document.getElementById('product-list');
const cartItemsContainer=document.getElementById('cart-items');
const cartCount=document.getElementById('cart-count');
const cartTotal=document.getElementById('cart-total');
const checkoutBtn=document.getElementById('checkout-btn');

let cart=[];

// Render products
products.forEach(p=>{
  const card=document.createElement('div');
  card.className='card';
  card.innerHTML=`
    <img src="${p.img}" alt="${p.name}" loading="lazy">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(card);
});

function addToCart(id){
  const product=products.find(p=>p.id===id);
  cart.push(product);
  updateCart();
}

function updateCart(){
  cartItemsContainer.innerHTML='';
  let total=0;
  cart.forEach((item,index)=>{
    total+=item.price;
    const div=document.createElement('div');
    div.className='cart-item';
    div.innerHTML=`
      ${item.name} - ₹${item.price}
      <button class="btn" onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });
  cartCount.textContent=cart.length;
  cartTotal.textContent=`Total: ₹${total}`;
}

function removeItem(index){
  cart.splice(index,1);
  updateCart();
}

checkoutBtn.addEventListener('click',()=>{
  if(cart.length===0){
    alert('Your cart is empty!');
  } else {
    alert('Checkout successful! (Demo only)');
    cart=[];
    updateCart();
  }
});