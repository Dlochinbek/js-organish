"use strict"

// // WHILE LOOP:

// // let rep = 1;

// // while(rep <= 10){
// //     console.log(rep);
//         rep++

// // }

// DICE:

// let dice = Math.floor(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`sizda  ${dice } raqami`);
// }

// console.log(dice);

// IMMUTABLE / MUTABLE

// const arr = ["a", "b", "c", "d"];

// const arr2 = ["e", "f", "g", "h"];

// const arr3 = ["1", "2", "3", "4"];


// SLICE:

// console.log(arr.slice());

// SPLICE:

// Mutable:

// console.log(arr.splice(-2));

// REVERSE:

// arr.reverse();

// console.log(arr);

// CONCAT:

// const letters = arr.concat(arr2, arr3);

// console.log(letters);

// JOIN:

// console.log(arr.join(" lode "))

// INDEXOF:

// console.log(arr.indexOf("a") + 1)

// INCLUDES:

// console.log(arr.includes("a"));

// =============================================================

// FOREACH:

    // const personInfo = ["Lode", "ali", 2005, "dev", ["akbar", "karim"]];

    // for(let person of personInfo){
    //     console.log(person)
    // }

    // personInfo.forEach(function(person, index, oshaArray) {
    //     // body...
    //     console.log(person, index + 1, oshaArray);
    // });

    // =======================================================

    // FIRST CLASS:

    // const calcAge = birthYear => 2022 - birthYear;

    // const age = calcAge(2005)

    // const counter = {
    //     number: 23,
    //     increment: function() {this.number++}
    // }   

    // console.log(age);

    // ARRAY METHODS:

    // MAP:

    // const numbers = [3, 4, 6, 12];

    // const doubleNumber = numbers.map(number => number * 2);

    // console.log(doubleNumber);

// const animals = [

//     {   id: 0,
//     name: "bobik",
//     species: "dog",
//     weight: 4,
// },

// {   id: 1,
// name: "nemo",
// species: "fish",
// weight: 2,
// },

// {   id: 2,
// name: "Pokemon",
// species: "cat",
// weight: 2,
// },

// {   id: 3,
// name: "simba",
// species: "lion",
// weight: 120,
// },

// ];

    // const animalTypes = animals.map((animal, index, oshaArraylar )  => `${index + 1}: ${animal.name}`);

    // console.log(animalTypes);

    // FILTER:

    // const filterdAnimals =  animals.filter(function (animal) {
    //     // body...
    //     return animal.weight >= 4
    // })

    // console.log(filterdAnimals);

    // REDUCE:

   //  const numbers = [3, 4, 6, 12];

   //  const allweight = animals.map(animal => animal.weight).reduce((acc, 
   //      weight) => acc + weight)

   // console.log(allweight);

   // FIND:

   // let dollars = [10, 200, 300, 200];

   // console.log(dollars.find(dollar => dollar >= 250));


   // console.log(animals.find(animal => animal === "nemo"));

    // ==================================================================

    // FINDINDEX:

    // console.log(animals.findIndex(animal => animal.species === "fish"));

    // OPTIONAL CHAINING:

    // let user = {
        // address:{
        //     street: "abc"
        // }
    // }

    // console.log(user.address?.street);

    // const arr = [1, 4, 2, 5];

    // const a = arr[0];
    // const b = arr[1];
    // const c = arr[2];
    // const d = arr[3];

    // DESTRUCTING:

    // MUTABLE

    // const [a, b, c, d] = arr

    // console.log(e);

// const restaurant = {
//     name: 'Rayhon Milliy Taomlar',
//     location: 'Tashkent',
//     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     startMenu: ['somsa', 'lagman', 'salad', 'soup'],
//     mainMenu: ['osh', 'norin', 'manti'],
//         order: function(startMenuIndex, mainMenuIndex) {
//         return [this.startMenu[startMenuIndex], this.mainMenu[startMenuIndex]]
//     }
// }

//     const [firsCat, , thirdCat] = restaurant.categories

//     const [startMenu, mainMenu] = restaurant.order(2, 1);

//     console.log(startMenu, mainMenu);

