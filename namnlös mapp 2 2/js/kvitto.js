/* skletet till print av shoppincarten där man kan se sina tidigre köp */
function grabShoppingList() {
   
    var userNameData = JSON.parse(localStorage.getItem('isloggedIn'));
    var orderRegister = JSON.parse(localStorage.getItem('transactionregister')) 
   

    var userOrderList = []

        for ( var i = 0; i < orderRegister.length; i++) {
          

            for ( var x = 0; x < orderRegister[i].products.length; x++) {

            }
            
            if ( orderRegister[i].userName = userNameData.userName) {
                 userOrderList.push(orderRegister[i]) 

                
            }
            
        }

}


