function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
      };
      
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
      return fetch('http://localhost:3000/users', configObj)
      .then(resp => resp.json()).then(object => object.id)
      .then(id => document.querySelector('body').append(id))
      .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.querySelector('body').append(error.message);
      });
     
}