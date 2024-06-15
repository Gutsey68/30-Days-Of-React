import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="wrap"></div>
      </div>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
