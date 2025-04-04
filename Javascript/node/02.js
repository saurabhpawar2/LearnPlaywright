let obj = {
    name : "saurabh",
    age : 28,

    valueOf:()=>{
        console.log('in valueOf')
        return 5;
    },
    toString:()=>{
        console.log(obj.name)
    return 7;
    }
}

console.log(+obj)
//console.log(obj.valueOf())
console.log(obj==5)