import Router from "./Router";
import React from "react";

function App() {
  // const [message, setMessage] = useState([]);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((res) => { return res.json(); })
  //     .then((data) => { setMessage(data); });
  // }, []);  

  return (
    <div className="App">

      {/* <header className="App-header">
        <ul>{message.map((v, idx) =>
          <li key={ `${idx}-${v}` }>
            {v}
          </li>)}
        </ul>
      </header> */}
      
      <Router />
    </div>
  );
}

export default App;


// const notify = () => toast('Here is your toast.');

// const App = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//     </div>
//   );
// };