// Add your code here

//import { fileMatch } from "file-system";



const userUrl = 'http://localhost:3000/users'

function submitData(name, email){

    let configObj = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify({name, email})
    };
    return fetch(userUrl, configObj)
    .then(function(res){
        return res.json();
    })
    .then(function(json) {
        document.body.innerHTML = json.id;
    })
    .catch(function(error){
        alert("failed")
        document.body.innerHTML = error.message;
    });
}

submitData('steve', 'steve@steve.mail')