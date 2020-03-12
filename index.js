// Add your code here
const submitData = (userName, userEmail) => {
    const formData = {
        name: userName,
        email: userEmail
    };

    const configObj = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(userResponse) {
        appendContentToDom(userResponse.id);
    })
    .catch(function(error) {
        appendContentToDom(error.message);
    });
}

const appendContentToDom = content => {
    const newElement = document.createElement("div");
    newElement.innerHTML = content;
    document.body.appendChild(newElement);
}

