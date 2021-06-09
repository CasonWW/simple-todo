import React from 'react';
import './index.css'

import Checkbox from '@material-ui/core/Checkbox'
import {useDispatch} from 'react-redux';
import {setCheck} from '../../features/todo';

const Item = ({name,done,id}) =>{
    const dispatch = useDispatch();
    
    const handleCheck = () =>{
        dispatch(setCheck(id));
    }

    return(
        <div className="Item">

            <Checkbox 
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{'aria-label':'secondary checkbox'}}
            />

            <p className={done && 'Item-done'}>{name}</p>

        </div>
    )
}

export default Item;
