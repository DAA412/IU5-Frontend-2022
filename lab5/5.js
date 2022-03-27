/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) 
{
    //code here
    const newArr = [];
    for (let index = 0; index < arr.length; ++index)
    {   
        let fl = false;
        for(const a of arr)
        {
            if (a.to === arr[index].from)
                fl = true;
        }
        if (!fl) 
            newArr.push(arr[index])
    };
    for (let index = 0; index < arr.length; ++index)
    {
        let temp;
        for(const a of arr)
        {
            if (a.from === newArr[newArr.length-1].to)
            {
                temp = a;
                break;
            }
        }
        if(temp !== undefined)
            newArr.push(temp);
    }
    return newArr;
}

module.exports = makeRoute;
