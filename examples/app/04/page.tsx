'use client'
import React, { useState,useEffect} from 'react';

function Component() {
    const [a, setA] = useState(0);
    useEffect(() => {
        //Whether it's the first time the component is mounted or every time the component is updated in the future,
        // the executable code to change the page title only needs to be written once here
        document.title = `${a} - ${Math.floor(Math.random()*100)}`;
    })
    const clickAbtHandler = (eve) =>{
        setA(a+1);
    }
    return <div>
        {a}
        <button onClick={clickAbtHandler}>a+1</button>
    </div>
}

export default Component;