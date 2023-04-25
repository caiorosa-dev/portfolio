import GlobalStyle from '../../assets/styles/global';
import FooterSection from '../Sections/FooterSection';
import HeaderSection from '../Sections/HeaderSection';
import IntroductionSection from '../Sections/IntroductionSection';
import ProjectsSection from '../Sections/ProjectsSection';
import TechnologiesSection from '../Sections/TechnologiesSection';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection />
      <IntroductionSection />
      <TechnologiesSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
}

export default App;
