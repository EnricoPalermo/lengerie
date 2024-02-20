import { useState, useEffect } from 'react';

import { LoginForm } from '../Components/LoginForm';

export const LoginPage = ({ setUser }) => {
  return (
    <div className='container'>
      <div className='row mb-3'>
        <div className='col-6 offset-3'>
          <div className='card card-registro'>
            <img src="" className='card-img-top' alt='portada' />
            <div className='card-body'>
              <h3 className='card-title text-center mb-3'>Inicia sesion</h3>
              <LoginForm setUser={setUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};