//categories ichidan birinchi ikkita elementni desktruktsiya qilish
//categories ichidan birinchi va uchinchi elementni desktruktsiya qilish

// NESTED DISTRUCTING:

    // const arr = [2, 4, [5, 6]];

    // const [a, , [b, d]] = arr

    // console.log(a, d);

    // DEFAULT VALUE:

    // const arr = [5, 2];

    // const [a = 0, , b = 0] = arr;

    // console.log(a, b);

    // DISTRUCTING TO OBJECTS:

    // const restaurant = {
    //     name: 'Rayhon Milliy Taomlar',
    //     location: 'Tashkent',
    //     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
    //     startMenu: ['somsa', 'lagman', 'salad', 'soup'],
    //     mainMenu: ['osh', 'norin', 'manti'],
    //     openingHours: {
    //         mon: {
    //             open: 8,
    //             close: 22
    //         },
    //         tue: {
    //             open: 8,
    //             close: 23
    //         },
    //         wed: {
    //             open: 9,
    //             close: 21
    //         },
    //     },
    
    //     order: function(startMenuIndex, mainMenuIndex) {
    //         return [this.startMenu[startMenuIndex], this.mainMenu[startMenuIndex]]
    //     }
    // }
    

    // const {name: resturantName, categories, openingHours: hours} = restaurant

    // const {mon} = hours

    // console.log(mon);

    // console.log( resturantName,  categories, hours);

    // let a = 7;
    // let b = 10

    // let obj = {a: 2, b: 4, c: 12};

    // ({a, b } = obj);

    // console.log(a, b);

    // LOCALSTORGE:

        // setItem:

    // const name =   localStorage.setItem("name", "lode");

    // const age = 243;
    
    // localStorage.setItem('age', age)

    // // GETitEM:
   
    // const getAge = localStorage.getItem('age')

    // console.log(getAge);

    // // clear:

    // localStorage.clear()

    // LOCALSTORGE ARRAYS:

    // SETITEM:

    // const names = ['lode', 'ali', ['karim', 'akbar']]

    // localStorage.setItem('namess', JSON.stringify(names));

    // // GETITEM:

    // const getNames = JSON.parse(localStorage.getItem('namess'));

    // console.log(getNames);

    // if(names.length > 0){
    //     names.forEach(() => {
    //         console.log(name);
    //     })
    // } else{
    //     console.log("hech qanday ism");
    // }

    // ============================================================

    // SPREAD OPERATOR:

    // const arr = [7, 9, 2];

    // const arr2 = [10, 30, ...arr, 20, true, "lode"];
    
    // const arr3 = [...arr, ...arr2];

    // // console.log(arr3);

    // const restaurant = {
    //     name: 'Rayhon Milliy Taomlar',
    //     location: 'Tashkent',
    //     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
    //     startMenu: ['somsa', 'lagman', 'salad', 'soup'],
    //     mainMenu: ['osh', 'norin', 'manti'],
    //     openingHours: {
    //         mon: {
    //             open: 8,
    //             close: 22
    //         },
    //         tue: {
    //             open: 8,
    //             close: 23
    //         },
    //         wed: {
    //             open: 9,
    //             close: 21
    //         },
    //     },
    
    //     order: function(startMenuIndex, mainMenuIndex) {
    //         return [this.startMenu[startMenuIndex], this.mainMenu[startMenuIndex]]
    //     }
    // }
    
    // // SPREAD:

    // const newMenu = ["shashlik", "tandir", ...restaurant.mainMenu];

    // // ADD BEW PROPERTY

    // restaurant.mainMenu = newMenu;
