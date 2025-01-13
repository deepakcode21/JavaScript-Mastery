// object literals

const sym = Symbol("key1")

const jsUser = {
    name: "Deepak",
    "full name": "Deepak Code",
    age: 34,
    [sym]: "mykey1",
    location: "Jaipur",
    email: "deepak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[sym])

jsUser.email = "deepak@yahoo.com"
// Object.freeze(jsUser);
jsUser.email = "deepak@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js User")
}

jsUser.helloUser = function(){
    console.log(`hello js user , ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.helloUser());