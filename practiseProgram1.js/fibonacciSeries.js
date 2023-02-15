
// var n1=0,n2=1,n3,count=15

// //console.log(n1+" "+n2);

// for(let i=0;i<count;i++)
// {
//     n3=n1+n2
    
//     n1=n2
//     n2=n3
// }
// console.log(" "+n3);

let country=[
    {fname:"abc",address:"India"},
    {fname:"def",address:"Europe"},
    {fname:"rst",address:"India"},
    {fname:"xyz",address:"Europe"},
    {fname:"mno",address:"Russia"}
]

//count of people living in India

let count=0
for(const i in country)
{
    if(country[i].address=="India")
    {
        count++
    }
}

console.log(`No of people living in India is:${count}`);

//Country Name==>Count
let IndiaCount=0
let EuropeCount=0
let RussiaCount=0

for(const i in country){
if(country[i].address=="India")
{
    IndiaCount++
}
if(country[i].address=="Europe")
{
    EuropeCount++
}
if(country[i].address=="Europe")
{
    RussiaCount++
}
}

console.log(`India==> ${IndiaCount}`);
console.log(`Europe==> ${EuropeCount}`);
console.log(`Europe==> ${EuropeCount}`);

// const a=Math.random()*((30-10)+10)
// console.log(a);

// for(let i=0;i<2;i++)
// {
//     console.log(i);
// }
// console.log(i);



