import { useState } from 'react';
import { useRouter } from 'next/router';

//MY COMPONENTS 
import { Box } from '../../components/Box';
import { Button } from '../../components/Button/Button';
// STYLES
import styles from '../../styles/pages/Auth.module.scss'
const SignIn = () => {
  
  // const { name } = router.query;
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter();

  const handleUser = async(event)=>{
    event.preventDefault()
    

    setError('')
    setMessage('')

    if(!email || !username || !password) return setError('All fields are required!')

    let userData = {
      username,
      email,
      password,
      createdAt: new Date().toISOString()
    }

    let response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    
    if(response.ok){
      alert('Account successfuly created')
      router.push('/')
    }
    

    let data = await response.json()

    if(data.success){
      setUsername('')
      setEmail('')
      setPassword('')

      return setMessage(data.message)
    } else {
      return setError(data.message)
    }

  }

  return (
    <div className={styles.content}>
      <div className={styles.leftContainer}>
        <div className={styles.wrapper}>
          <h2>.witekmikolajczak-ecommerce</h2>
        </div>
        <div className={styles.form}>
          <h1>Create Your Account</h1>
          <div className={styles.socialMedia}>
            "container for social icons"
            <hr/>  
          </div>
          
          <div className={styles.formWrapper}>
            <form onSubmit={handleUser}>
              <input type="text" id='text' placeholder='Username' required onChange={event => setUsername(event.target.value)}/>
              <input type="email" id='email' placeholder='Email' required onChange={event => setEmail(event.target.value)}/>
              <input id='password' name='password' type='password' placeholder='Password' required onChange={event=>setPassword(event.target.value)}/>

              {/* <label htmlFor='repeat-password'>Repeat password:</label>
              <input id='repeat-password' name='repeat-password' type='password' required/> */}
              <div className={styles.button}>
                <Button type='submit' >Sign up</Button>
              </div>
              
            </form>
          </div>
          
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1>Already have account ?</h1>
        <p>Login and discover a great amount of new products !</p>
        <Button onClick={()=>router.push('/login/login')}>Login</Button>
      </div>
      {/* <Box className={styles.box}>
        
      </Box> */}
      
    </div>
    
  );
};

export default SignIn;