import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  children?: ReactNode;
};

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="bg-white py-10 mx-auto text-center">{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
