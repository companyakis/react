import axios from "axios";
import React, { useEffect, useState } from "react";

//let's catch the title
// https://jsonplaceholder.typicode.com/todos/1

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },

function AxiosUsage() {
  const [example, setExample] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setExample(response.data.title);
      });
  }, []);

  return <div>{example}</div>;
}

export default AxiosUsage;
