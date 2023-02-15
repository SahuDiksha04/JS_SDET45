class Prog_2
{
    marks=80
    _marks=80
    $marks=40

    get marks()
    {
        return this._marks;
    }
}
var data=new Prog_2();
marks=-10;
console.log(marks);
console.log(data._marks);
console.log(data.$marks);
