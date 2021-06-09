import React,{useState} from 'react';
import './index.css'

const Input = () =>{
    const [input, setInput] = useState('');

    const add =() =>{

    }

    return(
        <div className='input'> 
            <input type='text' value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Input;