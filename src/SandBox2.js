import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
// import { useEffect } from "react/cjs/react.development";
import { News } from "./newsComponents/News";

export  function SandBox2() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState(null);

  useEffect(()=>{
  setIsLoading(true);
  fetch("http://localhost:3000/newsData.json")
  // fetch("http://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // console.log("response:", response);
      return response.json();
    })
    .then((data) => {
      setTimeout(()=>{
        // console.log("data:", data);
        setIsLoading(false);
        setNews(data);      
      }, 3000)
    })
    .catch((err)=>{
      setIsLoading(false);
      console.log("error!", err);
    });
  },[]);

  return (
    <>
      {isLoading && <p>... Loading ...</p>}
      {Array.isArray(news) && <News data={news} />}
    </>
  );
}
