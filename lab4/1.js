/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    //code here
    let result = [];
    let keys = [];
    let map = new Map();
    let a = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        let Word = arr[i].toLowerCase().split("").sort().join("");
        if (keys.includes(Word)) 
            map.get(Word).push(arr[i]);
        else
        {
            map.set(Word, [arr[i]]);
            keys.push(Word);
        }
    }
    keys.forEach(function(elem) 
    {
        result.push(map.get(elem));
    });
    return result;
}

module.exports = getAnagramms;
