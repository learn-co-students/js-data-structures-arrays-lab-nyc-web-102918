const drivers =  ["Milo", "Otis", "Garfield"]

destructivelyAppendDriver = (name) => {
  drivers.push(name)
}

destructivelyPrependDriver = (name) => {
  drivers.unshift(name)
}

destructivelyRemoveLastDriver = (name) => {
  drivers.pop(name)
}

destructivelyRemoveFirstDriver = (name) => {
  drivers.shift(name)
}

appendDriver = (name) => {
  return [...drivers, name]
}

prependDriver = (name) => {
  return [name, ...drivers]
}

removeFirstDriver = () => {
  return drivers.slice(1);
}

removeLastDriver = () => {
  return drivers.slice(0, drivers.length - 1);
}
