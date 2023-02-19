//var arr=['javascript','selenium','api','cypress']

function getletter(str)
{
    for(let i=0;i<str.length;i++)
    {
        console.log(str[i].slice(2,3));
    }
}
console.log(getletter(["javascript","selenium","api","cypress"]));