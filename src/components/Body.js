import React, { useState, useEffect } from "react";
import User from "./User";

const Body = () => {

    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [college,setCollege]=useState('');
    const [isValidForm,setIsValidForm]=useState('false');
    
    useEffect(()=>{
      if(name.trim().length===0 && age<0 && college.trim().length===0)
      {
        alert("Enter Valid input");
        setIsValidForm("false");
      }
      else 
      {
        setIsValidForm("true");
      }

    }
, [name,age,college]);


    let [list, setList] = useState([{ name: "s", age: 19, college: "abc" }]);

    
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
                    CollegeName
                    <input
                        type="text"
                        value={college}
                        onChange={(e)=>setCollege(e.target.value)}
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
