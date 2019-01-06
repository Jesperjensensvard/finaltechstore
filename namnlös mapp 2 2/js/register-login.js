
function addUser() {

    var existingEntries = JSON.parse(localStorage.getItem("allCostumer"));
    if(existingEntries == null) existingEntries = [];
 
    var userName = document.getElementById("firstName").value;
    var password = document.getElementById("Password").value;
    console.log(userName,password)

    var costumer = {
        "userName": userName,
        "password": password,        
    };

    existingEntries.push(costumer);
    localStorage.setItem("allCostumer", JSON.stringify(existingEntries));

};
/* pusUserToRegister är en oncklick som sparar som triggar AddEntry som spara informationen smat 
triggar functionen LoadfirstPage som laddar index sidan.*/
 function pushUserToRegister() {
    addUser();
  
    LoadfirstPage();
   
};


function LoadfirstPage() {

    window.location = "Login.html";

}

