import React, { useState } from "react";
import { PropsType } from "./PropsType";

export const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <PropsType name="Truong" age={20}/>
      { isLoggedIn && <div>aaa</div> }
      <div className={isLoggedIn ? 'block' : 'hidden'}>aaa</div> 

      <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>Log In</button>

    </div>
  );
};
