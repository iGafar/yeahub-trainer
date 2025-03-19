import Footer from '@/widgets/footer';
import Header from '@/widgets/header';
import { Outlet } from 'react-router';

export default function BaseLauot() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
