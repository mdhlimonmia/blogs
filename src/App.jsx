import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='header'>
        <h3>Knowledge Cafe</h3>
        <img src="https://images.unsplash.com/profile-1619559142670-fcd58dab16a9image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
      </div>
      <Blogs></Blogs>
    </div>
  )
}

export default App
