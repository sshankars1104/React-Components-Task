import React from "react";
import "./MasterHead.css";

function MasterHead() {
  return (
    <div className="masthead">
      <div className="Page-heading">
        <h1>Generate more leads with a professional landing page!</h1>
        <form action="#" method="post" id="emailForm">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MasterHead;
