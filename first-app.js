console.log('Hello from Node.js');

const fs=require('fs');

fs.writeFileSync('hello.txt','helo form node js')


const fetchData=()=>{
    const promise=new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('done')
        },1500)
    })
    return promise;
}

setTimeout(()=>{
    console.log('Hello from Node.js');
    fetchData()
    .then(txt=>{
        console.log(txt);
        return fetchData();
    })
    .then(text2=>{
        console.log(text2);
    })
   },2000)