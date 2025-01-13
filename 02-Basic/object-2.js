const tinder = {}

tinder.id = "234adc";
tinder.name = "Arrow";
tinder.isLoggedIn = false

//console.log(tinder)

const facebook = {
    email: "some@gami.com",
    fullname: {
        userfullname: {
            firstname : "hitest",
            lastname: "Code"
        }
    }
}

//console.log(facebook.fullname?.userfullname.firstname);

const college = {1: "a", 2: "b"}
const school = {3:"c", 4: "d"}

// const friends = Object.assign({}, college, school);

const city = {...college, ...school}

console.log(city)
//console.log(friends)

const users = [
    {
        id: 1,

    },
    {
        id:2
    }
]

console.log(Object.keys(tinder))
console.log(Object.values(tinder))

console.log(tinder.hasOwnProperty('isLoggedIn'))
