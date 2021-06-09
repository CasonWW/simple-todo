import React from 'react';
import './index.css'

const Item = ({name,done,id}) =>{
    return(
        <div className="Item">
            <p className={done && 'Item--done'}>{name}</p>
        </div>
    )
}

export default Item;
