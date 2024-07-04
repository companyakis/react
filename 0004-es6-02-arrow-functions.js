const greeting1 = () => {
    return "Hi there!"
}

const greeting2 = () => "Hi there!"

const greeting3 = (name) => "Hi " + name + "!"

console.log(greeting1())
console.log(greeting2())
console.log(greeting3("Mustafa"))

const sum1 = (a, b) => a + b

console.log(sum1(11, 22))

const sum2 = (a, b) => {
    return `a + b = ${a + b}`
}

console.log(sum2(11, 22))

/*
Hi there!
Hi there!
Hi Mustafa!
33
a + b = 33

*/
