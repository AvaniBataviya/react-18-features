import React, { useSyncExternalStore } from "react";

const ExternalStore = () => {
  const width = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return <h1>width : {width}</h1>;
};

const getSnapshot = () => {
  return window.innerWidth;
};

const subscribe = (callback) => {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
};

const getServerSnapshot = () => true;

export default ExternalStore;
