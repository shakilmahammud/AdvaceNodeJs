
const errorFun =(err)=>{
    const {name,message,stack} = err ;
    console.error(name,message)
    
}
const asyncFunc = async() =>{
    try{
        undefined.find()
    }catch(err){
        errorFun(err);
    }
}
asyncFunc()
