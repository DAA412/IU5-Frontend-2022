import React, {useState} from 'react';
import './styles/AddItem.css';

function AddItem({onCreate})
{
    const [value, setValue] = useState('');
    function SubmitHandler(event)
    {
        event.preventDefault();
        if(value.trim()){
            onCreate(value);
            setValue('');
        }
    }
    return(
    <form className="addItemForm" onSubmit={SubmitHandler}>
        <input value={value} onChange={event => setValue(event.target.value)} />
        <button type="submit" className="addItemButton">Добавить</button>
    </form>
    )
}
export default AddItem 