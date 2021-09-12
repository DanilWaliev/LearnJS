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



