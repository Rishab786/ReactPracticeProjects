import React, { useState, useEffect,useReducer } from "react";
import User from "./User";
const passwordReducer=(state,action)=>{
    if(action.type==="USER_INPUT")
    {
        return({value:action.val,isValid:action.val.length>6})
    }
    if(action.type==="USER_BLUR")
    {
        return({value:state.value,isValid:state.value.length>6})
    }
        return {value:"", isValid:false}
}
const Body = () => {

    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [password,setPass]=useState('');
    const [passState,dispatchPassword]=useReducer(passwordReducer,{value:'',isValid:false});

    const [isValidForm,setIsValidForm]=useState('false');


    useEffect(()=>{
      if(name.trim().length===0 && age<0 && passState.isValid)
      {
        alert("Enter Valid input");
        setIsValidForm("false");
      }
      else 
      {
        setIsValidForm("true");
      }

    }
, [name,age]);


    let [list, setList] = useState([{ name: "s", age: 19, college: "abc" }]);
    const validatePasswordHandler=(e)=>{
        dispatchPassword({type:"INPUT_BLUR",val:e.target.value});
    }

    
    return (
        <div>
            <form>
                <label>
                    UserName
                    <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </label>
                <label>
                    Age
                    <input
                        type="number"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPass(e.target.value)}
                    />
                </label>
                <button type="submit" >
                   
                    Add
                </button>
            </form>
            {list.map((val, index) => {

                return <User key={index} data={val} />;
            })}
        </div>
    );
};

export default Body;
