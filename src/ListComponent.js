import React, { useState } from "react";

function ListComponent() {
  const [name, setName] = useState("Priyanka");
  return (
    <>
      <div className="mainCls">
        <ul>
          <li key="angular" className="liCls">
            Angular
          </li>
          <li key="node" className="liCls">
            node
          </li>
          <li key="react" className="liCls">
            React
          </li>
        </ul>
      </div>
      <div className="number">
        <span>One</span>
        <span>Two</span>
      </div>
      <div>
        <button className="submit"> Submit</button>
        <button className="submitBtn disable"> Submit</button>
        <button className="submitBtn"> Submit</button>
      </div>
      <div>
        <div className="someClass">
          <h1>Hello User</h1>
        </div>
      </div>
    </>
  );
}
export default ListComponent;
