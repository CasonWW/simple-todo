import React,{useState} from 'react';
import './index.css'

import {useDispatch} from 'react-redux';
import {saveTodo} from '../../features/todo'

const Input = () =>{
    const [input, setInput] = useState('');

    const dispatch = useDispatch()

    const add =() =>{
        dispatch(saveTodo({
            item:input,
            done:false,
            id:Date.now()
        }))
    }

    return(
        <div className='input'> 
            <input type='text' value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Input;