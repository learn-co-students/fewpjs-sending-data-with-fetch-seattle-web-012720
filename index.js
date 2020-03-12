function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };
    console.log(formData)
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let id = document.createElement("div");
        id.innerHTML = object.id;
        document.querySelector("body").appendChild(id);
    })
    .catch(function(error) {
        alert("Bad!");
        let msg = document.createElement("div");
        msg.innerHTML = error.message;
        document.querySelector("body").appendChild(msg);
    });
}