/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) 
{
    //code here
    let newArray= [];
    (function flatArr(arr) 
    {
        arr.forEach(i => 
        {
            if (Array.isArray(i)) 
                flatArr(i);
            else 
                newArray.push(i)
        })
    })(arr)
    return newArray;
}

module.exports = get1DArray;
