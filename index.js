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


function appendDriver(){
  return [...drivers,"Broom"]
}


function prependDriver(name)


