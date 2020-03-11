function appendID(object) {
    let new_id = document.createElement('div')
    new_id.textContent = object.id
    document.querySelector("body").appendChild(new_id)
}

function submitData(userName, userEmail) {
    const confObj = {
        'method': 'POST',
        'headers': {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        'body': JSON.stringify(
            {name: userName,
            email: userEmail}
        )
    }

    return fetch("http://localhost:3000/users", confObj)
        .then(resp => resp.json())
        .then(json => appendID(json))
        .catch(function(error) {
            alert("Something went terribly wrong")
            console.log(error.message)
            const errorText = document.createElement('div')
            errorText.textContent = error.message;
            document.querySelector('body').appendChild(errorText);
        })
}
