var str="testyantra"

ar=str.split('')
console.log(ar);

for(let i=0;i<str.length;i++)
{
    let count=0;
    if(!(ar[i]=='a'||ar[i]=='e'||ar[i]=='i'||ar[i]=='o'||ar[i]=='u'))
    {
        for(let j=0;j<str.length;j++)
          {
                 if(ar[i]==str.charAt(j))
                 {
                    if(j<i)
                    {
                        break;
                    }
                    count++;
                 }
          }
          if(count>=1)
          console.log(ar[i]+'--->'+count);
    }
}