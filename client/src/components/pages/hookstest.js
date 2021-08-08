// import React,{useState} from 'react';

// function TestHooks(){
//     const [name,setName]=useState({firstName:'',lastName:''});

//     const FirsTextChange=(e)=>{
//         let data={...name};
//          setName({...name,firstName:e.target.value});
        
//     }

//     const lastTextChange=(e)=>{
//         let data={...name};
//         setName({...name,lastName:e.target.value});
//     }

// return(
//     <div>
//         <h1>hooks Object</h1>
//         <input type='text' onChange={FirsTextChange} value={name.firstName}/>
//         <input type='text' onChange={lastTextChange} value={name.lastName}/>
//         <p>firstName:{name.firstName}</p>
//         <p>lastName:{name.lastName}</p>
//         <h2>{JSON.stringify(name)}</h2>
//         <hr/>
//         <h1>hooks Array</h1>
//     </div>
// )
// }

// export default TestHooks;

import React,{useState,useEffect} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('hitted');
    });
   const onBtnClick=(e)=>{  
        e.preventDefault();
        setCount(function(prevState){
            console.log(prevState);
            return prevState +1
            });
    }
return(
    <>
        <h1>Counter</h1>
        <p>you cllicked {count}</p>
        <button onClick={onBtnClick}>click</button>
    </>
);
}

export default Counter;