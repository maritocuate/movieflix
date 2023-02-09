import React, { useState } from 'react'
import './styles.scss'
import logo from '../../assets/logo-secondary.png'
import background from '../../assets/background.png'

function Login() {

  const [signIn, setSignIn] = useState(false)

  return (
    <div className='login'>
      
      <div className='login__background' style={{ backgroundImage: `url(${background})` }}>
        <div className='login__gradient'></div>
        <img
          className='login__logo'
          src={logo}
          alt='logo'
        />
      </div>
      
      <button
        onClick={() => setSignIn(true)}
        className='login__button'
      >Sign In</button>
      
      <div className='login__body'>

        {signIn ? (
          <>signInScreen</>
        ):(
          <>
            <h1>Unlmited films, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel any time.</h3>
            <div className='login__input'>
              <form>
                <input type='email' placeholder='Email Address' />
                <button
                  className='login__submit'
                  onClick={() => setSignIn(true)}
                >Get started</button>
              </form>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Login