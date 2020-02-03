let shiftPetNames = petNames.shift()
console.log(shiftPetNames)
alert(`The action taken was: .shift()\nThe remaining data are: ${petNames}`)

let unshiftBarney = petNames.unshift('Barney')
console.log(unshiftBarney)
alert(`The action taken was: .unshift()\nThe remaining data are: ${petNames}`)

let allPets = petNames.concat([' Ted',' Fred',' Jed',' Ned',' Ed',' Zed'])
console.log(allPets)
alert(`The action taken was: .concat()\nThe remaining data are: ${allPets}`)

let shiftAllPets = allPets.shift()
console.log(shiftAllPets)
alert(`The action taken was: .shift()\nThe remaining data are: ${allPets}`)

var newString = allPets.join()
console.log(newString)
alert(`The action taken was: .join()\nThe remaining data are: ${newString}`)

let unshiftAgnes = allPets.unshift('Agnes')
console.log(unshiftAgnes)
alert(`The action taken was: .unshift()\nThe remaining data are: ${allPets}`)