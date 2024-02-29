import React, { useState, useRef } from "react";
import User from "./User";

const Body = () => {
    // const [userName, setUserName] = useState("");
    // const [userAge, setUserAge] = useState("");
    const userNameRef=useRef();
    const userAgeRef=useRef();
    const userCollegeRef=useRef();
    let [list, setList] = useState([{ name: "s", age: 19 ,college:"abc"}]);

    const displayUser = (e) => {
        e.preventDefault();
        if (userNameRef.current.value.trim() === "") {
            alert("Enter Valid Name");
        } else if (userAgeRef.current.value< 0) {
            alert("Age Must be Greater then 0");
        } else {
            const obj = {
                name: userNameRef.current.value,
                age: userAgeRef.current.value,
                college:userCollegeRef.current.value
            };

            list.push(obj);
            setList(list);
            console.log(list);
            userNameRef.current.value="";
            userAgeRef.current.value="";
            userCollegeRef.current.value="";
           
        }
    };
    return (
        <div>
            <form>
                <label>
                    UserName
                    <input
                        type="text"
                        ref={userNameRef}
                    />
                </label>
                <label>
                    Age
                    <input
                        type="number"
                        ref={userAgeRef}
                    />
                </label>
                <label>
                    CollegeName
                    <input
                        type="text"
                        ref={userCollegeRef}
                    />
                </label>
                <button type="submit" onClick={displayUser}>
                    {" "}
                    Add{" "}
                </button>
            </form>
            {list.map((val, index) => {

                return <User key={index} data={val} />;
            })}
        </div>
    );
};

export default Body;
