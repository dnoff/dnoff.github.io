import { Layout } from './layout';
import { About, Contact, Hero, Projects, Skills, Timeline } from './sections';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
