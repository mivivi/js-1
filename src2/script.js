///////////////////////////////////////
// Задание №1
///////////////////////////////////////
var a = 1, b = 1, c, d;
c = ++a; console.log('c = '+c); 
// c=2 потому что сначала выполняется сложение "a" с единицей (выполняется операция инкримент),
//затем полученное значение присваевается "с"

d = b++; console.log('d = '+d); 
// d=1 потому что сначала выполняется возращение значеният"b", затем его увеличение,
//затем присвоение "d" старого значения
console.log('a = '+a); 
// a=2 потому что выполнили операцию инкремент ("a" увеличили на единицу)
console.log('b = '+b);
// b=2 потому что выполнили операцию инкремент ("b" увеличили на единицу)
c = (2+ ++a); console.log('c = '+c); 
//c=5 потому что изначально a=2, далее операция инкремент ==> ++a=3,
//операция сложения ==> с=2+3=5
d = (2+ b++); console.log('d = '+d); 
//d=4 потому что изначально b=2, далее возращение значения "b" (вернувшееся значение 2) 
// далее сложение ==> 2+2 ==> d=2+2=4
console.log('a = '+a); 
//a=3 потому что выполнили операцию инкремент ("a" увеличили на единицу)
console.log('b = '+b); 
//b=3 потому что выполнили операцию инкремент ("b" увеличили на единицу)

///////////////////////////////////////
// Задание №2
///////////////////////////////////////
var a = 2;
var x = 1 + (a *= 2);
console.log('x = '+x);
// var x = 1 + (a = 2 * 2);
// var x = 1 + 4
// var x = 5

///////////////////////////////////////
// Задание №3
///////////////////////////////////////
function task3 (x,y) {
    var res;
    if (x>=0 && y>=0) {
        // Положительные числа
        res = (y-x);
    } else if (x<0 && y<0) {
        // Отрицтельные числа
        res = (x*y);
    } else if (x<0 && y>=0 || x>=0 && y<0) {
        // Числа с разными знаками
        res = (x+y);
    }
    return res;
}

var a, b, result;

for (i = 1; i < 3; i++) { 
    a = parseInt(prompt('[' + i + '] ' + 'Введите a', 0));
    b = parseInt(prompt('[' + i + '] ' + 'Введите b', 0));
    result = task3(a,b);
    console.log('[' + i + '] ' + 'a = ' + a + ', b = ' + b + ', result = ' + result);
}


// function recur (arg){
//     console.log('arg = ' + arg);
//     if (arg >= 100) {
//         return arg;
//     }
//     return recur(arg+1);
// }

// recur(5);

///////////////////////////////////////
// Задание №4
///////////////////////////////////////
console.log('Задание №4');
var t4 = parseInt(prompt ('Введите число от 0 до 15', 0));
switch (t4) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
}

// for (i = t4; i <=15; i++){
//     console.log(i);
// }


///////////////////////////////////////
// Задание №5
///////////////////////////////////////
function sum (a,b) {
    return a+b;
}

function minus (a,b) {
    return a-b;
}

function division (a,b) {
    return a/b;
}

function multiply (a,b) {
    return a*b;
}

console.log('2 + 3 = ' + sum(2,3));
console.log('2 * 3 = ' + multiply(2,3));
console.log('2 - 3 = ' + minus(2,3));
console.log('2 / 3 = ' + division(2,3));


///////////////////////////////////////
// Задание №6
///////////////////////////////////////



function mathOperation(arg1, arg2, operation) {
    var resultOfOperation;
    switch (operation) {
    case '+':
        resultOfOperation = sum (k1, k2);
        break;
    case '-':
        resultOfOperation = minus (k1, k2);
        break;
    case '/':
        resultOfOperation = division (k1, k2);
        break;
    case '*':
        resultOfOperation = multiply (k1, k2);
        break;
    default:
         console.log('Операция введена неверно')   
         break; 
}
        return resultOfOperation;

}
var k1, k2, resultOfOperation, operation;
k1 = parseInt(prompt('Первое число'));
operation = prompt('Введите операцию');
k2 = parseInt(prompt('Второе число'));

resultOfOperation = mathOperation(k1, k2, operation); 

if (resultOfOperation !== undefined) {
    console.log('resultOfOperation = ' + resultOfOperation);
}

///////////////////////////////////////
// Задание №7
///////////////////////////////////////
//Сравнить null и 0
/*
null - означает, что в переменной ничего нет
Выступает как пустая ячейка в отличии от undefined, где значение не определено.
*/

null==0; //false, т.к. null-булево значение, а 0 - число
null===0; //false, т.к. оба типа приводятся к false

///////////////////////////////////////
// Задание №8
///////////////////////////////////////

function power(valArg, powArg) {
 if (powArg < 0) {
        return 1 / powerRecursion (valArg, (-powArg));
    } else {
        return powerRecursion (valArg, powArg);
    }
}

function powerRecursion(valArg, powArg) {
    if (powArg == 0){
        return 1;
    } else {
        return valArg * power (valArg, powArg - 1);
    }
}

var val, pow;
val = parseInt(prompt('Введите основание', 1));
pow = parseInt(prompt('Введите степень', 0));
if (val == 0) {
    console.log('Неверно задано основание');
} else {
    console.log('Результат возведения в степень = ' + power(val, pow));
}
