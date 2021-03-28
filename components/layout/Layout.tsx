import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
