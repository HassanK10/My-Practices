let person1 = {
    firstName : "hassan",
    lastName : "khokhar",
    age : "19",
}

let person2 = {
    name : "ali",
    age : "20",
    isAuth : "true",
}

console.log(Object.assign(person1 , person2))
console.log(Object.entries(person1))
console.log(Object.keys(person1))
console.log(Object.values(person1))

let newobj = structuredClone(person2);
console.log(newobj.age)


let newobj2 = Object.create(person1)
console.log(newobj2)

console.log("name" in person2)
console.log(Object.hasOwn(person1,"firstName"))

Object.freeze(person1)

Object.seal(person1)

delete person1.firstName

person1.age = "23"
console.log(person1)