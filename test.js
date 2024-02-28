// const name = "khalil";
// console.log(name);

// const green = (name) => {
//     console.log(`hello ${name}`)
// }

// green(name)

// setTimeout(() => {
//     console.log('khalil')
// }, 3000)

// const os = require('os')
// console.log(os.platform())

const fs = require('fs')

const text = fs.readFile("./docs/doc.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

console.log("last lignes")
// console.log(text)

