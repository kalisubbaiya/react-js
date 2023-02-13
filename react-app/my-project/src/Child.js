import React, {useEffect} from 'react'

const Child = () => {

    useEffect(()=>{
    console.log("Child", "ComponentDidMount");
        return() =>{
            console.log("componentWillUnmount");
        }
    })

  return (
    <div>Child</div>
  )
}

export default React.memo(Child);