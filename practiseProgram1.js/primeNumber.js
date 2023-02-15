
var arr=[2,4,6,3,5,13,17,14,19,27]

for(const i in arr)
{
    var count=0

    for(let j=1;j<=arr[i];j++)
    {
        if(arr[i]%j==0)
        {
            count++
        }
    }
    if(count==2)
    console.log("No is prime"+" "+arr[i]);
    else
    console.log("No is not prime"+""+arr[i]);
}