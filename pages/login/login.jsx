import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

//MY COMPONENTS 
import { Button } from '../../components/Button/Button';
// STYLES
import styles from '../../styles/pages/Auth.module.scss'
export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const [slideRight, setSlideRight] = useState(false)

  return (
    <div className={styles.content}>
      <div className={styles.leftContainer}>
        <div className={styles.wrapper}>
          <h2>.witekmikolajczak-ecommerce</h2>
        </div>
        <div className={styles.form}>
          <h1>Login to Your Account</h1>
          <div className={styles.socialMedia}>
            "container for social icons"
            <hr/>  
          </div>
          
          <div className={styles.formWrapper}>
            <form >
              <input type="text" id='text' placeholder='Username' required onChange={event => setUsername(event.target.value)}/>
              <input id='password' name='password' type='password' placeholder='Password' required onChange={event=>setPassword(event.target.value)}/>
              <div className={styles.button}>
                <Button type='submit' >Login</Button>
              </div>
            </form>
          </div>         
        </div>
      </div>
      <div className={slideRight ? styles.slideRight : styles.rightContainer} >
        <span onClick={()=> setSlideRight(true)}></span>
        <h1>Join to us !</h1>
        <p>Sign up and discover a great amount of new products !</p>
        <Button onClick={()=>router.push('/signup/signup')}>Sign up</Button>
      </div>
    </div>
  )
}

