// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){

  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){

  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  return [...drivers,name];
// appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged ‣
}
function prependDriver(name)  {
  return [name, ...drivers];
}
// prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged ‣


function removeLastDriver() {
   return drivers.slice(0, drivers.length - 1)
}
// removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged ‣

function removeFirstDriver() {
    return drivers.slice(1)
}
// removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged ‣
