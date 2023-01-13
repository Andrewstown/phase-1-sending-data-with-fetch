const { use } = require("chai")

function submitData(name, email){
    console.log(JSON.stringify({name: name, email: email}))
    fetch('http://localhost:3000/users',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name: name, email: email})
    })
    .then(res => res.json())
    .then(user => console.log(user))
}