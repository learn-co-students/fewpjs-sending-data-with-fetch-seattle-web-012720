

// Add your code here
document.addEventListener("DOMContentLoaded", function() {
    
})

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        document.body.innerHTML = data["id"]
    })
    .catch(function(error) {
        alert("ALERT")
        document.body.innerHTML = error.message
    })
}