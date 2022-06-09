import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import {Brands} from "./components/brands"
import { Products } from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>E-Commerce</h2>
      <Brands></Brands>
      <Products/>
    </div>
  )
}

export default App
