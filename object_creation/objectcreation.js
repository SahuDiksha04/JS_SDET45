var productDetail={
    brand:"samsung",
    colour:"black",
    
    details:function()
    {
        console.log("mobile");
        return "5";
        
    }
}

var productDetail1 = {
    brand:"realme",
    colour:"blue",
    prodDes:productDetail,
    display:function(a,b)
    {
        console.log(a+b);
        return "4";
    }

}
console.log(productDetail.brand);
console.log(productDetail.colour);
console.log(productDetail.details());
//console.log(productDetail1.prodDe);
console.log(productDetail1.display());


