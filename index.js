// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(value) {
  drivers.push(value);
}

function destructivelyPrependDriver(value) {
  drivers.unshift(value);
}

function destructivelyRemoveLastDriver(value) {
  drivers.pop(value);
}

function destructivelyRemoveFirstDriver(value) {
  drivers.shift(value);
}

function appendDriver(name) {
  let newDrivers = drivers.slice();
  newDrivers.push(name);
  return newDrivers;
}

function prependDriver(name) {
  let newDrivers = drivers.slice();
  newDrivers.unshift(name);
  return newDrivers;
}

function removeLastDriver(name) {
  let newDrivers = drivers.slice();
  newDrivers.pop(name);
  return newDrivers;
}

function removeFirstDriver(name) {
  let newDrivers = drivers.slice();
  newDrivers.shift(name);
  return newDrivers;
}
