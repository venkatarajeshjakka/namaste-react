import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Vizag</h3>
      <h4>Contact: venkatarajeshjakka@outlook.com</h4>
    </div>
  );
};

//1163270112001411

export default User;
