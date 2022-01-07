import { createTheme, ThemeProvider } from "@mui/material";
import { Footer } from "./components/Footer";
import { Home } from "./components/home";
import { Navbar } from "./components/Navbar";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),

      h1: {
        fontWeight: 700,
        fontSize: "39.06px",
        color: "#e9ebeb",
        lineHeight: "59px",
        textAlign: "center",
      },

      h3: {
        fontSize: "25px",
        fontWeight: 700,
        lineHeight: "37px",
      },
      h4: {
        fontSize: "20px",
        fontWeight: 700,
        // margin: "1.6rem 0",
      },
      h5: {
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "36px",
      },
      h6: {
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "24px",
      },
      body: {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#fa3d3d",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div style={{ marginTop: 80 }}>
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
