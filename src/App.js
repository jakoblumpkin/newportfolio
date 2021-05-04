import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import './css/welcomepage.css';
import SideIconLinks from './SideIconLinks';
import MiddleSection from './MiddleSection';
import ScrollSection from './ScrollSection';
import Links from './Links/Links';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Work from './Work/Work';
import FormSection from './Form/FormSection';

function App() {
  return (
  <body>
    <Header/>
    <section id="welcomePage">
      <SideIconLinks/>
      <MiddleSection/>
      <ScrollSection/>
    </section>
    <Links/>
    <About/>
    <Skills/>
    <Experience/>
    <Work/>
    <FormSection/>
  </body>
  );
}

export default App;
