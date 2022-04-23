import Head from 'next/head'
import Image from 'next/image'

// MY COMPONENTS
import {Navbar} from '../components/Navbar'
import { LeftBar } from '../components/LeftBar'
import { ProductList } from '../components/ProductList'

// STYLES
import styles from "../styles/Index.module.scss"

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>E commerce website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className={styles.products}>
        <div className={styles['left-bar']}>
          <LeftBar/>
        </div>
        <div className={styles.main}>
          <ProductList/>
        </div>
      </div>
      
    </div>
  )
}
