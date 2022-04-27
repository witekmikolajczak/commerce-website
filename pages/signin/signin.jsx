import { useState } from 'react';
import { useRouter } from 'next/router';

//MY COMPONENTS 
import { Box } from '../../components/Box';
// STYLES
import styles from '../../styles/pages/SignIn.module.scss'
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
      router.push('/login')
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
      <Box className={styles.box}>
        <form onSubmit={handleUser} >
        <label htmlFor='text'>Username:</label>
          <input type="text" id='text' name='text' required onChange={event => setUsername(event.target.value)}/>

          <label htmlFor='email'>Email:</label>
          <input type="email" id='email' name='email' required onChange={event => setEmail(event.target.value)}/>

          <label htmlFor='password'>Password:</label>
          <input id='password' name='password' type='password' required onChange={event=>setPassword(event.target.value)}/>

          {/* <label htmlFor='repeat-password'>Repeat password:</label>
          <input id='repeat-password' name='repeat-password' type='password' required/> */}
          <button type='submit'>Submit</button>

        </form>
      </Box>
      
    </div>
    
  );
};

export default SignIn;