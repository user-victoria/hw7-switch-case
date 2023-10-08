// Переписати код нижче з використанням конструкції switch…case

// let numOrStr = prompt('input number or string');
// console.log(numOrStr);

// if (numOrStr === null) {
//     console.log('ви скасували');
// }
// else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// }
// else if (isNaN(+numOrStr)) {
//     console.log('number is Ba_NaN');
// }
// else {
//     console.log('OK!');
// }

let numOrStr = prompt('input number or string');
console.log(numOrStr);

const case1 = null;
const case2 = '';
const case3 = isNaN(+numOrStr);

switch (numOrStr) {
    case case1:
        console.log('ви скасували');
        break;

    case case2:
        console.log('Empty String');
        break;

    default:
        const result = case3 ? 'number is Ba_NaN' : 'OK!';
        console.log(result);
}