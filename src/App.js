import { useState, useEffect, useCallback, createContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import Child from './components/Child'
export const Mycontext = createContext('xixiixix')
function App() {
  const [count, setCount] = useState(0)
  console.log('=========');

  const changeCount = useCallback(() => {
    setCount((count) => count + 1)
  }, [])


  const handleClick = () => {
    changeCount()
    // setCount(1111)
  }

  const handleClick2 = () => {
     setCount(count + 1)
  }
  useEffect(() => {
    console.log('父组件');
    changeCount()
  }, [changeCount])

  return (
    <div className="App">
      <header className="App-header">
        <Mycontext.Provider value={count}>
        <Child></Child>
        </Mycontext.Provider>
        <div className='test'>
          {count}
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p onClick={handleClick}>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div onClick={handleClick2}>
          测试
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
