import React from 'react'

const Hello=()=>{
    return(
        <>
        <h1>THIS IS A HELLO COMMPONENT</h1>
        </>
    )
}

function Welcome(){
    return(
        <>
        <h2>THIS IS WELCOME COMPONENT</h2>
        </>
    )
}

const ConditionalCompo = (props) => {
    let result= props.value

    // if(result){
    //     return <Hello />
    // }
    // else{
    //     return <Welcome />
    // }

    return(
        <>
        {

            result ? <Hello /> : <Welcome />
        }
        
        </>
    )
 

}
export {Hello}
export default ConditionalCompo
