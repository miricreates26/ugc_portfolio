import content from './content.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Introduction from './components/Introduction.jsx';
import Photography from './components/Photography.jsx';
import Results from './components/Results.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar data={content.nav} />
      <main>
        <Hero data={content.hero} />
        <Introduction data={content.introduction} />
        <Photography data={content.photography} />
        <Results data={content.results} />
        <AboutMe data={content.about} />
        <Contact data={content.contact} />
      </main>
    </>
  );
}
