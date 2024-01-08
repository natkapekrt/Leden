const database = [
    "pepik.ahoj1",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345",
    
    ] 
    
    function login() {
        const username =document.getElementById("username").value
        const password =document.getElementById("password").value
    
        console.log(username, password);
    
        const loginData = username + "." + password
    
        for(let  i = 0; i < database.length; i++){
            if(loginData == database[i]){
                console.log("Login successful");
                break
            } else if (i == database.length -1) {
                console.log("Login failed")
            }
        }
    } 

   