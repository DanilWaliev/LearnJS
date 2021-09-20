// let numb1 = +prompt('1 число');
// let numb2 = +prompt('2 число');

// alert(numb1 + numb2);





// function readNumber() {
//         let numb = prompt('Введите число');
//         return numb;
//     } while (numb!==null || numb !== Number);
// }

// alert ('Число:' + readNumber() );



// let num1 = +prompt ('Введите число')
// alert( Math.floor(num1) )



// alert( isNaN(234) )
// alert( isFinite(Nan) )
// alert( isFinite(Infinity) )
// alert( isFinite(234) )



// alert( parseInt('02384234jkvnj') )





// let str = prompt('Type a string')
// alert( ucFirst(str) )

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1)
// }



// let str = 'hanahanaxahaxa'
// let target = 'ha'
// let pos = 0

// while (true) {
//     foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     console.log(`Найдено тут :; ${foundPos}`)
//     pos = foundPos + 1;
// }



// function checkSpam(str) {
//     let upperStr = str.toUpperCase();

//     if (upperStr.indexOf('VIAGRA') !== -1 ||
//         upperStr.indexOf('XXXXX') !== -1
//     ) {
//         return true;
//     } else {
//         return false;
//     };
// };

// console.log( checkSpam('buy ViAgRA now') );
// console.log( checkSpam('free xxxxx') );
// console.log( checkSpam('innocent rabbit') );



// function truncate(str, maxlength) {
//     if ( str.length >= maxlength ) {
//         return (str.slice(0, maxlength - 1) + '...');
//     } else {
//         return str
//     };
// };

// console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
// console.log( truncate("Всем привет!", 20) );





// let styles = ['Джаз', 'Блюз']


// styles.push('Рок-н-ролл')

// console.log(styles)


// styles[ Math.floor( styles.length/2 ) ] = 'Классика'

// console.log(styles)


// console.log( styles.shift() )


// styles.unshift('Рэп', 'Рэгги')

// console.log(styles)

// function midChange(array, key) {
//     let num = Math.round( array.length/2 )
//     array[num] = key
// }



// function sumInpt() {
//     let nums = []

//     while (true) {
//         let value = prompt('Введите значение')

//         if (value == '' || value == null) break

//         nums.push(+value)
//     }

//     let sum = 0

//     for(let num of nums) {
//         sum += num
//     }

//     return sum
// }

// alert( sumInpt() )





// function camelize(str) {
//     return str
//     .split('-')
//     .map( (item, index) => (index == 0) ? item : item[0].toUpperCase() + item.slice(1) )
//     .join('')
// }

// console.log( camelize('list-style-image')  )



// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// function filterRange(arr, a, b) {
//     return arr.filter( item => (item > a && item < b) )
// }

// console.log(filtered);
// console.log(arr)



// function filterRangeInPlace (arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] >= a && arr[i] <= b) {
//             continue;
//         } else {
//             arr.splice(i, 1);
//             continue;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// console.log(arr);



// let arr = [5, 2, 1, -10, 8];

// arr.sort( (a,b) => b-a );

// console.log(arr);



// function copySorted (arr) {
//     let copiedArr = arr.concat();
//     return copiedArr.sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);



// function Calculate(str) {

//     this.methods = {
//         '+' : (a, b) => a + b,
//         '-' : (a, b) => a - b,
//     }

//     this.calculate = function(str) {
//         let splitedStr = str.split(' ');

//         for (let i = 0; i < splitedStr.length; i++) {

//             if (i == 0) {
//                 a = +splitedStr[i]
//             } else if (i == 1) {
//                 operator = splitedStr[i]
//             } else if (i == 2) {
//                 b = +splitedStr[i]
//             }
//         }

//         return this.methods[operator](a, b);
//     }
//     this.addMethod = function(name, func) {
//         this.methods[name] = func
//     }
// }

// let calc = new Calculate;

// console.log( calc.calculate('5 + 4') );

// console.log( calc.calculate('6 - 4') );

// calc.addMethod('%', (a, b) => a % b);

// console.log( calc.calculate('6 % 5') );



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = []

// for (let i = 0; i < users.length; i++) {
//     names.push( users[i].name )
// }

// console.log( names ); 



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map( item => item.name )

// console.log( names ); 



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = []

// for (let i = 0; i < users.length; i++) {
//     usersMapped
//     .push( {fullName: users[i].name + ' ' + users[i].surname,
//             id: users[i].id} );
// }

// console.log( usersMapped[0].id )
// console.log( usersMapped[0].fullName )



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map( item => ({
//     fullName : item.name + ' ' + item.surname,
//     id : item.id
// }) )

// console.log( usersMapped[0].id );
// console.log( usersMapped[0].fullName );



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);


// console.log(arr[0].name); 
// console.log(arr[1].name); 
// console.log(arr[2].name); 

// function sortByAge(arr) {
//     arr.sort( (a, b) => a.age - b.age )
// }



// let arr = [1, 2, 3];

// console.log( shuffle(arr) );

// console.log( shuffle(arr) );

// console.log( shuffle(arr) );

// function shuffle(arr) {
//     return arr.sort( (a, b) => a * b * ( Math.round( (Math.random() * (10 - -10)) + -10 ) ) );
// }



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr)  )

// function getAverageAge(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += +arr[i].age
//     }

//     return sum / arr.length

// }



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr)  )

// function getAverageAge(arr) {
//     return arr.reduce( (sum, current) => sum + current.age, 0 ) / arr.length
// }



let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings))

function unique(arr) {

    let uniqArray = [];
    
    for (let i = 0; i < arr.length ; i++) {

        if ( !uniqArray.includes( arr[i] ) ) {

            uniqArray.push( arr[i] );
        }

    }

    return uniqArray
}


