"use strict"

// WHILE LOOP:

// let rep = 1;

// while(rep <= 10){
//     console.log(rep);
//     
// }

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

    const restaurant = {
        name: 'Rayhon Milliy Taomlar',
        location: 'Tashkent',
        categories: ['national', 'fast food', 'european cuisine', 'turkish'],
        startMenu: ['somsa', 'lagman', 'salad', 'soup'],
        mainMenu: ['osh', 'norin', 'manti'],
        openingHours: {
            mon: {
                open: 8,
                close: 22
            },
            tue: {
                open: 8,
                close: 23
            },
            wed: {
                open: 9,
                close: 21
            },
        },
    
        order: function(startMenuIndex, mainMenuIndex) {
            return [this.startMenu[startMenuIndex], this.mainMenu[startMenuIndex]]
        }
    }
    
    // // SPREAD:

    // const newMenu = ["shashlik", "tandir", ...restaurant.mainMenu];

    // // ADD BEW PROPERTY

    // restaurant.mainMenu = newMenu;

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

    const questions = new Map([
        ['questions', 'Eng yaxshi dasturlash tili'],
        [1, 'C'],
        [2, 'Java'],
        [3, 'Javascript'],
        ['correct', 3],
        [true, "togri topdingiz"],
        [false, "notogri"],
    ])

    console.log(questions.get("questions"));

    // CONVERT TO OBJECT TO MAP:

    // const person = {
    //     name: "lode",
    //     job: "Dev"
    // }

    // const personMap =  new Map(Object.entries(person))

    // console.log(person);

    for(const [key, value] of questions){
        if(typeof key === 'number'){
            console.log(`Savollari ${key}: ${value}`);
        }
    }
    