let obj1 = { name: "Person 1", age:5 };
let obj2 = { age:5, name: "Person 1" };

const isJsonequal=((obj1,obj2)=>{
    let keys1 =Object.keys(obj1);
    let keys2 =Object.keys(obj2);

    return keys1.length===keys2.length && Object.keys(obj1).every(key=>obj1[key]===obj2[key])

})
console.log("Given json objects are equal:",isJsonequal(obj1,obj2))