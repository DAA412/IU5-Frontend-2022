/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    // code here
    let a =[];
    let t = "";
    for (let i = 0; i < str.length; i++) 
    {   
        if (!isNaN(Number(str[i]))||(str[i] === "-")||(str[i] === "."))
            {                 
                t = t + str[i];
            }   
        if ((str[i] === ",")||(str[i] === " ")||(i === str.length-1))
            {  
                Number(t);
                a.push(t);
                String(t);
                t = ""; 
            }
    }
    a = String(a);
    a = a.split(/,| |]/);
    a = a.filter(b => b != "")
    return {'min': Math.min.apply(null, a), 'max': Math.max.apply(null, a)};
}
module.exports = getMinMax;
