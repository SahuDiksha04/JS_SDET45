var arr=[1,2,3,4,5,6]
var arr1=[7,8,9]

//It concat the array.
//console.log(arr.concat(10,11))
//console.log(arr.concat(arr1));

//It remove the array and make it as string.
//console.log(arr.join('*'))

//It give count of element present in array and we can add the element and array both.
//console.log(arr.push(21));

//It remove the last element from the array.
//console.log(arr1.pop());

//It remove the first element from the array.
//console.log(arr.shift());

//It remove the first element and then give the count.
//console.log(arr1.unshift(11));



/*function con(arr1)
{
    return arr1>3
}*/
 //after matching the condition it will give all the elements.
console.log(arr.filter(a=>a>3));

//after matching the condition it will give only one element.
console.log(arr.find(a=>a>3));

//it sort the array in ascending order
console.log(arr.sort((a,b)=>a-b));

//it sort the array in descending order
console.log(arr.sort((a,b)=>b-a));

//It will print array of remove elements and we will pass index as argument in this.
console.log(arr.splice(2));

//it will give all the values between the index that we have pass including the first index that we have passed.
console.log(arr.slice(1,2));

console.log(arr.toString());

//It will give the length of the Array.
console.log(arr.length);

//It will return true if element is present
console.log(arr.includes(1));

//It will reverse the array
console.log(arr.reverse());

console.log(arr);
console.log(arr.indexOf(3));
console.log(arr.map);

