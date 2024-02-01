'use client'
import React, {useState} from 'react';

function Component() {

    const [count, setCount] = useState(0);

    function clickHandler() {
        setCount(count + 1);
        console.log(count);
    }

    return <div onClick={clickHandler}>
        {count}
    </div>
}

export default Component;