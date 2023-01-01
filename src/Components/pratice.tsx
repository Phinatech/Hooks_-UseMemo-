// import React, { useMemo, useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// const UseMemoHook = () => {
//   const [myData, setMyData] = useState([]);
//   const [show, setShow] = useState(false);
//   const fetchData = async () => {
//     await axios
//       .get("https://jsonplaceholder.typicode.com/posts/1/comments")
//       .then((res) => {
//         setMyData(res.data);
//       });
//   };

//   const getLogestName = (data) => {
//     let longestName = "";

//     for (let i = 0; i < data.length; i++) {
//       let current = data[i].name;

//       if (current.length > longestName.length) {
//         longestName = current;
//       }
//       console.log("this will show");
//     }

//     return longestName;
//   };

//   const myMemo = useMemo(() => getLogestName(myData), []);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <center>
//       <div>
//         <h1>use memo hook</h1>
//         <br />
//         <br />
//         <br />
//         {myData.map((props) => (
//           <div key={props.id}>
//             <p>{props.name}</p>
//           </div>
//         ))}
//       </div>
//       <br />
//       <br />
//       <br />
//       <div>
//         <h4>Longest Name</h4>
//         <div>{myMemo}</div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           setShow(!show);
//         }}
//       >
//         Click me
//       </button>
//       {show ? <div>i show ohh</div> : null}
//       <br />
//       <br />
//       <br />
//       <br />
//     </center>
//   );
// };

// export default UseMemoHook;
