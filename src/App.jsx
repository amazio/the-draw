import { useState } from 'react'
import './App.css'
import Pot from './components/Pot/Pot';

function App() {
  return (
    <>
      <header>
        <div className="title">THE DRAW &nbsp;2024</div>
        <div className="triangle" />
        <Pot />
      </header>
      <main>main</main>
      <footer>&copy; 2024 Amazio Software</footer>
    </>
  )
}

export default App
