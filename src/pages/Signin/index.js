import './styles.scss'

function Signin() {

    const register = (e) => {
        e.preventDefault()
    }
    const signIn = (e) => {
        e.preventDefault()
    }

    return (
        <div className='signin'>
            <h1>Sign In</h1>
            
            <form onSubmit={signIn}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Sign In</button>
                <p className='signin__footer'>
                    <span className='signin__gray'>New to Movieflix? </span>
                    <span className='signin__link' onClick={register}>Sign up now</span>.
                </p>
            </form>
        </div>
    )
}

export default Signin