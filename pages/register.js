import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { userName, password,email };
      await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="A register page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div><h1>Register</h1></div>
      
<div>
       <form onSubmit={submitData}>
         
         <div>
<div>
<input
            autoFocus
            onChange={(e) => setUserName(e.target.value)}
            placeholder="name"
            type="text"
            value={userName}
          />
</div>
<div>
<input
            autoFocus
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="company name"
            type="text"
            value={companyName}
          />
</div>
<div>
<input
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            value={email}
          />
</div>
<div>
<input
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={password}
          />
</div>
          <div>
          <input
            autoFocus
            onChange={(e) => setComfirmPassword(e.target.value)}
            placeholder="comfirm password"
            type="password"
            value={comfirmPassword}
          />

          </div>

          <div>
          <input disabled={!userName || !email || !companyName } type="submit" value="Create" />
          </div>
    <div>
    <Link href={`/`}>
                <a>Cancel</a>
        </Link>
    </div>
         </div>
        </form>
</div>
     
     
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
