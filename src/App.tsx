import React, {useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {Button} from "./Button";
import {Input} from "./Input";

type TodosType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {

    const [todos, setTodos] = React.useState<TodosType[]>([])

    //const [title, setTitile] = React.useState('')

    let title = useRef<HTMLInputElement>(null)
      const fetchQuery = () => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setTodos(json))
     }

    useEffect(() => {
        fetchQuery()
    }, [])

    const showHandler = () => {
        fetchQuery()
    }
    const hideHandler = () => {
        setTodos([])
    }

const addTodo = () => {
        if(title.current){
        const todo = {userId: 100200, id: todos.length+1, title: title.current.value, completed: false}
        setTodos([todo,...todos])
        title.current.value = ''
}
}

return (
        <div className="App">
            <Button name={'show'} callBack={showHandler}/>
            <Button name={'hide'} callBack={hideHandler}/>
            <div>
                <Input title = {title} />
                <Button name={'+'} callBack={addTodo}/>
            </div>

            <ul>
                {todos.map(el => {
                    return (
                        <li>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })
                }
            </ul>

        </div>
    )
}
export default App;
