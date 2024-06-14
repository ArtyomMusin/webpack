import { useState } from 'react'
import './App.scss'

const App = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prevState => prevState + 1)}>increment</button>
        </div>
    )
}

export default App
