import { routing } from '@/i18n/routing';
import Header from '@/components/content/header';
import Footer from '@/components/content/footer';
import HomePage from '@/components/content/HomePage';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const Home = () => {
  return (
    <div className='body'>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;