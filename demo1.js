/*var a=20;
var b=30;
if(a>b)
{
    console.log("a is greater");
}
else if(b=a)
{
    console.log("a and b are same");
} 
else if(b>a)
{
    console.log("b is greater");
} 
else
{
    console.log("invalid input");
} */

var a=10;
var b=20;
var c=30;
let d=40;

{
    var x=5;
    let y=7;
    const z=3;
    console.log(x,y,z);
}
console.log(a,b,c,d);
console.log(x,y,z);

function productDetails(category,subcategory) {
    var p=1;
    let q=2;
    const r=3;
    console.log(category+ " " +subcategory);
   console.log(p,q,r);
}
 
productDetails("mobile","realme");
//console.log(p,q,r);

