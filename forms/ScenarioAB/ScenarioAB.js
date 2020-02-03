//Scenario AB: Complete the Scenario above, then add the following requirements.

//b)
let shiftPetNames = petNames.shift()
console.log(shiftPetNames)
alert(`The action taken was: .shift()\nThe remaining data are: ${petNames}`)

//c)
let unshiftBarney = petNames.unshift('Barney')
console.log(unshiftBarney)
alert(`The action taken was: .unshift()\nThe remaining data are: ${petNames}`)

//d)
let allPets = petNames.concat([' Ted',' Fred',' Jed',' Ned',' Ed',' Zed'])
console.log(allPets)
alert(`The action taken was: .concat()\nThe remaining data are: ${allPets}`)

//e)
var newString = allPets.join()
console.log(newString)
alert(`The action taken was: .join()\nThe remaining data are: ${newString}`)

//f)
let unshiftAgnes = allPets.unshift('Agnes')
console.log(unshiftAgnes)
alert(`The action taken was: .unshift()\nThe remaining data are: ${allPets}`)