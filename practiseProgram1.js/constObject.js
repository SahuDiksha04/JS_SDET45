
//declaring object as const
const details={
    name:"abc",
    rank:1,
    sec:"A"
}
console.log(details.name);
data=Object.create(details)
console.log(data.name="diksha");
console.log(data.sec="B");
console.log(data.name);

/***************************************************/

// var arr=[3,4,6,8,7,5]
// var even=[]
// var odd=[]
// for (let i = 0; i < arr.length; i++) 
// {
//      if(arr[i]%2==0) 
//      even.push(arr[i])
//      else
//     odd.push(arr[i])
// }
// console.log(even);
// console.log(odd);
