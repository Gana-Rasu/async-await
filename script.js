
// await function that takes time to process inbetween the aync function
let toppping = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("what topping do you want"));
        },3000);
    });
};


// async function that has an await function invoked inbetween
async function kitchen(){
    console.log("first step");
    console.log("second step");
    // this function stops inbetween and the topping function starts processing and if that takes ime in the mean time the 
    // remaning steps are being carried out
    await toppping();
    console.log("fourth step");
    console.log("fifth step");
}

kitchen();


// these free process function while the await function is being carried over
console.log("take old plates");
console.log("clean the tables");