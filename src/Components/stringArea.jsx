import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);
  let shortText = text;

  if (!expand && text.length > 200) {
    shortText = text.slice(0, 200) + "...more";
  }
  return (
    <div onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line) => (
        <span>
          {line} <br />
          <span />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
