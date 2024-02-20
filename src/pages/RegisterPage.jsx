import React from 'react'
import Navegador from '../Components/Navegador'
import { RegisterForm } from '../Components/RegisterForm'

export const RegisterPage = () => {
  return (
    <>
        <Navegador/>
        <div className='container separador'>
      <div className='row mb-3'>
        <div className='col-6 offset-3'>
          <div className='card card-registro'>
            <img src= '' className='card-img-top' alt='img portada' />
            <div className='card-body'>
              <h3 className='card-title text-center mb-3'>Crea tu Cuenta gratis</h3>
              <RegisterForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
