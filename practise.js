    //  console.log(a);   
    //  var a 
    //  a = 100;
    //  var a =200
    //  console.log(a); 
     
     //output:undefined,200
    
    //****************************************************************************************/
    
    // console.log(x);    
    //  var x 
    //  x = 20
    //  let x = 35    
    //  x = 95              
    //  console.log(x); 

     //Syntaxerror:Identifier 'x' has already been declared
    //****************************************************************************************/
    
    /*const y = 3.1415;
    
     function fun1() {
         console.log("local");
     }
     y = 3;                  
     console.log(y);   

     //Typeerror:Assignment to constant variable
    
    //****************************************************************************************/
    
    /*{
         var b = "Rekha"
         let w = "welcome"
     }
     console.log(b);
     console.log(w);

     //Referenceerroe:w is not defined
    
    //****************************************************************************************/
    
    /*console.log(index);        
     for (var index = 0; index < 5; index++) {
         console.log(index); //0 1 2 3 4
     }                                                
     console.log(index); 
     
     //output:012345
    
    //****************************************************************************************/
    
     /*console.log(index);      
    for (let index = 0; index < 5; index++) {
        console.log(index);          //0 1 2 3 4           
     }
     console.log(index);*/
     
     //Referenceerror:index is not defined
    
    //****************************************************************************************/
    
    /*var a = 100;
     console.log(a);   
     {
         var a = 200
         console.log(a);  
     }
     console.log(a);*/   

     //output:100,200,200
    
    //***************************************************************************************/
    
     /*let x = 10
     {
         let x = 20
     }
     console.log(x);*/  
     
     //output:10
     //let cannot be accessed outside block
    
    //****************************************************************************************/
    
     /*var a = 20
     let a = 30
     console.log(a);*/ 

     //Syntaxerror:Identitfier 'a' has already been declared
    //****************************************************************************************/

    // var a=10
    // var b=20
    // var c=30
    // console.log(a+b+c);
    // output:60
    //**********************************************/

//     var d=53
//     var c=10
//     var e="3"
//     console.log(d+c+e);
//    output:633
   /**************************************************/

//    const a=10
//    {
//     const a=20
//     console.log(a);  //20
//    }
//    console.log(a);   //10
//    output:20,10
/****************************************************/

// const fruits=["mango","apple"]
// console.log(fruits.length);      //2
// console.log(fruits[0]);          //mango

/****************************************************/

// (function(){a=b=c=5})
// console.log(b);

/****************************************************/

const obj={
    value1:"abc",
    value2:123
}

console.log(obj.value1);
console.log(obj.value2=456);