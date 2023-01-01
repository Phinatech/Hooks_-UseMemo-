import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
  const [show,setShow] = useState(false)
  const [myData, setData ]  = useState([])

  const fetchData = async ()=>{
    await axios
    .get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res)=>{
      setData(res.data)
    });
  }

  //To get the Longest name
  const getLongestname = (data)=>{
  let LongestName = "";
  for (let i = 0; i < data.length; i++){
    let current = data [i].name;

    if (current.length > LongestName.length){
      LongestName = current
    }
    console.log("This will show");
  }

  return LongestName
};

const myMemo = useMemo(()=> getLongestname(myData),
[]);

useEffect(()=>{
  fetchData();
},[]);
   
  return (
    <center>
      <div>
        <h1>UseMemeo</h1>
        <br />
        {myData.map((props) => (
          <div key={props.id}>
            <p>{props.name}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div>
        <h4>Longest Name</h4>
        <div>{myMemo}</div>
      </div>
      <br />
      <button
      onClick={()=>{
        setShow(!show)
      }}
      >hello</button>
      {show? <div>I show ooo</div>: null}
    </center>
  );
}

export default UseMemo
