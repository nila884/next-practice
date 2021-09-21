import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'

/* middleware */
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from '../util/utils';

/* components */
// import Layout from '../components/layout/Layout';
function handleOnClickLogout(e) {
  setLogout(e);
}
export default function About(props) {
  const { profile } = props;

  function handleOnClickLogout(e) {
    setLogout(e);
  }

  return (
    <div className="container">
            <Head>
        <title>Home</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          
<nav className="flex items-center justify-between flex-wrap bg-green-900 p-6">
  <div className="flex items-center flex-no-shrink text-white mr-6">
    {!profile ? (
    <span className="font-semibold text-xl tracking-tight">Company Name</span>
    ):(
      <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    )}

  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
        Blog
      </a> */}
    </div>
    <div>
      {!profile ? (
        <Link href='/login'>
        <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Login</a>
        </Link>
      ):(
        <a href="#" onClick={e => handleOnClickLogout(e)} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Logout</a>
      )}
    </div>
  </div>
</nav>
          {/* <h1 classNameName="title">About Page</h1>
          {!profile ? (
            
            <Link>
              <a href="/login">Login to continue</a>
            </Link>
          ) : (
            <div>
              <div style={{ margin: '.5rem 0rem' }}>
                <Link href={{ pathname: '/' }}>
                  <a style={{ marginRight: '.75rem' }}>&bull; Home Page</a>
                </Link>
                <a href="#" onClick={e => handleOnClickLogout(e)}>
                  &bull; Logout
                </a>
              </div>
              <div style={{ textAlign: 'left' }}>
                <fieldset>
                  <legend>
                    <h3>Your Profile</h3>
                  </legend>
                  <h4>ID: {profile.id}</h4>
                  <h4>Email: {profile.email}</h4>
                  <h4>Created: {profile.createdAt}</h4>
                </fieldset>
              </div>
            </div>
          )} */}
        </main>
      </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api/about`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';

  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
}