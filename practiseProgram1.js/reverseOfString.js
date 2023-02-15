// var str="I am an employee of testyantra"
// ar=str.split(' ')
// rev=''
// for (const i in ar) 
// {
//     rev=rev+' '+ar[i].split('').reverse().join('');
// }
// console.log(rev);

var str="I am an employee of testyantra"
//console.log(str.replaceAll(' ','' ));

arr=str.split('')
for(const i in arr)
{
    if(arr[i]==' ')
    {
        arr[i]=''
    }
}
console.log(arr.join(''));