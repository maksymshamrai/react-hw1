import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const name = 'Maksym';
  const favoriteSite = { name: "YouTube", url: "https://www.youtube.com/" };
  
  const a = 3;
  const b = 4;
  const sum = a + b;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={reactLogo} className="logo react" alt="React logo" /><br/>
      <a href="{favoriteSite.url}">{favoriteSite.name}</a>
      <p>{sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </>
  )
}

export default App
