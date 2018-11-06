// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  drivers.push("Ralph")
  
  
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  drivers.splice(-1)
}

function destructivelyRemoveFirstDriver(){
  drivers.splice(0,1)
  return drivers 
}


function appendDriver(name){
  const newDrivers = [...drivers, name]
  return newDrivers
}


function prependDriver(name){
  return [name,...drivers]
}

function removeLastDriver(){
  drivers.slice(0,1)
  
}


