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
  })
}



const openModal =()=>{
  const modalElement = document.getElementById('my-modal-4')
  console.log(modalElement);
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
    <h2 onclick="openModal()" class="text-2xl font-semibold ">${show.category}</h2>
    <p>
      ${show.description}
    </p>
    <div class="flex justify-between">
      <span class="bg-[#DCFCE7] rounded-3xl text-green-700 px-[10px] py-2">${show.name}</span>
      <span>৳${show.price}</span>
    </div>
    <div class="card-actions">
      <button class="btn bg-green-600 w-full rounded-3xl font-bold">Add to Cart</button>
    </div>
  </div>
</div>

`;
cartSection.append(cart)
  });
}


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
