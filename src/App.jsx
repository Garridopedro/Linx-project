import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/Components/Header/Header'
import { Form } from './assets/Components/Form/Form'
import Produtos from './assets/Components/Produtos/Produtos'
import Footer from './assets/Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header/>
     <Form/>
     <Produtos/>
     <Footer/>
    </div>
  )
}

export default App
