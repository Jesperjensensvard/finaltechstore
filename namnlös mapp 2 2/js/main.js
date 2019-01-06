var listOfProducts = loadProducts();
var ckiclkerCount = JSON.parse(localStorage.getItem('shoppingcart'));

function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
              
    });
}

function initSite() {
    loadProducts();
    showUser();
    createSite();
}

function clicker() {
    var clickHolder = document.getElementById('clicks');
    var clicks = 0;
    

   if( ckiclkerCount != null) {
       clicks = ckiclkerCount.length;
       clickHolder.innerHTML = clicks;

   } else if( ckiclkerCount == 0 ) {
       clickHolder.innerHTML = clicks;

   }
    
}

function createSite() {
    clicker();
    for ( i = 0; i <= listOfProducts.length; i++) {
        if(true) {
            loadSite();
            
        } 
        
    }

}

function loadSite() {
    var placeholder = document.getElementById('mainpage')
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var productTitel = document.createElement('h1');
    var productInformation = document.createElement('p');
    var productImage = document.createElement('img');
    var productPrice = document.createElement('p');
    var button = document.createElement('button');
    var icon = document.createElement('i');

    button.setAttribute('class', 'fas');
    icon.setAttribute('class','fa-cart-arrow-down' );
    
    

    ul.id = "ul";
    li.id = "li";
    productTitel.id = "title";
    productInformation.id = "infromation";
    productImage.id = "image";  
    productPrice.id = "price";
    icon.id = "buttonIcon";
    button.id = "button";
     
    var name = listOfProducts[i];    
    
    productTitel.textContent = listOfProducts[i].title;
    productInformation.textContent = listOfProducts[i].description;
    productImage.src = listOfProducts[i].image;
    productPrice.textContent = listOfProducts[i].price + ":kr";
    button.innerHTML = "Lägg till i kundvagnen";
    
    
    button.onclick = function () {
        
        var existingEntries = JSON.parse(localStorage.getItem("shoppingcart"));
        if(existingEntries == null) existingEntries = [];
        
        var phone = name;
        
        
        var costumerItem = {
            "userID": phone
            
        };
        
        existingEntries.push(costumerItem);
        localStorage.setItem("shoppingcart", JSON.stringify(existingEntries));
        location.reload();
        
    };
    
    
    placeholder.appendChild(ul)
    
    ul.appendChild(li);
    li.appendChild(productTitel);
    li.appendChild(productInformation);
    li.appendChild(productImage);
    li.appendChild(productPrice);
    li.appendChild(button);
    button.appendChild(icon);


}

function clearCart() {
        localStorage.removeItem('shoppingcart');  
        location.reload(); 
}
    
function showUser() {

    var localLoggedUser = JSON.parse(localStorage.getItem('isloggedIn'));
    var UserNameOutputField = document.getElementById('showUserName');
    
    if(localLoggedUser != null){

        UserNameOutputField.innerHTML = "welcome!" + ":" + '\xa0' + localLoggedUser.userName ;
        $("#loggInButton2").prop("value",'Log out');   
        changeButtonFunction(); 
        $("#loggainknapp").hide(); 
    
    } else {
        $("#loggInButton2").hide(); 
    }

}

function changeButtonFunction() {

    document.getElementById('loggInButton2').setAttribute( "onClick", "javascript: LogOut(); ;" );

} 

function LogOut() {

    if (true) {
        localStorage.removeItem('isloggedIn')
        localStorage.removeItem('shoppingcart')
        window.location.reload();              
    }
};



