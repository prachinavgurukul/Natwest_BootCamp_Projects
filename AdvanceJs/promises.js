const result=new Promise((resolve,reject)=>{
    let error=false;
    if(!error){
        resolve("Task Completed")
    }
    else{
        reject("eror")
    }
});
result.then(msg=>{
    console.log(msg);
}).catch(msg=>{
    console.log(msg);
})
// console.log("hi")