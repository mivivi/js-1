//////////////////////////////////////
//Задание №1// С помощью цикла while вывести
// все простые числа в промежутке от 0 до 100
//////////////////////////////////////


var limit = 100;
var j = 0;
// перебор от 0 до limit
while (j <= limit) {
    if (j <= 1) {
        j++;
        continue;
    }
    var i = j - 1;
    var r = true;
    // определяет простые числа
    while (i > 1) {

        if ((j % i) == 0) {
            //то тогда число а не простое
            r = false;
            break;
        }
        i--;
    }
    if (r) {
        console.log('Число ' + j + ' является простым.');
    }
    j++;
}


//////////////////////////////////////
//Задание №2// 
//////////////////////////////////////
/*С помощью цикла do…while написать функцию для 
вывода чисел от 0 до 10, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

var ten = 10;
var k = 0;
do {
    if (k == 0) {
        console.log(k + ' - это ноль');
    } else if (k % 2 == 0) {
        console.log(k + ' - четное число');
    } else {
        console.log(k + ' - нечетное число');
    }
    k++;
} while (k <= ten);

//////////////////////////////////////
//Задание №3// 
//////////////////////////////////////
/*Вывести с помощью цикла for числа от 0 до 9, 
НЕ используя тело цикла. То есть выглядеть должно вот так:
for(…){// здесь пусто}*/

for (var i = 1; i <= 9; console.log(i++)) {}

//////////////////////////////////////
//Задание №4// 
//////////////////////////////////////
/*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx*/

for (var p = ''; p.length < 20; console.log(p += 'x')) {}