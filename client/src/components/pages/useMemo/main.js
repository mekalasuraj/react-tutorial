
import React,{useState,useMemo} from 'react';

function MainMemoComponent(props) {
   const [countOne,SetCountOne]=useState(0);
   const [countTwo,SetCountTwo]=useState(0);

   const isEven=useMemo(()=>{
    console.log('is even render');
    return "alpha"
   },[countOne]);

    return (
      <div>
          <button onClick={()=>SetCountOne(countOne+1)}>count1 - {countOne}</button>
          <span>{isEven}</span>
          <button onClick={()=>SetCountTwo(countTwo+1)}>count2 - {countTwo}</button>
      </div>
    )
  }

  export default MainMemoComponent;

