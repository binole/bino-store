import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-stretch'>
      <Header />
      <main>
        {children}
      </main>
      <Footer className='mt-auto' />
    </div>
  )
}

export default Layout
