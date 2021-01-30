import React, { ReactNode } from 'react'
import Seo from './Seo';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: Props) => {
  return (
    <div>
      <Seo title={title} description={description} />
      <header className="container mx-auto">
        <nav>
          Is header
        </nav>
        <hr/>
      </header>
      {children}
      <footer className="container mx-auto">
        <hr />
        <span>Is footer</span>
      </footer>
    </div>
  );
};

export default Layout;
