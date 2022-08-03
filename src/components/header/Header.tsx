import React, { useState } from "react";
import Alert from "../alert/Alert";
import { useActions } from "../hooks/useActions";
import Modal from "../modal/Modal";
import SelectList from "../select/SelectList";
import './Header.css'
const Header = () => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState('')
    const { newZadachaTodo } = useActions() 
    const [alert, setAlert] = useState(false)
    const errors = 'Поле ввода недолжно быть пустое!'
    // setTimeout(() => {
    //     return <Alert props={errors}/>
    // }, 500)

    const addTodos = (event:any) => {
        event.preventDefault()
        if (value.replace(/^\s+|\s+$/g, '')){
            setActive(false)
            const id = Date.now()
            newZadachaTodo(value, id)
            setValue('')
        } else {
            setTimeout(() => setAlert(true), 200)
            setTimeout(() => setAlert(false), 3000)
        }
    }


    return (
        <header className="header">
            <div >
                <Modal active={active} setActive={setActive}>
                    {alert ? <Alert props={errors}/> : null}
                    <form onSubmit={(event) => addTodos(event)}>
                        <input 
                            type='text'
                            value={value}
                            autoFocus
                            onChange={(e) => setValue(e.target.value)}
                            placeholder='Введите текст'/>
                        <button type='submit'>добавить</button>
                    </form>
                </Modal> 
            </div>
            <SelectList setActive={setActive}/>
        </header>
    );
};

export default Header;