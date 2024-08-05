 function sum(q,w) {
     console.log(q+w)    
 }
function callback(a,b,sumcallback){
    sumcallback(a,b)
}

callback(1,2,sum)
const hello = ()=>{
    console.log("hello")
}
setTimeout(hello , 2000);