// ==========================================================================:

      /*
        1# declare a function called detonation_in
        2# receives a parameter named seconds_left
        3# include console.log("detonation in... "+seconds_left+" secondes.")
        inside the block of the function
        */
        
        // let   timer = 10;

        // let secondes_left = 100;
        
        // while (timer === 100) {
        //     detonation_in(timer);
        //     console.log("detonation in... "+seconds_left+" secondes.")
        //     detonation_in
        // }

    // // SHALLOW COPY:
    
    // const mainMenuCopy = [...restaurant.mainMenu];

    // // SPREAD WITH STRINGS:

    // const str = "hello"

    // const letters = [...str, ' ', 'S']

    // // console.log(letters)

    // // SPREAD WITH FUNCTIONS:

    // const fruits = ["apple", "banana", "orange", "pear", "melon"];

    // const makeJuice = function (fruit1, fruit2, fruit3) {
    //     // console.log(`juice with ${fruit1} ${fruit2} ${fruit3}`);
    // }

    // makeJuice(...fruits);

    // // SPREAD WITH OBJECTS:

    // const newResturant = {...restaurant, founder: "John Doe", FoundYear: 2008}

    // console.log(newResturant );


    // ===================================================================:

    // REST PATTERN:

    // const [a, , ...others] = [1, 2, ...[3,4]];

    // const [a, b, ...otherMeals] = 
    // [...restaurant.startMenu, ...restaurant.mainMenu];

    // const {sat, ...weekdays} = restaurant.openingHours

    // console.log(weekdays);

    // console.log(a, b, otherMeals);

    // console.log(a,  others);

    // const add = function(...numbers){
    //     return numbers.reduce((acc, number) => acc + number)
    //     // console.log(numbers);
    // }

    // console.log(add(2, 3));
    // console.log(add(5, 1, 2, 3));
    // console.log(add(10, 50, 2, 3));

    // console.log(3 || "hello ");
    // console.log(" " || "hello ");
    // console.log(true || 0);
    // console.log(undefined || null || "" || NaN || 0);

    // console.log((!undefined && null ) || NaN);


    // LOOPING OBJECTS:

    // for(let day of Object.keys(restaurant.openingHours)){
    //     console.log(day);
    // }

    // const person = {
    //     name: "lode",
    //     job: "Dev",
    //     age: 19,
    // }

    // const properties = Object.entries(person);

    // for (let kalit  of Object.entries(person)){
    //     console.log(kalit);
    // }

    // console.log(properties);

    // ===========================================================

    // SETS:

    // const foodOrderSet = new Set(["osh", "manti", "somsa", "osh", "somsa", "salad", "kebab"])

    // uzunligini aytadi length oxshedi: SIZE

    // console.log(foodOrderSet.size);

    // bor yoqligini ayatdi includsg oxshedi:

    // console.log(foodOrderSet.has("lode"));

    // add qoshadi arraydagi add ga oxshab:

    // console.log( foodOrderSet.add("somsa"));
    // console.log( foodOrderSet.size);

    // foodOrderSet.delete("somsa");
    // console.log(foodOrderSet);

    // foodOrderSet.clear()

    // console.log(foodOrderSet);

//     const staff = ["dasturchi", 
//     "menejer", 
//     "smm", 
//     "dasturchi", 
//     "dizayner"
// ];

//     const staffunique = new Set(staff)

//     const filterdStaff = [...staffunique]

//     console.log(filterdStaff[2]);

// ============================================================

    // SET WITH STRINGS:

    // const unique = [...new Set("Jakhongir Sagdullayev")].join("--")

    // console.log(unique);

    // =======================================================

    // MAPS: yaratish

    // 1-usul

    // const restaurant1 = new Map()

    // restaurant1.set("name", "Evos");

    // restaurant1.set(1, "Yunusobod")
    // restaurant1.set(2, "chilonzor")
    // restaurant1.set('categories', ['national', 'turkish', 'fastfood'])
    // restaurant1.set(true, "we are open");

    // const arr = [1, 2]

    // restaurant1.set(arr, 'arrays')

    // restaurant1.set(document.querySelector('h1'), "Heading")

    // // console.log(restaurant1.get(arr));

    // console.log(restaurant1);

