var arr=[1,2,5,4,1,4,4];
var smallest=arr[0]
for (let i = 0; i < arr.length; i++) 
{
    if (arr[i]<smallest) {
        smallest=arr[i];
        }
    
}
console.log(smallest);