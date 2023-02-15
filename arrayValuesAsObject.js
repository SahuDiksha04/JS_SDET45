let prod={
    prodtname:"realme"
}
let image={
    imagecolour:"black"
}
let size={
    imagesize:"123"
}

function add(a,b) {
    return a+b
}

let details=[prod,image,size,new Object(),add]
console.log(details[0]);
details[3].watch ="titan";
console.log(details[3].watch);
console.log(details[4](1,2));




