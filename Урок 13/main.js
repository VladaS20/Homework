// const user= {
//   name: 'Vlada', //key:value
//   age: 25,
//   student: true,
//   vip: false,
//   sayHello(name) {
//     console.log (`Hello ${name}`)
//   } 
// }

// user.sayHello ('Vladislava')

// ===========================================

const users = [
  {
    name: 'alex',
  age: 23,
  isAdmin: true
  },
  {
    name: 'john',
  age: 30,
  isAdmin: true
  },
  {
    name: 'tom',
  age: 23,
  isAdmin: false
  },
  {
    name: 'tim',
  age: 20,
  isAdmin: false
  }
]

let numberRegularUsers = 0

for (let i=0; i<users.length; i++) {
  if (users[i].isAdmin === false) {
    numberRegularUsers++
  }
}

console.log (numberRegularUsers)

