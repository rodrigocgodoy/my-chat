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
      <header>
        <nav>
          Is header
        </nav>
        <hr/>
      </header>
      {children}
      <footer>
        <hr />
        <span>Is footer</span>
      </footer>
    </div>
  );
};

export default Layout;
