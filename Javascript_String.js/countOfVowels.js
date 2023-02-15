
var str="testyantra";

for (let i = 0; i < str.length; i++) {
    var ch=str.charAt(i);
     var count=0;
     if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    {
          for(let j=0;j<str.length;j++)
          {
                 if(ch==str.charAt(j))
                 {
                    if(j<i)
                    {
                        break;
                    }
                    count++;
                 }
          }
          if(count>=1)
          console.log(ch+'--->'+count);
    }
    
}