// 2-susul map yaratish:

    // const questions = new Map([
    //     ['questions', 'Eng yaxshi dasturlash tili'],
    //     [1, 'C'],
    //     [2, 'Java'],
    //     [3, 'Javascript'],
    //     ['correct', 3],
    //     [true, "togri topdingiz"],
    //     [false, "notogri"],
    // ])

    //   console.log(questions.get("questions"));

    // CONVERT TO OBJECT TO MAP:

    // const person = {
    //     name: "lode",
    //     job: "Dev"
    // }

    // const personMap =  new Map(Object.entries(person))

    // console.log(person);

    // for(const [key, value] of questions){
    //     if(typeof key === 'number'){
    //         console.log(`Savollari ${key}: ${value}`);
    //     }
    // }
    
    // const answer = Number(prompt("Your answer"))

    // console.log(questions.get(questions.get('correct')=== answer));

    // console.log(questions);

    // =================================================================:

    // STRINGS:

    // const airline = "Ozbekiston Havo yollari";
    // const plane = "Boeing";

    // console.log(airline[3]);
    // console.log(plane[0]);
    // console.log(plane.length);

    // console.log(airline.indexOf("o"));

    // console.log(airline.slice(8));

    // ====================================================================

    // REPLACE:

    // const price = "250$"
    // console.log(price.replace("$", "Sum"));
    // console.log(price);

    // REPLACE ALL:

    // const messege = "Onlayn dasturlash kurslari, Bepul dasturlash kurslari"
    // console.log(messege.replaceAll("dasturlash", "smm"));

    // SPLIT:

    // console.log("a very nice string".split(" "));

    // PADDING STRING:

    // console.log('Hello'.padEnd(15, "*"))

    // REPEAT:

    // const planesInAirport = function(n){
    //     console.log(`Umumiy ${n} samolyot mavjud ${'✈️'.repeat(n)}`)
    // } 
    // planesInAirport(5)

    // SOME:

    // const numbers = [-23, 10, 98, 2005];

    // console.log(numbers.some(num => num > 0 ));
    // console.log(numbers.every(num => num > 0 ));

    // const arr5 = [[1, [2,], 3], [4, 5], 6, 7];

    // const arr5 = [1, 2, 3, 4]

    // // console.log(arr5.flat(2));

    // console.log(arr5.map(x => [x * 2]));
    // console.log(arr5.flatMap(x => [x * 2]));

    // console.log(arr5);

    // SORT:

    // numbers.sort()

    // const founders = ["Murod Nazorov", "Temurbek adhamov", "Jahongir Polatov", "Umidjon Ishmuhammedov", "Muhammad Ali Eshonqulov"];

    // founders.sort()

    // console.log(founders);

    // console.log(numbers);

    // numbers.sort((a, b)=> {

    //     if (a > b)  return 1
    //     if(a < b) return -1
    // })

    // numbers.sort((a, b) => a - b);

    // console.log(numbers);

    // =========================================================================

    // CALL METHOD:

//     const havoYollar = {
//         airline: "O'bkiston havo yullari",
//         code: "HY",
//         bookings: [],
//         book(flightNum, name){
//             this.bookings.push({
//                 name: name,
//                 airline: this.airline,
//                 code: this.code,
//                 flightNum: flightNum,
//             })
//         },
//     };

//     // console.log(havoYollar.book(43, "Lode"));

//     const turkishAirlines = {
//         airline: " Turkish Airline",
//         code: "TA",
//         bookings: [],
//     }

//     havoYollar.book(43, "karim")
//     havoYollar.book(56, "Akbar")

//     console.log(havoYollar.bookings);

//     havoYollar.book(2005, "ali")

//    // const savol = +prompt("Yoshingiz nechada")

