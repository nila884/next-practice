import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from 'next/router';
import Cookies from 'js-cookie';

/* middleware */
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from '../util/utils';

export default function Home() {

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitData = async (e) => {
    e.preventDefault();
      try {
        if(!email || !password){
          console.log("invalid")
          return 
          // res.status(422).json({error:"please ass all the fields"})
        }
      const body = { password,email};
      let loginApi= await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      
      console.log(loginApi.status)
      let result = await loginApi.json();
     
      if (result.success && result.token) {
        Cookies.set('token', result.token);
        // window.location.href = referer ? referer : "/";
        // const pathUrl = referer ? referer.lastIndexOf("/") : "/";
        Router.push('/');
      } else {
        setStateFormMessage(result);
      }
      } catch (error) {
        
      }
  }

  return (   
<div className="w-full bg-green-900 flex items-center justify-center h-screen">
<div className="flex w-3/5 rounded-md bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
<div className="flex-1 pr-16 mr-10">
<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome</h2>
<p className="mt-2 text-center text-sm text-gray-600">
    
      <p className="font-medium text-gray-900 hover:text-gray-600">
        create an account if you have not one yet here
      </p>
         <Link className="font-medium text-gray-900 hover:text-gray-600" href={`/register`}>
             <a>create new account</a>
        </Link>
    </p>
</div>
<div className="flex-1 max-w-md w-full space-y-8">
  <div>
   
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
  </div>
  <form className="mt-8 space-y-6" onSubmit={submitData}>
    <input type="hidden" name="remember" defaultValue="true" />
    <div className="rounded-md shadow-sm -space-y-px">
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
    </div>
    <div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
        </span>
        Sign in
      </button>
    </div>
    

  </form>

</div>
</div>
</div>
)
  
}

export async function getServerSideProps(context) {
    const { req } = context;
    const { origin } = absoluteUrl(req);
  
    const baseApiUrl = `${origin}/api`;
  
    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(' ')[1]) : '';
    return {
      props: {
        baseApiUrl,
        profile,
      },
    }
}