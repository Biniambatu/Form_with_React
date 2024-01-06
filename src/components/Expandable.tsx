import React, { Children, useState } from "react";
import { number } from "zod";

interface props {
  children: string;
  maxCharm?: number;
}

const Expandable = ({ children, maxCharm = 20 }: props) => {
  const [isexpand, setExpand] = useState(true);
  if (children.length <= maxCharm) 
     return <p>{children}</p>;
  const text = isexpand ? children.substring(0, maxCharm) : children;
  return (
    <p>
      {text}...<button onClick={() => setExpand(!isexpand)}>
        {isexpand ? "more" : "less"}
      </button>
    </p>
  );
};
export default Expandable;
