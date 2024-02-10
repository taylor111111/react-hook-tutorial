'use client'
import React, { useState,useEffect} from 'react';
/*
* 让useEffect只在挂载后和卸载前执行一次
* */
function Component() {
    const [a, setA] = useState(0);

    useEffect(() => {
        // let timer = setInterval(() => {setA(a+1)},1000);// <-- 请注意这行代码，暗藏玄机
        let timer = setInterval(() => {setA(a => a+1)},1000);
        return () => {
            clearInterval(timer);
        }
    }, []);//此处第2个参数为[]，告知React以后该组件任何更新引发的重新渲染都与此useEffect无关

    //定义第2个useEffect，专门用来处理网页标题更新
    useEffect(() => {
        document.title = `${a} - ${Math.floor(Math.random()*100)}`;
    },[a])
    return <div> {a} </div>
}

export default Component;