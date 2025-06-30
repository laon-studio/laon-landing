import Hero from '~/common/components/hero';
import Portfolio from '~/common/components/portfolio';
import ContactForm from '~/common/components/contact-form';
import Footer from '~/common/components/footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}
