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
  </body>
  );
}

export default App;
