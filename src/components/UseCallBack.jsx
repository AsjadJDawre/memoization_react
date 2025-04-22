import React, { useCallback, memo } from 'react'

const Button = memo(({onClick, children}) => {
    console.log('rendereing Button: ', children)
    return (
        <button style={{backgroundColor:children=="Increment" ? 'green' : 'red' , margin:'10px'}} onClick={onClick}>
            {children}
        </button>
    )


})

function UseCallBack() {
    const [count, setCount] = React.useState(0)
   
  
  const increment=  useCallback(()=>{
    console.log('increment')
    setCount((prev)=>prev+1)    }, [])
  const decrement=  useCallback(()=>{
    console.log('increment')
    setCount((prev)=>prev-1)    }, [])
  return (
    <div><h1> Count : {count}</h1>
    
    <Button onClick={increment}>Increment</Button>
    
    <Button onClick={decrement}>Decrement</Button>
    
    
    </div>
  )
}

export default UseCallBack