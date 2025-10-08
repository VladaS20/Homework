// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Vlada",
  lastName: "Skaldneva",
  age: 25,
  isStudent: true,
};

// console.log(`Привет! \nМеня зовут ${person.name} ${person.lastName}. \nМне ${person.age} лет и я явлюсь студентом Aroken.ru`)

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const isEmpty = (person) => {
  for (const key in person) {
    return false;
  }
  return true;
};

isEmpty(person);

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "title",
  description: "description",
  isCompleted: true,
};

const cloneAndModify = (object, modifications) => {
  return { ...object, ...modifications };
};

const taskModify = cloneAndModify(task, {
  isCompleted: false,
  title: "new title",
});

// for (const key in taskModify) {
//   console.log(`${key}: `, taskModify[key]);
// }

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:

function callAllMethods(object) {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
callAllMethods(myObject);
