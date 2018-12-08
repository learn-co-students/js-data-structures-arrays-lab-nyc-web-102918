// Write your solution here!
// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

let destructivelyAppendDriver = (name) => {
    return drivers.push(name)
}

let destructivelyPrependDriver= (name) => {
    return drivers.unshift(name)
}

let destructivelyRemoveLastDriver = () => {
    return drivers.pop()
}

let destructivelyRemoveFirstDriver = () => {
    return drivers.shift()
}

let appendDriver = (name) => {
   return [...drivers, name]
}

let prependDriver = (name) => {
    return [name, ...drivers]
 }

 let removeLastDriver = () => {
    return drivers.slice(0, drivers.length -1)
 }

 let removeFirstDriver = () => {
     return drivers.slice(1)
 }

