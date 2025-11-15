function flipCoin(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.random();
            if(num>=0.5){
                resolve("Heads");
            }
            else{
                reject("Tails");
            }
        }, 1000)
    })
}

const res = flipCoin();

res.then((resolvedVal)=>{
    console.log(resolvedVal)
})
.catch((rejectedVal)=>{
    console.log(rejectedVal)
})