import React, { useEffect, useState } from "react";

const EffectCase3 = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (collapsed) {
      return;
    }

    function handleKeyUp(event) {
      switch (event.key) {
        case "Escape":
          setCollapsed(true);
          console.log('ESC!')
          break;
        default:
          break;
      }
    }
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [collapsed]);

  return <>{collapsed && <h1>Show Text when ESC</h1>}</>;
};

export default EffectCase3;
