import React from "react";
import "./Action.css";

function Action() {
  return (
    <div className="action">
      <div className="action-heading">
        <h1>Ready to get started? Sign up now!</h1>
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

export default Action;
