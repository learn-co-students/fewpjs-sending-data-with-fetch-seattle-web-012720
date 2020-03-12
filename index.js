// Add your code here


function submitData(name, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        }) 
    }
    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
        return response.json();
    })   
    .then(function(object) {
        const textNode = document.createTextNode(object.id)
        document.body.appendChild(textNode)
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        const textNode = document.createTextNode(error.message)
        document.body.appendChild(textNode)
    });
};
