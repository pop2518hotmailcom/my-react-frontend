import { useState, useEffect } from "react";

export default function TestMongo () {

  const [data, setData] = useState([]);

  async function fetchMongoData () {
    const result = await fetch('http://localhost:3000/api/mongo_test');
    const data = await result.json();
    setData(data);
  }

  useEffect(()=>{
    fetchMongoData();
  },[]);

  return (
    <>
    <div>Test Mongo...</div><br/>
    {
      data.map((record, index)=>{
        return(
          <div style={{textAlign: "left"}}>
            <div key={index}>
              <ul>
                <li>ID: {record._id} </li>
                <li>Name: {record.name} </li>
                <li>Text: {record.text}</li>
              </ul>
            </div>
            <hr/>
          </div>
        );
      })
    }
    </>
  )
}