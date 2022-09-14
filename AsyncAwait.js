const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("success");
    },2000)
})

// Async Await 
const asyncFunc = async() =>{
    const res = await promise;
    console.log(res);
}
asyncFunc(); 
