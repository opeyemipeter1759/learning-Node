const makeUpperCase = (name) => {
    console.log(name.toUpperCase())
}
const reverseStr = (value) => {
    console.log(value.split('').reverse('').join(''))
}
makeUpperCase('Opeyemi')
const callBackSample = (name, callBackfn) => {
    const fullName = `${name} Peter`
    callBackfn(fullName)
}

callBackSample('Opeyemi', makeUpperCase)
con console.log(value.split('').reverse("").join(''));