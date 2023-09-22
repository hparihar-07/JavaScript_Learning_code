console.log(document.cookie)
document.cookie = "name=cookie7009812345"
document.cookie = "name2=cookie629277383"
document.cookie = "name=venom"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
