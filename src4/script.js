///////////////////////
///Задание №1///
/////////////////////////
/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо*/

var num = parseInt(prompt('Введите число от 0 до 999', 0));

        function numToObject(num) {

            if (num > 999) {
                console.log('Введите число, не больше 999');
                return null;
            } else {
                object = {
                    'единицы': num % 10,
                    'десятки': Math.floor(num / 10) % 10,
                    'сотни': Math.floor(num / 100) % 10
                }
                return object;
            }
        }
        console.log(numToObject(num));


/////////////////////////
///Задание №2///
/////////////////////////
/*Для игры, реализованной на уроке, добавить возможность хода по диагонали, а также не давать пользователю выходить за пределы карты. Также реализуйте возможность отмены последнего хода (можно, например, создать свойство в объекте, в котором будем хранить предыдущую позицию игрока)*/

    // объект нашей игры
    var game = {
        // размер карты
        rows: 3,
        cols: 3,

        // текущая позиция игрока
        position: 0,

        // перемещение игрока
        up: function() {
            this.position += 1;
        },
        down: function() {
            this.position -= 1;
        },
        diagonalDownRight: function() {
            this.position += this.cols + 1;
        },
        diagonalDownLeft: function() {
            this.position -= -this.cols + 1;
        },

        diagonalUpLeft: function() {
            this.position -= this.cols + 1;
        },

        diagonalUpRight: function() {
            this.position += -this.cols + 1;
        },

        // limitPosition: function() {
        //     if (position < 0) {

        //     }
        // }




        // метод для генерации карты
        draw: function() {
            var cellNumber = 0;
            var line = '';

            // цикл для заполнения строк
            for (var r = 0; r < this.rows; r++) {
                // цикл для заполнения колонок
                for (var c = 0; c < this.cols; c++) {
                    // если номер ячейки совпадает с позицией игрока отмечаем его позицию
                    if (cellNumber === this.position) {
                        line += '0';
                    } else {
                        line += 'x';
                    }

                    // увеличиваем номер ячейки
                    cellNumber++;
                }

                // делаем перевод строки
                line += '\n';
            }

            return line;
        },

        // стартовая точка игры
        start: function() {
            var command;

            // выводим приветствие и начальное состояние карты
            console.log('Hello!');
            console.log(this.draw());

            // запускаем цикл игры
            while (command = prompt('Введите команду', '')) {
                // проверяем доступна ли команда
                switch (command) {
                    case 'up':
                        this.up();
                        break;

                    case 'down':
                        this.down();
                        break;

                    case 'diagonalDownRight':
                        this.diagonalDownRight();
                        break;
                    case 'diagonalDownLeft':
                        this.diagonalDownLeft();
                        break;

                    case 'diagonalUpLeft':
                        this.diagonalUpLeft();
                        break;

                    case 'diagonalUpRight':
                        this.diagonalUpRight();
                        break;
                      

                        // case 'limitPosition':
                        // this.limitPosition();
                        // break;

                        
                    default:
                        console.log('Не правильная команда!');
                        break;
                }

                // перерисовываем карту
                console.log(this.draw());
            }
        }
    };

    // запускаем игру
    game.start();
