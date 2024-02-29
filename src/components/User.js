import React from "react";

const User = (props) => {
  const name = props.data.name;
  const age = props.data.age;
  
  return (
    <div>
      <h3>
        {name} : {age}
      </h3>
    </div>
  );
};

export default User;
