import React, { useState, useTransition } from "react";
import SlowList from "./SlowList";

const Transitions = () => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // urgent : show what was type
    setText(e.target.value);

    // Transtion  update 
    startTransition(() => {  
      //transtion: show the result
      setQuery(e.target.value);
    });
  };

  console.log("-->", text, query);

  return (
    <>
      <input value={text} onChange={handleChange} />
      {isPending && <div>Loading...</div>}
      <SlowList text={query} />
    </>
  );
};

export default Transitions;
