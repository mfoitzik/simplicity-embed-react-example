import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { SimplicityEmbed, defineCustomElements } from '@simplicitywebtools/simplicity-embed-react'


defineCustomElements();
function App() {
  const [count, setCount] = useState(0);
  const [seSetup, setSeSetup] = useState("http://localhost:5500/config.json");
  const seRef = useRef<HTMLSimplicityEmbedElement | null>(null);
  function openSimplicityEmbed() {
    if (seRef.current) {
      
      seRef.current.open();
    }
  }
  function closeSimplicityEmbed() {
    seRef.current?.close();
  }
  function sendCommand() {
    const sendObj = {
      "action": "spin"
    }
    seRef.current?.sendMessage(sendObj);
  }
  function changeConfig() {
    setSeSetup("http://localhost:5500/config2.json");
  }
  function handleSbNotify(event: CustomEvent) {
    console.log("I received a notify event");
    console.log(event.detail);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
        <button type="button" onClick={openSimplicityEmbed}>Open</button>
      </div>
      <div>
        <button type="button" onClick={closeSimplicityEmbed}>Close</button>
      </div>
      <div>
        <button type="button" onClick={sendCommand}>Send Command</button>
      </div>
      <div>
        <button type="button" onClick={changeConfig}>Change Config</button>
      </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <SimplicityEmbed
    setup={seSetup}
    id="simplicity"
    ref={seRef}
    data-icon="heart"
    data-count="7"
    data-color="rgb(245, 241, 5)"
    data-background="rgb(58,85,156)"
    data-heading="Rate Me!"
    onSbnotify={handleSbNotify}>
  </SimplicityEmbed>
    </>
  )
}

export default App
