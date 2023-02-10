import React, { useRef } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import './styles.scss'

function Signin() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }
    const signIn = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className='signin'>
            <h1>Sign In</h1>
            
            <form onSubmit={register}>
                <input type='email' placeholder='Email' ref={emailRef} />
                <input type='password' placeholder='Password' ref={passwordRef} />
                <button type='submit'>Sign In</button>
                <p className='signin__footer'>
                    <span className='signin__gray'>New to Movieflix? </span>
                    <span className='signin__link' onClick={signIn}>Sign up now</span>.
                </p>
            </form>
        </div>
    )
}

export default Signin