/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    // code here
    let x = "";
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i - 1] === " " || i === 0) 
        {
            x += str[i].toUpperCase();
        } else 
        {
            x += str[i];
        }
    }
    return x;
}

module.exports = capitalize;
