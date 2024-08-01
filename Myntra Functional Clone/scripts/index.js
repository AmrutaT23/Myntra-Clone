let bagItem = [];
onLoad();

function onLoad(){
    let bagItemstr = localStorage.getItem('bagItem')
    bagItem = bagItemstr ? JSON.parse(bagItemstr) : [];
    display_itemonpage();
    display_count();
}

function addToBag(itemID){
bagItem.push(itemID);
localStorage.setItem('bagItem',JSON.stringify(bagItem))
display_count();
}

function display_count(){
let bagCount = document.querySelector(".bag-item-count")
// let bagCount1 = document.querySelector(".bag-item-count")


if(bagItem.length > 0){
    bagCount.style.visibility = 'visible';
    bagCount.innerText = bagItem.length;
}
else{
    bagCount.style.visibility = 'hidden';
}

}

function display_itemonpage(){
    let itemscontainer = document.querySelector(".items-container")
    if(!itemscontainer)
    {
        return;
    }
    let innerhtml = '';
    items.forEach(item =>{
    innerhtml +=`<div class="item-container">
        <img class="item-image"  src="${item.image}" alt="item_1">
        <div class="rating">${item.rating.stars} 🌟 | ${item.rating.count} </div>
        <div class="comapny">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price} </span>
            <span class="original-price">Rs ${item.original_price} </span>
            <span class="discount">(${item.discount_percentage}% off)</span>
        </div>
        <button class="btn-add" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`
    })
    
    
    itemscontainer.innerHTML =innerhtml;
    
}
