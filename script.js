// nav link toggle
// const navA = document.getElementById('nav-link')
// navA.innerHTML = `

// `
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};

// remove active
const removeActive = ()=>{
  const unActiveBtn = document.querySelectorAll(".un-active");
  // console.log(unActiveBtn);
  unActiveBtn.forEach(btn => btn.classList.remove("active"))
}

// loadCart
const loadCart = (id)=>{
  manageSpinner(true)
  // console.log(id);
  const Url = `https://openapi.programming-hero.com/api/category/${id}`
removeActive();

  fetch(Url)
  .then(res=> res.json())
  .then(data => {
    const clickBtn = document.getElementById(`trees-btn-${id}`)
    // console.log(clickBtn);
    clickBtn.classList.add("active")



    showCart(data.plants
)
// console.log(data.plants)
  })
}


// manage spinner
const manageSpinner = (status)=>{
  if(status===true){
    document.getElementById("spinner").classList.remove("hidden")
    document.getElementById("cart-section").classList.add("hidden")
  }else{
    document.getElementById("cart-section").classList.remove("hidden")
    document.getElementById("spinner").classList.add("hidden")
  }
}

// total price count
const totalPrice = ()=>{
const tPrice = document.getElementById("total-price");
// console.log(tPrice)

}
totalPrice();

// price getting
let total = 0;

const cartBtn = (button) =>{
const name = button.getAttribute("data-name");
  let price = button.getAttribute("data-price");

  // Ensure price is a number
  price = Number(price);

  // console.log(name)
  // console.log(price)


  const bookmark = document.getElementById("bookmark")
// bookmark.innerHTML = ""


const cart = document.createElement("div")
cart.innerHTML = `

<div class="flex justify-between">
           
          <div class="bg-[#F0FDF4] w-full h-[64px] flex justify-between items-center p-2">
            <div>
              <h1>${name}</h1>
              <p>৳<span >${price}</span> x 1</p>
            </div>
            <div class="ml-[60px]"">
            <i id="delete-item" class="fa-solid fa-xmark class="ml-[60px]"></i>
            </div>
            <hr>

            </div>
            

`
const totalPriceEl = document.getElementById("total-price")

 cart.querySelector("i").addEventListener("click", () => {
  console.log(' click btn')
    cart.remove();
    total -= price;
    totalPriceEl.innerText = total;
  });

bookmark.append(cart)

total += price;
  totalPriceEl.innerText = total;

  // name.forEach(num => num.)


  // bookMark(name, price);
  // const bookmark = document.getElementById("bookmark")
  // const itemName = document.getElementById("item-name")
  // const totalPrice = document.getElementById("total-price")
  const deleteItem = document.getElementById("delete-item")
// console.log(deleteItem)
  // console.log('iam jahid')
// const name = itemName.innerHTML = '${show.name}'
// console.log(name)

}





const showModal =(image, category, description, price, name)=>{
  const modalElement = document.getElementById('my_modal_5')
  
modalElement.innerHTML = `


  <div class="modal-box">
    <h3 class="text-lg font-bold">${category}</h3>
    <div class="px-10 pt-10   rounded-4xl">
    <img class="rounded-4xl w-[311px] h-[186px]"
      src="${image}"
      alt="Shoes"
      />
  </div>
    <p class="py-4">category:
      ${name}
    </p>
    <p>
    ${price}
    </p>
    <div class="modal-action flex justify-between">
      <form method="dialog">
        ${description}
         <button class="btn btn-primary">Close</button>
      </form>
    </div>
  </div>


`

  modalElement.showModal(); 
}

// category
// : 
// "Bamboo"
// description
// : 
// "An exotic bamboo variety with striking black stems. Often used for ornamental purposes and furniture making."
// id
// : 
// 23
// image
// : 
// "https://i.ibb.co.com/BKZ52h3q/black-bamboo-min.jpg"
// name
// : 
// "Black Bamboo"
// price
// : 
// 900
// show data in cart
const showCart = (shows) => {
  
  // console.log(shows);
  const cartSection = document.getElementById('cart-section')
  cartSection.innerHTML = "";

  shows.forEach(show => {
    // console.log(show);
const cart = document.createElement("div")
cart.innerHTML = `
<div class="card bg-base-100 w-[343px] h-[450px] shadow-sm pt-3 ">
  <figure class="px-10 pt-10 w-[311px] h-[186px] rounded-4xl">
    <img class="rounded-4xl"
      src="${show.image}"
      alt="Shoes"
      />
  </figure>
  <div class="card-body  ml-3 w-[311px]">
    <h2 onclick="showModal('${show.image}', '${show.category}', '${show.description}', '${show.price}', '${show.name}')" class="text-2xl font-semibold ">${show.category}</h2>
    <p>
      ${show.description}
    </p>
    <div class="flex justify-between">
      <span class="bg-[#DCFCE7] rounded-3xl text-green-700 px-[10px] py-2" id="item-name">${show.name}</span>
      <span id="price">৳${show.price}</span>
    </div>
    <div class="card-actions">
      <button onclick="cartBtn(this)"
  data-name="${show.name}"
  data-price="${show.price}" class="btn bg-green-600 w-full rounded-3xl font-bold">Add to Cart</button>
    </div>
  </div>
</div>

`;
cartSection.append(cart)



  });
  manageSpinner(false);
}
// // Attach modal show event
//   cart.querySelector(".show-modal-btn").addEventListener("click", () => {
//     document.getElementById("my_modal_5").showModal();
// }
// )


// categories added
const displayCategories = (categories) => {
  const categoriesSection = document.getElementById("categories-section");
  categoriesSection.innerHTML = "";
  categories.forEach((cate) => {
    const btnDivName = cate.category_name;
    // console.log(cate);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button id="trees-btn-${cate.id}" onclick="loadCart(${cate.id})" class="btn border-none bg-inherit w-full space-y-2 un-active">${btnDivName}</button>
    `;

    // 4. append into container
categoriesSection.append(btnDiv)
  });
};


loadCategories();
