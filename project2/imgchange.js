let imge = document.getElementById("imge");

let imgeArray = ["media/images/acuransx.png",
                 "media/images/nissan34.png",
                 "media/images/mclaren1.png",
                 "media/images/m4g8x.png",
                 "media/images/vettec08.png",];

let imgIndex = 0;

function imgeChange() {
  imge.setAttribute("src", imgeArray[imgIndex]);
  imgIndex++;
  if (imgIndex >= imgeArray.length){
     imgIndex = 0;
  }
}

setInterval(imgeChange, 5000);






/*document.querySelectorAll('.add-to-cart').forEach(button => {

    button.addEventListener('click', () => {

        const carName = button.dataset.name;

        const carPrice = button.dataset.cost;

        addCart(carName, carPrice, button);

    });
 needed DOMContentLoader this didnt work wothout it
});*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const carName = button.getAttribute('data-car'); // or use dataset.name
            addCart(carName, button);
        });
    });
});





let totalCost = 0;


            function addCart(carName) {
                
                const button = event.target;
        
                
                if (!button.clickCount) {
                    button.clickCount = 0;
                }

               


                
        
               
                button.clickCount++;
        
               
                if (button.clickCount === 2) {
                 
                    button.clickCount = 0;

                    const carPrice = parseFloat(button.getAttribute("data-cost"));

                    totalCost += carPrice;

                    document.getElementById("cart-total").textContent = "Total: $" + totalCost.toFixed(2);


        
                  
                    let cartList = document.getElementById("cart-items");
        
              
                    let newItem = document.createElement("li");
        
       
                    let textNode = document.createElement("span");
                    textNode.textContent = carName + " added to cart";
                    textNode.classList.add("cart-item-text"); 
        
                  
                    newItem.appendChild(textNode);
        
               
                    let removeItem = document.createElement("button");
                    removeItem.textContent = "Remove From Cart";
                    removeItem.classList.add("remove-button");
        
                    removeItem.addEventListener("click", function () {
                        cartList.removeChild(newItem);

                        totalCost -= carPrice

                        document.getElementById("cart-total").textContent = "Total: $" + totalCost.toFixed(2);
        
                   
                        if (cartList.children.length === 0) {
                            document.getElementById("empty-cart-msg").style.display = "block";
                        }
                    });
        
                  
                    newItem.appendChild(removeItem);
        
                    
                    cartList.appendChild(newItem);
                    newItem.classList.add("show");
        
                    
                    if (cartList.children.length === 1) {
                        document.getElementById("empty-cart-msg").style.display = "none"; 
                    }
                    showToast(carName + " has been added to your cart!");
                }

              
            }

       
function removeAllItems() {
    const cartList = document.getElementById("cart-items");

    
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }


    totalCost = 0;


    document.getElementById("cart-total").textContent = "Total: $0.00";

 
    document.getElementById("empty-cart-msg").style.display = "block";
}


document.getElementById("remove-all-button").addEventListener("click", removeAllItems);




