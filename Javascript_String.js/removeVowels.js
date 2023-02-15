var str="testyantra"
var rv=" "
for (let i = 0; i < str.length; i++) 
{
    var ch=str.charAt(i)
    if(!(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'))
    {
        rv=rv+ch
    }
    
}
console.log(rv);