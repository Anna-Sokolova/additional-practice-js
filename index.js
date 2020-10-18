// == task-1 == //
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

// let admin;
// let name = 'Джон';
// admin = name;
// alert(admin);




// == task-2 == //
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// const leapYear = "Год високосный";
// const noLeapYear = "Год не високосный";

// const userYear = prompt('Введите сввой свой год рождения');

// if (userYear === null) {
//     console.log('Вы отменили ввод данных');
// } else if (userYear == 0 || isNaN(userYear)) {
//     console.log('Некорректный ввод');
// } else if (userYear % 4 === 0) {
//     console.log(leapYear);
// } else {
//     console.log(noLeapYear);
// }


// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і 
// запропонує користувачу вгадати його 
// Користувач вводить свій варіант і отримує результат(Виграв чи ні) 
// Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" 
// або "Ви програли, компютер загадав (тут варіант компютера)"

// let userInput = prompt('Угадай число от 1 до 10');
// let compInput = Math.floor(Math.random() * (11 - 1) + 1);
// // console.log(compInput);
// if (userInput === null) {
//     console.log('Отменено пользователем');
// } else {

//     if (isNaN(userInput) || userInput < 1 || userInput > 10) {
//         console.log('Введи число от 1 до 10');
//     }  else if (+userInput === compInput) {
//         console.log('Совпало', userInput, compInput);
//     }
//     else {
//         console.log('Не совпало', userInput,  compInput);
//     }
// }


