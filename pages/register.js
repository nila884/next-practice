import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Router from 'next/router';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const submitData = async (e) => {
    e.preventDefault();
    try {
      if(!userName || !email || !password || !comfirmPassword){
        console.log("invalid")
        return 
        // res.status(422).json({error:"please ass all the fields"})
      }
      if (password.localeCompare(comfirmPassword)) {
        console.log("invalid password")
        return
        //  res.status(422).json({error:"password are different"})
      }
      const body = { userName, password,email,companyName };
      try {
        await fetch('/api/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }) 
        await Router.push('/login');
      } catch (error) {
        console.log(error)
      }


      // const body = { companyName };
      // await fetch('/api/company', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(body),
      // }).then(
      //   function(res) {
      //     console.log(res)
      //   },
      //   function (error) {
      //    console.log(error) 
      //   }
      // );

      // await Router.push('/drafts');
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


<div className="w-full bg-green-900 flex items-center justify-center h-screen">
<div className="flex w-3/5 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
<div className="flex-1 pr-16 mr-10">
<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome</h2>
<p className="mt-2 text-center text-sm text-gray-600">
    
      {/* <p className="font-medium text-gray-900 hover:text-gray-600">
        create an account if you have not one yet here
      </p>
         <Link className="font-medium text-gray-900 hover:text-gray-600" href={`/register`}>
             <a>create new account</a>
        </Link>
     */}
     </p>
</div>
<div className="flex-1 max-w-md w-full space-y-8">
  <div>
   
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
  </div>
  <form className="mt-8 space-y-6" onSubmit={submitData}>
    <input type="hidden" name="remember" defaultValue="true" />
    <div className="rounded-md shadow-sm -space-y-px">
     
<div>
        <label htmlFor="companyName" className="sr-only">
          company name
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          autoComplete="companyName"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="company name"
          value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userName" className="sr-only">
          User name
        </label>
        <input
          id="userName"
          name="userName"
          type="text"
          autoComplete="userName"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="User name"
          value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
          value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="comfirmPassword"
          name="comfirmPassword"
          type="password"
          autoComplete="comfirmPassword"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="comfirm password"
          onChange={(e) => setComfirmPassword(e.target.value)}
          value={comfirmPassword}
        />
      </div>

    </div>
    <div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
        </span>
        Sing up
      </button>
    </div>
    

  </form>
      <Link href={`/login`}>
                 <a className="h-5 w-5  text-gray-900 group-hover:text-gray-800" aria-hidden="true">Cancel</a>
         </Link>
</div>
</div>
</div>
        </main>
</div>
)
}
