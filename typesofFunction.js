
//standard fuction
function studentdata(name,rank) {
    console.log(name+' '+rank);
}
studentdata('abc','3');


//function expression
var display=function (name1,rank1) {
    console.log(name1+''+rank1);
    }
    display('abc3',5);
    

//immediate invocable function
(function (name2,rank2) {
    console.log(name2+' '+rank2);
}
('abc1','4'))


//arrow function

 var studentdata3=(name3,rank3)=>{
    console.log(name3+''+rank3);
    }
    studentdata3('abc3','5');