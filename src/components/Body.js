import React, { useState } from "react";
import User from "./User";

const Body = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  let [list, setList] = useState([{ name: "s", age: 19 }]);

  const displayUser = (e) => {
    e.preventDefault();
    if (userName.trim() === "") {
      alert("Enter Valid Name");
    } else if (userAge < 0) {
      alert("Age Must be Greater then 0");
    } else {
      const obj = {
        name: userName,
        age: userAge,
      };

      list.push(obj);
      setList(list);
      setUserAge("");
      setUserName("");
    }
  };
  return (
    <div>
      <form>
        <label>
          UserName
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
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
