function check() {

   
     var users = JSON.parse(localStorage.getItem("allCostumer"));
     var userName = document.getElementById('userNameCheck').value; 
     var userPassword = document.getElementById('passwordCheck').value;
 
         for (var i = 0; i < users.length; i++) {
           
             if(users[i].userName == userName && users[i].password == userPassword) {
                 IsLogin()
                   LoadfirstPage();   
                   IsLogin();
                   grabShoppingList();
 
                 break;           
             }
  
     }
 
 };


function LoadfirstPage() {

    window.location = "index.html"; 

}


 function IsLogin() {
 
     var loggedInUSer = JSON.parse(localStorage.getItem("transaction"))
     if(loggedInUSer == null) loggedInUSer = [];
     var userName = document.getElementById('userNameCheck').value; 
     var userPassword = document.getElementById('passwordCheck').value;
     
         var isloggedIn =  {
 
             "userName": userName,
             "password": userPassword,
                  
         }
 
             localStorage.setItem("isloggedIn",JSON.stringify(isloggedIn));
             loggedInUSer.push(isloggedIn);
             localStorage.setItem("curentuser", JSON.stringify(loggedInUSer));
 
 }
 

 function showUserName() {
 
     var userName = document.getElementById('userNameCheck').value;
     const UserNameOutputField = document.getElementById('showUserName');
     var loggedInUser = JSON.parse(localStorage.getItem('isloggedIn')); 
 
         if ( loggedInUser != null ) {
             UserNameOutputField.innerHTML = "welcome!"+ ":" + '\xa0' + userName ;
             $("#loggInButton").prop("value",'Log out');   
             changeButtonFunction();
     } 
     
 }
 
 

 /* Denna funktion hämtar värderna från de olika Storages i Localstorage för att sätta ihop dem i en register den tar 
 isloggin för att den endast skall sparas till den andvändaren och inte till alla */
 function AddOrderToRegister() {
 
     var transactionregister = JSON.parse(localStorage.getItem("transactionregister")) 
     if (!transactionregister) transactionregister = [];
     
     var userloggedin = JSON.parse(localStorage.getItem('isloggedIn'));
     var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
 
     prevPurchPlusUser = {
 
         "userName": userloggedin.userName,
         "shoppingcart": shoppingCart
     }
 
     transactionregister.push(prevPurchPlusUser);
     localStorage.setItem("transactionregister", JSON.stringify(transactionregister)); 
 }
 
 
 function LogOut() {
     if (true) {
          localStorage.removeItem('isloggedIn')
           window.location.reload();              
     }
 };