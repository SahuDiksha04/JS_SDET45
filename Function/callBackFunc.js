function detailsofProduct1 (price,brand)
{
    console.log("price and brand of product1"+"--> "  +price+ " " +brand);
}

function detailsofProduct2(price,brand)
{
    console.log("price and brand of product2"+" -->" +price+ " " +brand);
}
function detailsofProduct3(price,brand)
{
    console.log("price and brand of product3"+"--> " +price+ " " +brand);
}
function display(price,brand,callBackfn)
{
    console.log("given values are"+" -->" +price+ " " +brand);
    callBackfn(price,brand)
}

display(10000,"samsung",detailsofProduct3)
display(20000,"realme",detailsofProduct2)