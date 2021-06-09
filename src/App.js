import React from 'react';
import './App.css';
import Input from './components/Input';
import Item from './components/Item';

const todoList = [{
    item:"todo",
    done:false,
    id:124125123789
},{
    item:"todo2",
    done:false,
    id:918238905890
}]

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="todo-container">
                {
                    todoList.map(item =>(
                        <Item 
                        name={item.item}
                        done={item.done}
                        id={item.id}
                        />
                    ))
                }
            </div>
        </div>
        <Input/>
    </div>
  );
}

export default App;
