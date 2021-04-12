// Add your code here

let submitData = (nameOfUser,email) => {
    let userData={name: nameOfUser, email: email}
    let configuredObject= {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch('http://localhost:3000/users', configuredObject)
    .then( response => response.json())
    .then( object => {
        console.log(object)
        let bodyElm = document.querySelector('body')
        let newPElm = document.createElement('p')
        newPElm.textContent = object.id
        bodyElm.append(newPElm)
    })
    .catch( error => {
        alert('Oops, something went mofuggin wrong');
        let bodyElm = document.querySelector('body');
        let newPElm = document.createElement('p');
        newPElm.textContent = error.message;
        bodyElm.append(newPElm);
    })
    
}