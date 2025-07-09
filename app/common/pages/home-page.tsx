import Hero from '~/common/components/hero';
import Portfolio from '~/common/components/portfolio';
import TeamMember from '~/common/components/team-member';
import ContactForm from '~/common/components/contact-form';
import Footer from '~/common/components/footer';
import LocaleConverter from '../components/locale-converter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <TeamMember />
      <ContactForm />
      <Footer />
      <LocaleConverter />
    </>
  );
}
