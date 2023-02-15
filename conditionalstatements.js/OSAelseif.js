
var totalproduct=100;
var soldproductno=50;

if(totalproduct>soldproductno)
{
    console.log("product is available");
}
else if(soldproductno<totalproduct)
{
    console.log("todays sold order confirmed");
}
else if(soldproductno>totalproduct)
{
    console.log("the order is pending");
}
else
{
    console.log("order is delivered");
}