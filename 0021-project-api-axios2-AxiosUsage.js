import axios from "axios";
import React, { useEffect, useState } from "react";

//let's catch the comments
// https://jsonplaceholder.typicode.com/comments
//one example is below

// {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },


function AxiosUsage() {
  const [commentsArray, setCommentsArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setCommentsArray(response.data);
      });
  }, []);

  return <div>
    {
        commentsArray.map(post => {
            return <div key={post.id} style={{margin: "15px"}}>{post.body}</div>
        })
    }
  </div>;
}

export default AxiosUsage;
