import { routing } from '@/i18n/routing';
import Header from '@/components/content/header';
import Footer from '@/components/content/footer';
import Presentation from '../../components/content/presentation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const Home = () => {
  return (
    <div className='body'>
      <Header />
      <Presentation />
      <Footer />
    </div>
  );
};

export default Home;