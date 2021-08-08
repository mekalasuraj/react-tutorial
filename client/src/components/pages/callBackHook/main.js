import React,{useCallback} from 'react';
import Button from './button';
import Title from './title';

const MainCallBackComponent =()=>{
const [age,setAge]=React.useState(0);
const [salary,setsalary]=React.useState(1000);  

const addSalary=useCallback(()=>{
    setsalary(salary+1000);
},[salary]);

const addAge=useCallback(()=>{
    setAge(age+1);
},[age]);

    return(
        <div>
            <Title name="salary" count={salary}/>
            <Button handleClick={addSalary}>Add Salary</Button>
           
            <Title name="Age" count={age}/>
            <Button handleClick={addAge}>Add Age</Button>
        </div>
    );
}
export default MainCallBackComponent;