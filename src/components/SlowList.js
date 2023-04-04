import React, { useMemo } from "react";

const SlowList = ({ text }) => {
  const items = useMemo(() => {
    let list = [];
    for (let i = 0; i < 500; i++) {
      list.push(<ListItem className="item" key={i} text={text} />);
    }
    return list;
  }, [text]);
  return items;
};

const ListItem = ({ text }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <div className="item">Text: {text}</div>;
};
export default SlowList;
