
"use strict"
class Program1
{
    constructor(price,brand)
    {
        this.price=price
        this.brand=brand
        console.log(price)
        console.log(brand);
    }
    a=50;
    static b=20;
    

    product(name="shoes")
    {
        this.name=name;
        console.log(name);      
        console.log(this.a);             //access non static variable by using this keyword
        console.log(Program1.b);         //access static variable by using class name
                return "di"
    }

    static details(number=20)
    {
        this.number=number
        console.log(number);
        console.log(data1.a);           //access non static variable by creating object
        console.log(this.b);            //access static variable in static method by using classname
        return "sa"
    }
 }

 var data1=new Program1(1000,"titan")
 console.log(data1.a);
 //console.log(b);
 data1.product()
 Program1.details();




