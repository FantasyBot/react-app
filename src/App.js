import './App.css';
import { useState, useEffect } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaTumblr } from 'react-icons/fa';



var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function App() {
  const[num, setNum] = useState(0);
  const[tittle, setTittle] = useState(null);
  const[num2, setNum2] = useState(0);

 
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTittle(data.quotes);
    });
  }, []);

  const handleClick = () => {
    setNum(Math.floor(Math.random() * colors.length));
    setNum2(Math.floor(Math.random() * tittle.length));
 }

  return (
    <div className="App" style={{
      background: colors[num]
     }}>
      <div className="container">
        <div className="textContent">
          { tittle && <h3 style={{ color: colors[num] }}>{tittle[num2].quote}</h3> }
          { tittle && <p style={{ color: colors[num] }}>- {tittle[num2].author}</p> }
        </div>
        <div className="btns">
          <button style={{ background: colors[num] }}>< FaTwitter /></button>
          <button style={{ background: colors[num] }}>< FaTumblr /></button>
          <button style={{ background: colors[num] }} className='submit' onClick={handleClick}>Submit</button>
        </div>  
      </div>
      <div className="name">
        <p>by <a href="https://github.com/FantasyBot">Gurami</a></p>
      </div>
    </div>
  );
}

export default App;
