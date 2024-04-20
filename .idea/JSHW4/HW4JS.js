// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function obchyslytyPloshchuPrjamokutnyka(a, b) {
    let ploshcha = a * b;
    return ploshcha;
}

let storonaA = 5;
let storonaB = 10;

let ploshchaPrjamokutnyka = obchyslytyPloshchuPrjamokutnyka(storonaA, storonaB);
console.log("Площа прямокутника: " + ploshchaPrjamokutnyka);
// - створити функцію яка приймає масив та виводить кожен його елемент

let myAray = [
    `Ivan`, `13`, `12`, `45`
]

function appAray(Aray) {
    for (let app of Aray) {
        console.log(app)
    }
}

appAray(myAray);
console.log(myAray)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text(textApp) {
    document.write(`<p>${textApp}</p>`)
}

text("UUUUUUUUUUUUUUUUUUUUU");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listUl(list) {
    document.write(`<ul>
<li>${list}</li>
<li>${list}</li>
<li>${list}</li>
</ul>`)
}

listUl("li")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listUlnumber(list, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`);
}

listUlnumber("li-n", 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listAray(Arr) {
    document.write(`<ul>`);
    for (let i = 0; i < Arr.length; i++) {
        document.write(`<li>${Arr[i]}</li>`)
    }
    document.write(`</ul>`);
}

let Mass = [1, 2, 3, "Fire", "Hook", true, false];
listAray(Mass);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let MassO = [{
    id: 12,
    name: 'Lexa',
    age: 41,
},
    {
        id: 13,
        name: 'Vasya',
        age: 41,
    }
];

function listObj(ArrO) {
    for (let i = 0; i < ArrO.length; i++) {
        document.write(`<div style="border: 1px solid #171616; padding: 10px; margin-bottom: 10px;">
            <p>ID: ${ArrO[i].id}</p>
        <p>Name: ${ArrO[i].name}</p>
        <p>Age: ${ArrO[i].age}</p>
    </div>`)
    }
}

listObj(MassO);

// - створити функцію яка повертає найменьше число з масиву
function SmallestNumber(SmallN) {
    let x = 0;
    for (let i = 0; i < SmallN.length; i++) {
        if (SmallN[i] < x) {
            SmallN[i] === x;
        }
        return x;
    }
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
MAsNumber = [12, 13, 15, 19];
let s = 0;

function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s
}

sum(MAsNumber);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let i = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = i;
    return arr
}

let r = swap([11, 22, 33, 44], 0, 1);
console.log(r);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let listUlnumberS = (list, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`);
}


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let Str1 = 'hello world'
let Str2 = 'lorem ipsum'
let Str3 = 'javascript is cool'
console.log(Str1.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(Str1.toUpperCase(), Str2.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let cleanedStr = str.trim();
console.log(cleanedStr);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let filter = coursesAndDurationArray.filter((user)=>
    user.monthDuration < 5
);
console.log(filter)
let map = coursesAndDurationArray.map((courses,index)=>{
    let c = {
    id: index,
        title: courses.title,
    monthDuration: courses.monthDuration,

}
return c;})
console.log(map)
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let User =  (id,name,surname,email,phone) => {
    this.name = name;
    this.surmane = surname;
    this.email = email;
    this.phone = phone;
}
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
class Client {
    id,
    name,
    surname,
    email,
    phone,

}
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку