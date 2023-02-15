

var arr=[0,1,0,0,1,1,1]

let count=0
    let vv=0

for (const i in arr) {
    if(arr[i]==0)
    count++
    else
    vv++
    
    }
console.log("No of 0's is"+" "+count);
console.log("No of 1's is"+" "+vv);