import React from "react"
import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/Data'
import { TodoList } from "./TodoList";

const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false
        }])
        setValue('')
    }

    useEffect(() => {
            inputRef.current?.focus()
    }, [])

    const onKeyDownHandle:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter'){
            addTodo()
        }
        
    }

    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const add = (id:number) => {
        
    }
    const remove = (id:number) => {

    }

    return <div>
        <div>

            <input onKeyDown={onKeyDownHandle} value={value} ref={inputRef} onChange={handleInput} />
            <button  onClick={addTodo}>add</button>
        </div>
        <TodoList remove={remove} add={add} items={todos} />
    </div>
}

export { App }