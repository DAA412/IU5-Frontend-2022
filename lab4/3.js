/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) 
{
    //code here
    let newStr = '';
    let tChar = str[0];
    let count = 0;
    for (let i = 0; i <= str.length; ++i) 
    {
        if (str[i] == tChar) 
            count++;
        else 
        {
            if (count > 1) 
            {
                newStr += tChar;
                newStr += count;
            } 
            else
                newStr += tChar;
            count = 1;
            tChar = str[i];
        }
    }
    return newStr;
}

module.exports = rle;
