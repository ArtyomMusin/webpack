import { useState } from 'react'
import style from './App.module.scss'
import { Outlet } from 'react-router-dom'

const App = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={style.App}>
            <h1>{count}</h1>
            <button onClick={() => setCount(prevState => prevState + 1)}>increment</button>
            <Outlet />
        </div>
    )
}

export default App
