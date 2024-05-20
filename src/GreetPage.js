import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function GreetPage() {
  const history = useHistory();
  const location = useLocation();
  const { message } = location.state || {};

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

export default GreetPage;
