var str="testyantra"
var uc=""
for (let i = 0; i < str.length; i++) 
{
    var ch=str.charAt(i)
    if(ch=='t')
    {
        uc=uc+'T'
    }
    else
    uc=uc+ch
}
console.log(uc);