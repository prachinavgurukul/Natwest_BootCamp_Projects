const products=["prod1","prod2"]
const GetProduct=()=>{
    setTimeout(()=>{
        products.map(value=>{
            console.log(value);
        });
    },2000);
}
const AddItem=(item)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            products.push(item)
    },3000);
});
}
AddItem("prod3");
GetProduct();