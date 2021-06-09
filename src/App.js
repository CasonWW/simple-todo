import React from 'react';
import './App.css';
import Input from './components/Input';
import Item from './components/Item';

import{useSelector} from 'react-redux'
import{selectTodoList} from './features/todo'

function App() {

    const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
        <h1> Simple Todo </h1>
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
            <Input/>
        </div>
    </div>
  );
}

export default App;
