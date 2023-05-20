import NavigationBar from "./components/NavigationBar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialPage";
import ContactPage from "./pages/ContactPage";
import { AppContainer } from "./styles/containers/App";
import "./App.css";

function App() {
  return (
    <AppContainer>
      <NavigationBar />
      <HomePage id="home" />
      <AboutPage id="about" />
      <WorkPage id="work" />
      <ProjectPage id="project" />
      <TestimonialPage id="testimonial" />
      <ContactPage id="contact" />
    </AppContainer>
  );
}

export default App;
