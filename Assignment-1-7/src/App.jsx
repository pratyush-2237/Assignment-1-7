import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <a href="/src/assignment_1/index1.html" target="_blank">Assignment-1</a><br/>
    <a href="/src/assignment2/index2.html" target="_blank">Assignment-2</a><br/>
    <a href="/src/assignment3/index3.html" target="_blank">Assignment-3</a><br/>
    <a href="/src/assignment4/index4.html" target="_blank">Assignment-4</a><br/>
    <a href="/src/assignment_5/index5.html" target="_blank">Assignment-5</a><br/>
    <a href="/src/assignment_6/index6.html" target="_blank">Assignment-6</a><br/>
    <a href="/src/assignment-7/index7.html" target="_blank">Assignment-7</a><br/>
    </>
  )
}

export default App;
