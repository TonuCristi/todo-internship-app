import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";
import { GlobalContainer } from "../components/styles/Container.styled";

const theme = {
  navBar: {
    colors: {
      bg: "rgb(33, 37, 41)",
      color: "rgb(252, 196, 25)",
    },
    fontSize: {
      title: "2.4rem",
      link: "1.8rem",
    },
  },
  list: {
    colors: {
      bg: "rgb(33, 37, 41)",
      color: "rgb(252, 196, 25)",
      white: "rgb(248, 249, 250)",
    },
    fontSize: {
      title: "2.4rem",
      link: "1.8rem",
      catFact: "1.6rem",
      showFormBtn: "2.8rem",
      input: "1.6rem",
      item: "1.6rem",
      btn: "1.6rem",
    },
  },
  statistics: {
    colors: {
      bg: "rgb(33, 37, 41)",
      color: "rgb(252, 196, 25)",
      white: "rgb(248, 249, 250)",
    },
    fontSize: {
      title: "2.4rem",
      list: "1.8rem",
      emoji: "30rem",
    },
  },
  about: {
    colors: {
      bg: "rgb(33, 37, 41)",
      color: "rgb(252, 196, 25)",
      white: "rgb(248, 249, 250)",
    },
    fontSize: {
      title: "2.4rem",
      description: "1.8rem",
    },
  },
  footer: {
    colors: {
      bg: "rgb(33, 37, 41)",
      color: "rgb(252, 196, 25)",
      white: "rgb(248, 249, 250)",
    },
    fontSize: {
      size: "1.2rem",
    },
  },
};

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContainer>
        <GlobalStyles />
        <NavBar />
        <Outlet />
        <Footer />
      </GlobalContainer>
    </ThemeProvider>
  );
}
