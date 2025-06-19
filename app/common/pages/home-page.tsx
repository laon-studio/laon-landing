import Hero from '~/common/components/hero';
import TeamMember from '~/common/components/team-member';
import Portfolio from '~/common/components/portfolio';
import ComponentMenu from '~/common/components/component-menu';
import ContactForm from '~/common/components/contact-form';
import Footer from '~/common/components/footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TeamMember />
      <Portfolio />
      <ComponentMenu />
      <ContactForm />
      <Footer />
    </>
  );
}
