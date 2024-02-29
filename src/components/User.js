import React from "react";

const User = (props) => {
  const name = props.data.name;
  const age = props.data.age;
  const college=props.data.college;
  
  
  return (
    <div>
      <h3>
        {name} : {age} :{college}
      </h3>
    </div>
  );
};

export default User;
