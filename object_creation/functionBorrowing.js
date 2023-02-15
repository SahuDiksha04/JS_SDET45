var product1={
    pname:"abc",
    price:1000,
    display:function()
    {
        console.log(`${this.pname2}  ${this.price2}`);
    }
  }

var product2={
    pname2:"kkk",
    price2:2000,
    display2:function()
    {
        console.log(`${this.pname2}  ${this.price2}`);
    }

}

product1.display.call(product2)