import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import { useRouter } from 'next/router';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

const Layout: React.FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || 'Pokemon App'} </title>
        <meta name="author" content="Miller Johao" />
        <meta name="description" content={`Pokedex ${title}`} />
        <meta name="keywords" content={`Pokémon, Pokedex, ${title}`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content="Pokedex!" />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar></Navbar>
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
