// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push({ name: 'Ann', age: 19, isAdmin: false }, { name: 'Jack', age: 43, isAdmin: true })

// console.log(users)

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
let sumAllAge = 0;

function getUserAverageAge(users) {
  users.forEach(user => {
    sumAllAge += user.age;
  });
  let averageAge = sumAllAge / users.length;
  // console.log(averageAge)
}

getUserAverageAge(users)

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const usersAdmin = [];

function getAllAdmins(users) {
  users.forEach(user => {
    if (user.isAdmin === true) {
      usersAdmin.push(user)
    }
  });
  return usersAdmin
}

getAllAdmins(users);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

 function first(arr, n) {
const returnArr = [];
  if (n > arr.length) {
    return console.error(`Количество элементов n = ${n} превышает длину массива: ${arr.length}`);
  } else  if (n === 0) {
    return [];
  } else  if (n == undefined) {
    let firstString = arr[0];
    returnArr.push(firstString);
    console.log(returnArr)
  } else if (n > 0 && n < arr.length) {
    for (i=0; i < n; i++) {
      returnArr.push(arr[i]);
    }
    console.log(returnArr)
  } else {
    console.log(`Что-то пошло не так`)
  }
  }

  first(users, 3)

  

 