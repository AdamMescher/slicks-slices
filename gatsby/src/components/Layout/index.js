import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import Content from '../Content';
import SiteBorder from '../SiteBorder';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <SiteBorder>
      <Content>
        <Nav />
        {children}
        <Footer />
      </Content>
    </SiteBorder>
  </>
);

export default Layout;
