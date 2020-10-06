import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';

const Layout = ({ children }) => (
  <main>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </main>
);

export default Layout;
