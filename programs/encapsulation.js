class Encapsulation
{
     productId
     #customerId
    constructor(productId,customerId)
    {
        this.productId=productId
        this.#customerId=customerId
    }
    get custId()
    {
        return this.#customerId
                                                                                                                         
    }
    set setCustId(value)
    {
             //this.#customerId=value
            this.#customerId=value

    }
}
let details=new Encapsulation(10,12)
console.log(details.custId)
details.setCustId=14

console.log(details.custId);
