let bagItemobjects;
onLoad();

function onLoad(){
    
    bagItemObj();
    bagItem_cart();
    displayBagSummary();
}

function bagItemObj(){
console.log(bagItem);
bagItemobjects = bagItem.map(item=>{
    for(let i=0;i<items.length;i++)
    {
        if(item == items[i].id){
            return items[i];
        }
    }
})
console.log(bagItemobjects)
}


function bagItem_cart(){
    let bagitem = document.querySelector('.bag-items-container');
    let innerHTML ='';
    bagItemobjects.forEach(element => {
        innerHTML += generateItem(element);
    });
    bagitem.innerHTML = innerHTML;
    

}
function removebag(itemId){
    bagItem = bagItem.filter(bagItemid =>bagItemid != itemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
    bagItemObj();
    display_count();
    bagItem_cart();
    displayBagSummary();

}
function generateItem(item){
return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="../${item.image}">
        </div>
        <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return-period">
            <span class="return-period-days">${item.return_period} days</span> return available
            </div>
            <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
        </div>
        <div class="remove-from-cart" onclick="removebag(${item.id})">X</div>
    </div>`
}

function displayBagSummary(){
    let bagSummary = document.querySelector('.bag-summary');
    let totalItem = bagItemobjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    let finalPayment = 0;

    bagItemobjects.forEach(bagitem =>{
        totalMRP += bagitem.original_price;
        totalDiscount += bagitem.original_price - bagitem.current_price;
        
    })
    finalPayment = totalMRP - totalDiscount + 99;
    bagSummary.innerHTML = `
    <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem}Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`
    
}






















