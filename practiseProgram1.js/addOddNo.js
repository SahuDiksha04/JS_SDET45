var arr=[2,4,5,6,7,9]

ad=0
for (const i in arr) 
{  
    
    if (arr[i]%2==0) 
    {
        console.log("no is even"+" "+arr[i]);
        
    }
    else
    ad=ad+arr[i]
}
console.log("sum of odd numbers is"+" "+ad);