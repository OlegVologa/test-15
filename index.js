"use strict"

function createLogger() {
  let arr = [];
  return {
    log: function(message) {
      arr.push(message)
    },
    getLogs: function() {
      console.log(arr);
    },
  };
}

const logger = createLogger();

// Передадим в массив три сообщения для записи их в виде его элементов, и выведем все сохраненные сообщения в консоль
logger.log('one');
logger.log('two');
logger.log('three');
logger.getLogs();
// Доступа к массиву нет  если мы попробуем запустить строку
// console.log(arr);
// получим (arr is not defined)
console.log('');

function createRandomGenerator(min, max) {
  return Math.random() * (max - min) + min;
}
// Проверка получаем случайное число в заданном диапазоне (целое или дробное)
console.log(createRandomGenerator(0, 1));
console.log(createRandomGenerator(0, 100));
console.log(createRandomGenerator( -100, 0));


