var shoppingcart = JSON.parse(localStorage.getItem('shoppingcart'));

function initSite() {
   printcostumerProduct();    
   clicker();
}

function clicker() {
    var clickHolder = document.getElementById('clicks');
    var clicks = 0;

   if( shoppingcart != null) {
       clicks = shoppingcart.length;
       clickHolder.innerHTML = clicks;

   } else if( shoppingcart == 0 ) {
       clickHolder.innerHTML = clicks;

   }
    
}

function  printcostumerProduct() {
    
    for ( i = 0; i < shoppingcart.length; i++) {
        if(shoppingcart != null) {
            printobjekt();
            
        } 
        
    }
    
    totalPrice();
    var placeholder = document.getElementById('endBuyAndTotalPrice');
    var EndBuyButton = document.createElement('button');
    var Icon = document.createElement('i');

 
    EndBuyButton.setAttribute('class', 'fas');
    Icon.setAttribute('class', 'fa-check'); 

  

    Icon.id = "enbuyIcon"
    EndBuyButton.id = "endbuy";
    EndBuyButton.innerHTML =  "Slutför ditt köp";

    EndBuyButton.appendChild(Icon);
    placeholder.appendChild(EndBuyButton);
    
    EndBuyButton.onclick = function() {
        EndBuy(); 
    }

    var nullitems = document.getElementById('endbuy');
    var nullprice = document.getElementById('totalPrice');

    if(shoppingcart == 0) {
        alert("Det finns inget i din kundvagn");
        $(nullitems).hide();
        $(nullprice).hide();
    
    }
     
} 


function printobjekt() {

    var placeholder = document.getElementById('print');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var title = document.createElement('p');
    var PrIMg = document.createElement('img');
    var price = document.createElement('p');
    var button = document.createElement('button');
    var trashIcon = document.createElement('i');
    var position = shoppingcart[i];
 
    button.setAttribute('class', 'far');
    trashIcon.setAttribute('class', 'fa-trash-alt'); 
    
    
    trashIcon.id = "trash"
    ul.id = "list"
    PrIMg.id = "shoppingcartimg"
    title.id = "productTitle";
    button.id = "taBortKnapp";
    price.id = "productPrice";
  
    button.onclick = function () {

        var index = shoppingcart.indexOf(position);
        shoppingcart.splice(index, 1 );
        localStorage.setItem('shoppingcart', JSON.stringify(shoppingcart));
        location.reload();   
      
    };
    
    title.textContent = shoppingcart[i].userID.title;
    PrIMg.src = shoppingcart[i].userID.image;
    button.innerHTML = "Ta bort";
    price.textContent = shoppingcart[i].userID.price + ":kr";
    
    
    li.appendChild(title);
    li.appendChild(PrIMg);
    li.appendChild(price);
    li.appendChild(button);
    button.appendChild(trashIcon)
    ul.appendChild(li);
    placeholder.appendChild(ul);
     
}

 function totalPrice() {
  var val = 0 ;
   for ( i = 0; i < shoppingcart.length; i++) {
      var indexPrice = shoppingcart[i].userID.price
       if(shoppingcart != null) {
           val += indexPrice
       } else if(shoppingcart == 0) {
             val = 0;
       }
   }
     var placeholder = document.getElementById('endBuyAndTotalPrice');
     var price = document.createElement('p');

    price.id = "totalPrice"
    price.textContent = "Totalt pris: " + val + "  kr"
    placeholder.appendChild(price); 
 }

 function EndBuy() {
    var user = JSON.parse(localStorage.getItem('isloggedIn'))

    if(user != null) {

        AddOrderToRegister();
        localStorage.removeItem('shoppingcart');
        alert( "Tack "+ user.userName + " din beställning är motagen");
        location.reload();
        
    } 
    else {
        alert("Du har slutfört ditt köp");
        localStorage.removeItem('shoppingcart');
        location.reload();
    }

 }

 function AddOrderToRegister() {
 
    var transactionregister = JSON.parse(localStorage.getItem("transactionregister")) 
    if (!transactionregister) transactionregister = [];
    
    var userloggedin = JSON.parse(localStorage.getItem('isloggedIn'));
    var shoppingcart = JSON.parse(localStorage.getItem('shoppingcart'))

    prevPurchPlusUser = {

        "userName": userloggedin.userName,
        "shoppingcart": shoppingcart
    }

    transactionregister.push(prevPurchPlusUser);
    localStorage.setItem("transactionregister", JSON.stringify(transactionregister)); 
}