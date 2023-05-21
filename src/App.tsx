import NavigationBar from "./components/NavigationBar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialPage";
import ContactPage from "./pages/ContactPage";
import { AppContainer } from "./styles/containers/App";
import "./App.css";
import AffixControl from "./components/AffixControl";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppContainer>
          <AffixControl />
          <NavigationBar />
          <HomePage id="home" />
          <AboutPage id="about" />
          <WorkPage id="work" />
          <ProjectPage id="project" />
          <TestimonialPage id="testimonial" />
          <ContactPage id="contact" />
        </AppContainer>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
