import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Pets from "./scenes/pets";
// import Fridge from "./scenes/fridge";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider  value={colorMode}> 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className = "content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />}  />
              {/* <Route path="/pets" element={<Pets />}  /> */}
              {/* <Route path="/fridge" element={<Fridge />}  /> */}
              <Route path="/calendar" element={<Calendar />}  /> 
              {/* <Route path="/form" element={<Form />}  /> */}
              {/* <Route path="/faq" element={<FAQ />}  /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
