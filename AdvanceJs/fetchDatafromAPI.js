fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
    const x=`<h2>${item.name}</h2><p>${item.email}</p>`
})