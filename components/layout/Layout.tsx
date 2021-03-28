import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  siteTitle?: string;
  pageTitle?: string;
}

const Layout: React.FC<Props> = ({ siteTitle = "Bino's Store", pageTitle = '', children }) => {
  const title = pageTitle?.length ? `${siteTitle} - ${pageTitle}` : siteTitle;

  return (
    <div className='min-h-screen flex flex-col items-stretch'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='mb-12'>
        {children}
      </main>
      <Footer className='mt-auto' />
    </div>
  )
}

export default Layout
