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
  Container,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./components/Footer";

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <Provider store={store}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1140,
                    xl: 1320,
                  },
                },
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Notifications position="bottom-left" />
          <AppContainer>
            <AffixControl />
            <NavigationBar larger={largeScreen} />
            <Container size="lg">
              <HomePage id="home" />
              <AboutPage id="about" />
              <WorkPage id="work" />
              <ProjectPage id="project" />
              <TestimonialPage id="testimonial" />
              <ContactPage id="contact" />
              <Footer />
            </Container>
          </AppContainer>
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
};

export default App;
