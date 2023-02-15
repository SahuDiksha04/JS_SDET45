function sum(a,b,subject)
{
    this.a=a;
    this.b=b;
    this.subject=subject;
    console.log(a+b);
    console.log(subject);

    // function product()
    // {
    //          console.log(a,b);
    // }
    // product();
}


//In function we cannot define the array, during object creation only we can define the array.
var data1=new sum(4,5,["sel","java","api"]);
var data2= new sum(6,5,["sel","java","api"]);
//console.log(data1.a);
console.log(data1);
console.log(data2);
