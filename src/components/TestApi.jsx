import { useEffect, useState } from "react";

export default function TestApi () {
  const [message, setMessage] = useState("...Loading...");

  const API_URL = import.meta.env.VITE_API_URL;

  async function fetchData() {
    const result = await fetch(`${API_URL}/hello`);
    const data = await result.json();
    console.log("result: ", result);
    console.log("data:", data);
    setMessage(data.message);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      Message: {message}
    </div>
  )
}