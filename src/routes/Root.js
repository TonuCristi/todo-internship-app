import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  navBar: {
    bg: "rgb(33, 37, 41)",
    color: "rgb(252, 196, 25)",
    titleFS: "2.4rem",
    linkFS: "1.8rem",
  },
};

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
