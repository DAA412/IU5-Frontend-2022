/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    //code here
    let newStr = str.split('');
    let result = [];
    let open = ['[', '<', '('];
    let close = [']', '>', ')'];
    for (let i = 0; i < newStr.length; i++) 
    {
       let left = open.indexOf(newStr[i]);
       if (left !== -1) 
           result.push(left);
       let right = close.indexOf(newStr[i]);
       if (right !== -1) 
       {
           left = result.pop();
           if (right !== left) 
               return false;
       }
    }
    if (result.length !== 0) 
        return false;
    return true;
}

module.exports = checkBrackets;
