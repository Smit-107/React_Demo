import { useState } from 'react';
import './App.css';

function App() {
  let [demo, demo_update] = useState('Teasting');
  let [txt, settxt] = useState('');
  let [cnt, setcnt] = useState(0);

  let btnHandler = () => {
    demo_update('Change_Value');
    console.groupCollapsed(txt)
  }
 




  return (
    <>
      <h1>{demo}</h1>
      <button onClick={btnHandler}>Click me</button>

      <br />
      <br />

      <input type="text" name="" id="" onChange={(e) => { settxt(e.target.value) }} />
      <h1>{txt}</h1>
     

      <br />
      <br />



      <button onClick={() => {
        if (cnt > 0) {
          setcnt(cnt - 1)
        }
      }}>Counter -</button>

      <button onClick={() => { setcnt(cnt + 1) }}>Counter +</button>
      <h1>{cnt}</h1>


    </>
  );
}
export default App;
