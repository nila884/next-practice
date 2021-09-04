import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitData() {
 console.log("submitted")    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div>
     <form onSubmit={submitData}>
          <h1>Login</h1>

          <input
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            value={email}
          />
          <input
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={password}
          />



          <input  type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
    
          </a>
        </form>
     </div>
    <Link href={`/register`}>
                <a>create an account</a>
              </Link>
  
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
