import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <main>
    <Nav />
    {children}
    <Footer />
  </main>
);

export default Layout;
