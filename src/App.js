import { render } from "react-dom";
// import SearchParams from "./SearchParams"; //static import executes at build-time not run-time
import { StrictMode, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details")); //dynamic js import(return promise) with lazy func in react
const SearchParams = lazy(() => import("./SearchParams")); //The React.lazy function lets you render a dynamic import as a regular component.

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <Suspense fallback={<h2>loading, wait a sec you weirdo 😜</h2>}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
