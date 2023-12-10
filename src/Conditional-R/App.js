import React from 'react'
import LogicalCompo from './LogicalCompo';
// import ConditionalCompo from './Conditional-R/ConditionalCompo';
// import FunCompo from './FunCompo';
// import ClassCompo from './COMPONENT/ClassCompo';

let car=['MARUTI','AUDI','BMW','NANO']
function App() {
  return (
    <div>
     {/* <h1>HELLO APP COMPONENT</h1> */}

     {/* <FunCompo val={"jjddd"} /> */}
   
     {/* <ClassCompo da={"HELLO"} /> */}



{/* <ConditionalCompo value={true} /> */}

<LogicalCompo val={car} />



    </div>
  );
}
export default App;
