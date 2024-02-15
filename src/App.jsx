import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import { ContactPage } from './pages/Contacto'
import { HomePage } from './pages/HomePage'
import { Error404Page } from './pages/Error404Page'

import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage/>}></Route>
        <Route path='/contact' element= {<ContactPage/> }></Route>
        <Route path='/*' element= {<Error404Page/>}></Route>
      </Routes>
    </BrowserRouter>)
  }

export default App
