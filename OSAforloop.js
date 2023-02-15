//for loop
var arr=[10,"javascript",true,50];
for(let index=0;index<arr.length;index++)
{
   console.log(index +" "+arr[index]);
}

//while loop
index=0;
while (index<arr.length) {
    console.log(arr);
    index++;
    
}

//do while loop
index=1;
do {
    console.log(arr);
    index++;
} while (index<5);


//for of loop
for (const index of arr) {
    console.log(index);
}

var listOfProducts=["samsung","redmi","realme","oneplus"];
for (const index of listOfProducts) {
    console.log(index);
    
}

//for in loop
for (const index in arr) {
    console.log(index);
    
}

var noOfProducts=["shirts","shoes","watches","mobiles"];
for (const index in noOfProducts) {
    console.log(index);
    
}

//for each method
arr.forEach((index)=>{
    console.log(index);
})



