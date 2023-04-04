import React, { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";

const DeferredValue = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  console.log("-->", text, deferredText);
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
};

export default DeferredValue;
