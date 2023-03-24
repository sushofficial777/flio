import  { useState } from "react";

function Test() {
  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div onClick={handleClick}
      style={{ color: active ? "blue" : "white" }}
     >
  
    </div>
  );
}

export default Test;