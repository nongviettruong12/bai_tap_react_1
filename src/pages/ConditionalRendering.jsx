import React, { useState } from "react";

export const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <h1>wellcome back</h1>
      ) : (
        <button onClick={()=> setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};
