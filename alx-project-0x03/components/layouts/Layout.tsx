import { Children, ReactNode } from "react";
import React from 'react'; // <--- Added React import for React.FC

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;