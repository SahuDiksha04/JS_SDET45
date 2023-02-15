
var str="testyantra";
var vc=0
var cc=0
for (let i = 0; i < str.length; i++) 
{
   
    var ch=str.charAt(i)
    
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    {
        vc++
    }
    else
         cc++
}
         

        console.log(vc);
         console.log(cc);