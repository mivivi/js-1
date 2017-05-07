// Задание №1
var tc = prompt('Введите температуру в Цельсиях', 0);
var tf = (9 / 5) * tc + 32;
alert('Температура по Фаренгейту =' + tf);


// Задание №2
var a = 'Собака съела товар';
var b = 2;
var c = true;
alert(c); // true
var d = '3';
alert(a + b); // Собака съела товар2
alert(d + b); // 32
alert(+d + b); // равно 5
alert(Number(d) + b); // равно 5
alert(Number(d + b)); // равно 32
alert(typeof Number(d + b)); // выведет number
alert(typeof(d + b)); // выведет string
var e = d + b;
alert(typeof e); // выведет string
var f = Number(e); //32
alert(e); // выведет 32
alert(f); // выведет 32
alert(e + f); // выведет 3232
alert(e === f); // выведет false
alert(e == f); // выведет true
var g = 'true';
var h = 1;
var j = '1';
alert(c == g); // выведет false
alert(g == c); // выведет false
alert(c == h); // выведет true
alert(h == c); // выведет true
alert(typeof(c == h)); // выведет boolean
alert(typeof(h == c)); // выведет boolean
//при сравнении оператором == происходит преобразование типов. вопрос: переменная "c" приводится к числу или число приводится к логическому типу?

//Задание №3
var name = 'Christian Bale'
var admin = name;
alert(admin);

//Задание №4
var a = 1000;
var b = '108';
alert(a + b); // выведет 1000108
