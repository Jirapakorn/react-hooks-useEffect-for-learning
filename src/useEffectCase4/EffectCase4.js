import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectCase4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.email}
         </li>
       ))}
      </ul>
    </>
  );
};

export default EffectCase4;
