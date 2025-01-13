const marvel = ["Ironman", "SpiderMan", "Thor", "Hulk"]
const dc = ["Batman", "Superman", "Aquaman", "Flash"]

marvel.push(dc)

console.log(marvel)

const heros = marvel.concat(dc)
console.log(heros)

const arr = [1, 3, 5, 6, [3,6,2,6,[33,12,43,[3,1,4,]]]]
const naa = arr.flat(Infinity)

console.log(naa)

console.log(Array.isArray("Deepak"))
console.log(Array.from("Deepak"))

let bagPrice = 199;
let clothPrice = 499;
let shoePrice = 399;

console.log(Array.of(bagPrice, clothPrice, shoePrice))

console.log( " arrow ")


