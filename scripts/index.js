let bagitems = [];
displayItemsonHomePage();
function addtobag(itemId){
  bagitems.push(itemId);
}

function displaybagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  bagItemCountElement.innerText = bagitems.length;
}

function displayItemsonHomePage(){
  let itemsContainerElement = document.querySelector('.items-container');
  /*let item = {
    item_image:'images/1.jpg',
    ratings:{
      stars: 4.5,
      noofreviews: 1400,
    },
    company_name:'DecorIndia',
    item_name: 'Ganesh-Diya',
    current_price:199,
    original_price:499,
    discount:60,
  }*/
  
  let innerHTML='';
  items.forEach(item => {
    innerHTML += `<div class = "item-container">
                  <img class = "item-image" src ="${item.image}" alt="item image">
                  <div class = "rating">
                      ${item.rating.stars} ⭐ | ${item.rating.count}
                  </div>
                  <div class = "company-name">${item.company}</div>
                  <div class = "item-name">${item.item_name}</div>
                  <div class = "price">
                      <span class = "current-price">Rs ${item.current_price}</span>
                      <span class = "original-price">Rs ${item.original_price}</span>
                      <span class = "discount">(${item.discount_percentage}% OFF)</span>
                  </div>
                  <button class = "btn-add-bag" onclick="addtobag(${item.id})">Add to Bag</button>
              </div>`
  });
  itemsContainerElement.innerHTML = innerHTML;
}
