import React, {useState, useEffect} from 'react'

function Counter(){
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}> Click me</button>
            <button onClick={() => setCount(prev => prev + 1)}> Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}> Decrement</button>

        </div>
    );

}
export default Counter;