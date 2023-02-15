
function removeDuplicate(str)
{
var tt=""
for (let i = 0; i < str.length; i++) 
{
    var ch=str.charAt(i)
    let count=0;

    for (let j = 0; j < str.length; j++) 
    {
        if(ch==str.charAt(j))
        {
              if(j<i)
              {
                break
                
              }
              count++
        }

     }
     if(count>=1)
        {
             tt=tt+ch  
        }
        
}
console.log(tt);
}

removeDuplicate("testyantra")