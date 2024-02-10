'use client'

/*
* 性能优化
* */

// @ts-ignore
import React, { useState,useEffect} from 'react';

function Component() {
    const [obj,setObj] = useState({a:0,b:0});
    useEffect(() => {
        document.title = `${obj.a} - ${Math.floor(Math.random()*50)}`;
    },[obj.a]); //注意此时我们并未设置useEffect函数的第2个参数

    //如果下面代码看不懂，你需要重新去温习useState高级用法中的“数据类型为Objcet，修改方法”
    return <div>
        {JSON.stringify(obj)}
        <button onClick={() => {setObj({...obj,a:obj.a+1})}}>a+1</button>
        <button onClick={() => {setObj({...obj,b:obj.b+1})}}>b+1</button>
    </div>
}
export default Component;