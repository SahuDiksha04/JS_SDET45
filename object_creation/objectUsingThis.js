var obj={
    user1:"abc",
    user2:"fgh",
    user3:"ty",
    user4:function()
    {
        console.log(`${this.user1}  ${this.user2} ${this.user3}`)
    
    }
}
obj.user4()

var obj2={
    user5:"yyy",
    user6:"zzz",
    user7:function()
    {
        console.log("name of user1 is"+" "+this.user1);
        console.log("name of user2 is"+" "+this.user2);
        console.log("name of user5 is"+" "+obj2.user5);
        console.log("name of user6 is"+" "+obj2.user6);
    }
}
obj2.user7()


