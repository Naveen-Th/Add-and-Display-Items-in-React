import React,{useState} from "react";

export const Array = () => {
    const [inputVal,setInputVal] = useState('');
    const [items,setItems] = useState([]); 

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputVal !== '') {
        setItems((item) => [...item,inputVal]);
        setInputVal('')
        }
        else{
            alert('Plsease enter a value')
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputVal}/>
                <button type="submit">Add</button>
            </form>
            <ul>
            {
                items.map((item,id) => (
                    <li key={id}>{item}</li>
                ))
            }
            </ul>
           {items.length !== 0 ? <p>Number of item{items.length>=2?'s':''} added : {items.length}</p> : ''}
        </>
    )
}