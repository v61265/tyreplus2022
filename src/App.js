
import './App.css';
import { useState } from "react";
import {appendSpreadsheet} from './utils/googlesheets'

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeAge(e) {
    setAge(e.target.value)
  }

  function handleSubmit(e) {
   e.preventDefault()
   appendSpreadsheet({name, age})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>姓名：<input name='name' value={name} onChange={handleChangeName}></input></p>
        <p>年紀：
          <p>
          <input type="radio" id="18" name="age" value='18' checked={age === '18'} onChange={handleChangeAge}/>
          <label for="18">18 以下</label>
          </p>
          <p>
          <input type="radio" id="30" name="age" value="30" checked={age === '30'} onChange={handleChangeAge}/>
          <label for="30">18~30</label>
          </p>
          <p>
          <input type="radio" id="40" name="age" value="40" checked={age === '40'} onChange={handleChangeAge}/>
          <label for="40">30 以上</label>
          </p>
        </p>
        <button>送出</button>
      </form>
    </div>
  );
}

export default App;
