import React, { useState, useEffect } from "react";
import { api } from "./Api";

const App = () => {
  const [successText, setSuccessText] = useState(null);

  useEffect(() => {
    api
      .get("/")
      .then(({ data }) => setSuccessText(data))
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <h2>Hello World, Ernir is running!</h2>
      <p>Fetched api response from server: {successText}</p>
    </div>
  );
};

export default App;