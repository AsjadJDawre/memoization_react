import React, { useMemo } from 'react'

function ExpensiveComponent() {
    const sum = () => {
        console.log('ExpensiveComponent')
        let i = 0
        while (i < 1000000000) {
            i++
        }
        return i
    }

    // const total = useMemo (()=> sum(), []) OR 
    const total = useMemo(sum, []);

  return (
    <div>ExpensiveComponent Sum : {total}</div>
  )
}

export default ExpensiveComponent