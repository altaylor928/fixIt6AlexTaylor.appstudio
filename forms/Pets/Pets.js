//Scenario: You will create a program that carry out different actions on array data!

let petNames = [' Darcy',' Jack',' Jerry',' Marty',' Vito',' Vinny',' Riley',' Saddie',' Marge',' Sam']

let withMarmaduke = [petNames, ' Marmaduke']

console.log(`My pets\' names are ${withMarmaduke}.`)

console.log(petNames.length)

let selectOne = prompt("Select one of the following: Remove Vinny, Remove Marty, Add Nancy, Add Your Name, Where Is Riley?, Where Is Cindy?, or Show Marmaduke.")
switch(selectOne) {
case "Remove Vinny" :
  let removeVinny = petNames.splice(5, 1)
  console.log(removeVinny)
  alert(`The action taken was: Remove Vinny.\nThe remaining data are: ${petNames}`)
  break
case "Remove Marty" :
  let removeMarty = petNames.splice(3, 1)
  console.log(removeMarty)
  alert(`The action taken was: Remove Marty.\nThe remaining data are: ${petNames}`)
  break
case "Add Nancy" :
  let addNancy = petNames.unshift(' Nancy')
  console.log(addNancy)
  alert(`The action taken was: Add Nancy.\nThe remaining data are: ${petNames}`)
  break
case "Add Your Name" :
  let addTheName = prompt("Enter your name: ")
  let addYourName = petNames.push(addTheName)
  console.log(addYourName)
  alert(`The action taken was: Add Your Name.\nThe remaining data are: ${petNames}`)
  break
case "Where Is Riley?" :
  let whereIsRiley = petNames.indexOf(' Riley')
  console.log(whereIsRiley)
  alert(`The action taken was: Where Is Riley?\nThe remaining data are: ${petNames}`)
  break
case "Where Is Cindy?" :
  let whereIsCindy = petNames.indexOf(' Cindy')
  console.log(whereIsCindy)
  alert(`The action taken was: Where Is Cindy?\nThe remaining data are: ${petNames}`)
  break
case "Show Marmaduke" :
  console.log(withMarmaduke)
  alert(`The action taken was: Show Marmaduke\nThe remaining data are: ${withMarmaduke}`)
  break
default :
  alert ("Unknown request")
  break
  }