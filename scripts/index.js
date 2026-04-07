let bagItems=[];
onLoad()
function onLoad() {

    let bagItemsStr = localStorage.getItem("bagItems")
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []
  console.log("bagItems:", bagItems);
 
    displayBagIcon()
    displayItemsOnHomepage();
}

function addToBag(itemID) {
    bagItems.push(itemID)
        localStorage.setItem('bagItems', JSON.stringify(bagItems))


    
    displayBagIcon()
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector(".bag-item-count");
    if (bagItems.length > 0) {
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = "visible";
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }

}

function displayItemsOnHomepage() {

    let itemsContainerElement = document.querySelector(".items-container")
    if(!itemsContainerElement){
        return;
    }
    let innerHtml = ''
    items.forEach(item => {

        innerHtml = innerHtml +
            `     <div class="item-container">
                            <img class="item-image" src="${item.image}" alt="">
                            <div class="rating">${item.rating.stars}⭐|${item.rating.count} </div>
                            <div class="company-name">${item.company}</div>
                            <div class="item-name">${item.item_name}</div>
                            <div class="price">
                                <span class="current-price">Rs. ${item.current_price}</span>
                                <span class="original-price">Rs. ${item.original_price}</span>
                                <span class="discount">(${item.discount_percentage}% OFF)</span>
                            </div>
                            <button onclick="addToBag(${item.id})" class="btn-add-bag">Add to Bag</button>

                        </div>
                        `;
    });

    itemsContainerElement.innerHTML = innerHtml

}

