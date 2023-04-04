import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>React 18</h1>
      <ul className="menu">
        <li>
          <NavLink to="/">Automatic Batching</NavLink>
        </li>
        <li>
          <NavLink to="/transitions">Transitions</NavLink>
        </li>
        <li>
          <NavLink to="/useid">useId</NavLink>
        </li>
        <li>
          <NavLink to="/deferredvalue">useDeferredValue</NavLink>
        </li>
        <li>
          <NavLink to="/externalstore">useSyncExternalStore</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;
