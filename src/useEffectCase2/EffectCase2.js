import React, { useEffect, useState } from "react";

const EffectCase2 = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("useEffect!");
  }, []);
  
  useEffect(() => {
    console.log("useEffect when click!");
  },[showText]);

  const toggleHandler = () => {
    setShowText(!showText);
  };

  return (
    <>
      {showText && <h1>Show Text</h1>}
      <button onClick={toggleHandler}>Click Here</button>
    </>
  );
};

export default EffectCase2;
