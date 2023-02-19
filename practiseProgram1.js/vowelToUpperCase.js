var str="good morning welcome to javascript session"
ar=str.split(' ')
//console.log(ar);
for(let i=0;i<ar.length;i++)
{
    if(ar[i].slice(2,3)=='a'|| ar[i].slice(2,3)=='e'|| ar[i].slice(2,3)=='i'|| ar[i].slice(2,3)=='o'|| ar[i].slice(2,3)=='u')
    {
       ar[i]=ar[i].charAt(0).toUpperCase()+ar[i].slice(1)
    }
       console.log(ar[i]);
    }


    // //arrow function
    // var arr=[1,2,3,4,5]
    // var display=()=>{
    //     for(const i in arr)
    //     {
    //         console.log(arr[i]);
    //     }
    // }
    // display()
