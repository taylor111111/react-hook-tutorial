'use client'
import React, {useState} from 'react';

function Component() {

    const [str, setStr] = useState('');
    const [arr, setArr] = useState(['react', 'Koa']);

    const inputChangeHandler = (eve: any) => {
        setStr(eve.target.value);
    }

    const addHeadHandler = (eve: any) => {
        setArr([str, ...arr]);
        setStr('');
    }

    const addEndHandler = (eve: any) => {
        setArr([...arr, str]);
        setStr('');
    }

    const delHeadHandler = (eve: any) => {
        let new_arr = [...arr];
        new_arr.shift();
        setArr(new_arr);
    }

    const delEndHandler = (eve: any) => {
        let new_arr = [...arr];
        new_arr.pop();
        setArr(new_arr);
    }

    const delByIndex = (eve: any) => {
        let index = eve.target.attributes.index.value;
        let new_arr = [...arr];
        new_arr.splice(index, 1);
        setArr(new_arr);
    }

    return <div>
        <input type='text' value={str} onChange={inputChangeHandler}/>
        <button onClick={addHeadHandler}>add head</button>
        <button onClick={addEndHandler}>add tail</button>
        <button onClick={delHeadHandler}>delete from head</button>
        <button onClick={delEndHandler}>delete from tail</button>
        <ul>
            {arr.map(
                (item, index) => {
                    return <li key={`item${index}`}>learn{index} - {item}
                        <span key={index} onClick={delByIndex} style={{cursor: 'pointer'}}>delete</span>
                    </li>
                }
            )}
        </ul>
    </div>
}

export default Component;