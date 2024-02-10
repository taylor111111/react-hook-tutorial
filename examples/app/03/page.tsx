'use client'
import React, {useState} from 'react';
import ExampleArr from './arr';

function Component() {

    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({name:'puxiao',age:34});

    function handleCount() {
        // increaseThreeTimes0();
        // increaseThreeTimes1();
        increaseThreeTimes2();
        console.log(count);
    }

    const increaseThreeTimes0 = () => {
        for (let i = 0; i < 3; i++) {
            setCount(count + 1);
        }
    }

    const increaseThreeTimes1 = () => {
        let num = count;
        for (let i = 0; i < 3; i++) {
            num += 1;
        }
        setCount(num);
    }

    const increaseThreeTimes2 = () => {
        for (let i = 0; i < 3; i++) {
            setCount(prevData => {
                return prevData + 1
            });
            //or setCount(prevData => prevData+1);
        }
    }

    const handleAge = () => {
        // setAge0();
        setAge1();
    }

    const setAge0 = () => {
        console.log(person);//{name:'puxiao',age:34}
        // @ts-ignore
        setPerson({age: 18});
        console.log(person);//{age:18}
    }

    const setAge1 = () => {
        console.log(person);//{name:'puxiao',age:34}
        setPerson({...person,age:18});
        console.log(person);//{age:18}
    }


    return <>
        <button onClick={handleCount}>
            count: {count}
        </button>
        <br/>
        <button onClick={handleAge}>
            age: {person.age}
        </button>

        <br/>

        <ExampleArr/>
        
    </>
}

export default Component;