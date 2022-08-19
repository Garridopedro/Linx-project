import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/Components/Header/Header'
import { Form } from './assets/Components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header/>
     <Form/>
    </div>
  )
}

export default App