//     const a = document.querySelector("h1")

    // =======================================================================:
    // BIND:

    // const swiss  = {
    //     airline: "Swiss Airline",
    //     code: "SA",
    //     bookings: []
    // }

    // const book = havoYollar.book

    // havoYollar.book(43, "Lodeee")
    // havoYollar.book(34, "Rahimbek")
    // book.call(turkishAirlines, 43, "Abdulloh")
    // book.call(havoYollar, 32, "Hohn Doe")
    // book.apply(swiss, [12, "HADICHAAAAA"])
    
    // const bookTa = book.bind(turkishAirlines)

    // bookTa(65, "Steven")

    // console.log(turkishAirlines.bookings, havoYollar.bookings, swiss.bookings);

    // ============================================================================

    // DATE:
    
    // const now = new Date() //hozirgi vaqt

    // console.log(new Date(2009, 9, 21))

    // document.write(now.getFullYear())

    // document.write(now.getMonth())

    // console.log(now.getDate());

    // console.log(now.getHours());
    
    // console.log(now.toISOString())

    // console.log(now.getTime());



    // ========================================================================

    //  SET TIME OUT:
    
    // setTimeout(function(){
    //     console.log("Sizni vaqtingiz keldi");
    // }, 3000, )

    // console.log("ABC");

    // =========================================================================

    // SET INTERVAL:

    // setInterval(function () {
    //     const now = new Date();
      
    //     console.log(now);
    //   }, 1000);
      
    //faqat soat, minut, sekund ko'rsatish kerak 

    // const name = "lode";

    // const fn = function () {

    //     const job = "Dev"

    //     console.log(name);
    // } 
    
    // fn()

    // console.log(job);
       

    // =========================================================================

    // FOR LOOP:

    //  const names = ['LODE', 'ALI', 'Doniyor', 'lo'];

    // for(let i = 0; i < names.length; i++){
    //     console.log(names[i].toUpperCase());
    // }
    
    // let i = 0

    // while(i < names.length){
    //     console.log(names[i].toUpperCase());
    //     i++
    // }

    // DO WHILE:

    // let i = 0;

    // while(i < 5){
    //     console.log(names[i].toUpperCase());
    //     i++
    // }

    //    do {
    //         console.log(i)
    //         i++
    //     }

    // while(i < 5)
    
    // const natijalar = [30, 43, 0, 65, 100, 20, 11,]

    // for (let i = 0; i < natijalar.length; i++){
    //     console.log('Siznging natijangiz', natijalar[i]);

    //     if(natijalar[i] === 100){
    //         console.log(`siz eng yuqori natijani topladiz`);
    //         break
    //     }

        // if(natijalar[i] === 100){
        //     console.log(`siz eng yuqori natijani topladiz`);
        //     continue
        // }
    // }


    // ==================================================

    // SWITCH CASE:

    // const baho = "Db";

    // if (baho === "A") {
        
    // } else if(baho === 'B'){

    // } else if(baho === 'C'){

    // } else if(baho === "D"){

    // } else{

    // }

    // switch(baho){
    // case "A": 
    //         console.log("Sizning bahoyigiz A");
    //     break
    // case "B": 
    //         console.log("Sizning bahoyigiz B");
    //     break
    // case "C": 
    //         console.log("Sizning bahoyigiz C");
    //     break
    // case "D": 
    //         console.log("Sizning bahoyigiz A");
    //     break
    //     default: 
    //         console.log('Szinging bahoyingiz');
    // }

    // ====================================================

    // BLOCK SCKOPYE:

    // =======================================================

    // AMALIYOT 2

        // 1- tpshirig`i

    // let age = +prompt("Tugilgan yilingizni kiriting");

    // let month = +prompt("Tugilgan oyingizni kiriting");

    // let day = +prompt("tugilgan kuningizni kiriting");

    // // let current = 

    // let current2 = 12 - month
    
    // let current3 = 30 - day

    // console.log(current,  current2, current3);

        // 2-topshiriq
    
    // let ismlar = ["lode", "ali", "akbar"]

    // let ism = prompt("ismingizni kiriting")
    
    // for(let i = 0; i < ismlar.length; i++ ){
    //     // console.log(i);

    //     switch(ism){
    // case ismlar[0]: 
    //         console.log("Bunday ism mavjud");
    //     break
    // case ismlar[1]: 
    //         console.log("Bunday ism mavjud");
    //     break
    // case ismlar[2]: 
    //         console.log("Bunday ism mavjud");
    //     break
    //     default: 
    //         console.log("Bunday ism mavjud emas");
    // }
    
    // }

    // AMALIYOT 2:

    // const ism = prompt("Ismingini kiriting");

    // const yosh = +prompt("Yoshingizni kiriting");

    // let yil = 2023 - yosh

    // let oy = yosh * 12

    // let hafta = ((yosh * 365)  /7).toFixed(0);

    // let soat = yosh * 365 * 24

    // let daqiqa = yosh * 365 * 24 * 60

    // let soniya = yosh * 365 * 
    // 24 * 60 * 60

    // const result = `Qadrli ${ism}. Siz ${yil} yilda tug'ilgansiz
    // Va siz ${oy} oy, ${hafta} Hafta, 
    // ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz`
    
    // document.write(result)

        // 2-topshiriq:

    // includs

    // let ism = prompt("Ismingizni kiritng:");

    // let ismlar = ["lode", "ali", "akbar"];

    // if (ismlar.includes(ism)) {
    //     console.log(`Ha ${ism}bek ismi bor`)
    // } else{
    //     console.log("Bunday ism mavjud emas")
    // }


    // 3-topshriq:

    // for bilan:

    // let ismlar = ["lode", "ali", "akbar"];

    // for(let i = 0; i < ismlar.length; i++){

    //     let result2 = ismlar[i] + "bek"

    //     console.log(result2);
    // }

    // WHILE:

    // let index = 0

    // while(index < ismlar.length){

    //     let result2 = ismlar[index] + "bek"
    //     console.log(result2);
    //     index++
    // }

    // 4-topshiriq:

    // let viloyatNomi = prompt('Qaysi viloyat kerak!');

    // switch(viloyatNomi){
    //     case "fargona":
    //         document.write(" 2 millon aholi bor");
    //     break;

    //     case "andijon":
    //         document.write(" 1.5 millon aholi bor");
    //         break;

    //     case "namangan":
    //             document.write(" 1 millon aholi bor");
    //         break;
        
    //     default:
    //         document.write("Bunday viloyat nomi mavjud emas")
    // }

    // 5-topshiriq:


    // let belgi = prompt("Belgi kirting");

    // let meyor = 20

    // if(belgi.length > meyor ){
    //     alert(`Siz ${meyor} ta belgi kiriting, lekin hozir ${belgi.length} ta kiritidngiz. Bu yerda ${belgi.length - meyor} ta kop`)
    // } else if(belgi.length == meyor){
    //     console.log(`Yetarlicha`);
    // } else{
    //     console.log(`Siz ${meyor - belgi.length} ta kam kiritdingiz`)
    // }



    // FUNCTIONS:

        // function declaration 
    
    // function sayHello() {
    //     console.log('Function declaration');
    // } sayHello()

        // function expression

    // let sayBy =  function (){
    //     console.log('Say Bay Function Expression');
    // } 
    // sayBy()

        // Arrow Function:
    
    // const nice = () =>{
    //     console.log("This is Arrow function");
    // }
    // nice();

    // ARGUMENTLAR VA PARAMETRLAR:

    // const sayHello = function (name, day = "kun") {
    //     console.log(`Hayrli ${day} ${name} `);
    // } 
    // sayHello("lode", "kech");

    // FUNKSIYALARDA RETURN:

    // const calcArea = function (radius) {

    //     return 3 * radius

    //     console.log(radius);
    // }

    // const a = calcArea(5)

    // console.log(a);

    // ARROW FUNCTION:

    // const calcArea = (radius) => 3 * radius ** 2

    // ===============================================================
    
    // const area = calcArea(5)
    // console.log(area);

    // const greet = function(ism){
    //     return `Hello ${ism}`
    // }

    // const result = greet('lode')

    // console.log(result);

    // Arrow functionda:

    // const greet = (ism) => {
    //     return `Hello ${ism}`
    // }

    // const result = greet('lode')

    // console.log(result);

    // const bill = function(products, tax){
    //     let total = 0
    //     for(let i = 0; i < products.length; i++){
    //         total += products[i] + products[i] * tax
    //     }
    //     return total
    // }

    // const bill = (products, tax) => {
    //     let total = 0
    //     for(let i = 0; i < products.length; i++){
    //         total += products[i] + products[i] * tax
    //     }
    //     return total
    // }

    // const result = bill([10, 13, 45], 0.2)

    // console.log(result);

    // ==============================================

    // FUNCTIONS VA METHODS:

    // funsiya erkin  ishlay oladi - 
    // Method esa ozi erkin ishlay ololmaydi doimo nimagadur boglanib keladi

    // let say =  function (name){
    //     console.log(`Mening raqamim ${name.toFixed(5)}`);
    // }
    // say(5 / 3)

    // ==================================================================

    // CALL BACK functions:

    